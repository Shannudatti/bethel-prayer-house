from fastapi import APIRouter, HTTPException, Depends
from pydantic import BaseModel
from sqlalchemy.orm import Session

from auth_utils import get_current_user, require_admin
from database import SessionLocal
from models import PrayerRequest


router = APIRouter(
    prefix="/api/prayer-requests",
    tags=["Prayer Requests"]
)


# ==================================================
# Request Schema
# ==================================================

class PrayerRequestData(BaseModel):
    name: str
    phone: str
    prayer: str


# ==================================================
# CREATE
# ==================================================

@router.post("/")
def create_prayer_request(request: PrayerRequestData):
    db: Session = SessionLocal()

    try:
        new_prayer = PrayerRequest(
            name=request.name,
            phone=request.phone,
            prayer=request.prayer
        )

        db.add(new_prayer)
        db.commit()
        db.refresh(new_prayer)
 
        return {
            "message": "Prayer request saved successfully! 🙏",
            "data": {
                "id": new_prayer.id,
                "name": new_prayer.name,
                "phone": new_prayer.phone,
                "prayer": new_prayer.prayer,
                "status": new_prayer.status
            }
        }

    finally:
        db.close()


# ==================================================
# GET ALL
# ==================================================

@router.get("/")
def get_prayer_requests(current_user: dict = Depends(get_current_user)):
    db: Session = SessionLocal()

    try:
        prayers = (
            db.query(PrayerRequest)
            .order_by(PrayerRequest.id.desc())
            .all()
        )

        return {
            "count": len(prayers),
            "data": [
                {
                    "id": prayer.id,
                    "name": prayer.name,
                    "phone": prayer.phone,
                    "prayer": prayer.prayer,
                    "status": prayer.status,
                    "created_at": prayer.created_at
                }
                for prayer in prayers
            ]
        }

    finally:
        db.close()

@router.patch("/{prayer_id}/status")
def update_prayer_status(
    prayer_id: int,
    status: str,
    current_user: dict = Depends(get_current_user)
):
    db: Session = SessionLocal()

    try:
        # Only admin and prayer team can change prayer status
        if current_user.get("role") not in ["admin", "prayer"]:
            raise HTTPException(
                status_code=403,
                detail="You do not have permission to update prayer status"
            )

        prayer = (
            db.query(PrayerRequest)
            .filter(PrayerRequest.id == prayer_id)
            .first()
        )

        if not prayer:
            raise HTTPException(
                status_code=404,
                detail="Prayer request not found"
            )

        if status not in ["new", "prayed"]:
            raise HTTPException(
                status_code=400,
                detail="Invalid status"
            )

        prayer.status = status

        db.commit()
        db.refresh(prayer)

        return {
            "message": "Prayer status updated successfully! 🙏",
            "data": {
                "id": prayer.id,
                "status": prayer.status
            }
        }

    finally:
        db.close()
# ==================================================
# UPDATE
# ==================================================

@router.put("/{prayer_id}")
def update_prayer_request(
    prayer_id: int,
    request: PrayerRequestData,
    current_user: dict = Depends(require_admin)
):
    db: Session = SessionLocal()

    try:
        prayer = (
            db.query(PrayerRequest)
            .filter(PrayerRequest.id == prayer_id)
            .first()
        )

        if not prayer:
            raise HTTPException(
                status_code=404,
                detail="Prayer request not found"
            )

        prayer.name = request.name
        prayer.phone = request.phone
        prayer.prayer = request.prayer

        db.commit()
        db.refresh(prayer)

        return {
            "message": "Prayer request updated successfully! 🙏",
            "data": {
                "id": prayer.id,
                "name": prayer.name,
                "phone": prayer.phone,
                "prayer": prayer.prayer,
                "status": prayer.status,
                "created_at": prayer.created_at
            }
        }

    finally:
        db.close()


# ==================================================
# DELETE
# ==================================================

@router.delete("/{prayer_id}")
def delete_prayer_request(
    prayer_id: int,
    current_user: dict = Depends(require_admin)
):
    db: Session = SessionLocal()

    try:
        prayer = (
            db.query(PrayerRequest)
            .filter(PrayerRequest.id == prayer_id)
            .first()
        )

        if not prayer:
            raise HTTPException(
                status_code=404, 
                detail="Prayer request not found"
            )

        db.delete(prayer)
        db.commit()

        return {
            "message": "Prayer request deleted successfully! 🗑️"
        }

    finally:
        db.close()