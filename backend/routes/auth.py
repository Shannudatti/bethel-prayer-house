from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from sqlalchemy.orm import Session
from pwdlib import PasswordHash

from auth_utils import create_access_token
from database import SessionLocal
from models import User


router = APIRouter(
    prefix="/api/auth",
    tags=["Authentication"]
)


password_hash = PasswordHash.recommended()


# ==================================================
# REQUEST SCHEMAS
# ==================================================

class RegisterRequest(BaseModel):
    name: str
    email: str
    password: str
    role: str = "prayer"


class LoginRequest(BaseModel):
    email: str
    password: str


# ==================================================
# REGISTER
# ==================================================

@router.post("/register")
def register_user(request: RegisterRequest):
    db: Session = SessionLocal()

    try:
        allowed_roles = ["admin", "tech", "prayer"]

        if request.role not in allowed_roles:
            raise HTTPException(
                status_code=400,
                detail="Invalid role. Use admin, tech, or prayer."
            )

        existing_user = (
            db.query(User)
            .filter(User.email == request.email)
            .first()
        )

        # Hash password
        hashed_password = password_hash.hash(
            request.password
        )

        # Create user
        new_user = User(
            name=request.name,
            email=request.email,
            password_hash=hashed_password,
            role=request.role
        )

        db.add(new_user)
        db.commit()
        db.refresh(new_user)

        return {
            "message": "Admin account created successfully! 🎉",
            "data": {
                "id": new_user.id,
                "name": new_user.name,
                "email": new_user.email,
                "role": new_user.role
            }
        }

    finally:
        db.close()


# ==================================================
# LOGIN
# ==================================================

@router.post("/login")
def login_user(request: LoginRequest):
    db: Session = SessionLocal()

    try:
        # Find user by email
        user = (
            db.query(User)
            .filter(User.email == request.email)
            .first()
        )

        # User doesn't exist
        if not user:
            raise HTTPException(
                status_code=401,
                detail="Invalid email or password"
            )

        # Verify password
        if not password_hash.verify(
            request.password,
            user.password_hash
        ):
            raise HTTPException(
                status_code=401,
                detail="Invalid email or password"
            )

        # Create JWT access token
        access_token = create_access_token(
            user_id=user.id,
            email=user.email,
            role=user.role
        )

        # Return token
        return {
            "message": "Login successful! 🎉",
            "access_token": access_token,
            "token_type": "bearer",
            "data": {
                "id": user.id,
                "name": user.name,
                "email": user.email,
                "role": user.role
            }
        }

    finally:
        db.close()