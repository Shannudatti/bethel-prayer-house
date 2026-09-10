from dotenv import load_dotenv
load_dotenv()
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from database import engine, Base
from routes.auth import router as auth_router


from routes.prayer_requests import router as prayer_requests_router


# Create FastAPI application
app = FastAPI(
    title="Bethel Prayer House API",
    description="Backend API for Bethel Prayer House",
    version="1.0.0"
)


# --------------------------------------------------
# CORS
# --------------------------------------------------

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
        "https://bethel-prayer-house.onrender.com"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# --------------------------------------------------
# Database
# --------------------------------------------------

# Create database tables
Base.metadata.create_all(bind=engine)

# Prayer Request routes
app.include_router(prayer_requests_router)
# Authentication routes
app.include_router(auth_router)
@app.get("/")
def home():
    return {
        "message": "Bethel Prayer House API is running! 🙏"
    }

@app.get("/test-db")
def test_database():
    try:
        with engine.connect():
            return {
                "message": "PostgreSQL connection successful! 🐘"
            }

    except Exception as e:
        return {
            "message": "Database connection failed",
            "error": str(e)
        }