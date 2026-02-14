from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
from pathlib import Path

from app.api.api import api_router
from app.core.config import settings
from app.db.base import Base
from app.db.session import engine

# Create tables for now (in production prefer Alembic)
Base.metadata.create_all(bind=engine)

app = FastAPI(
    title=settings.PROJECT_NAME,
    openapi_url=f"{settings.API_V1_STR}/openapi.json",
)

# Serve frontend static files (index.html + assets)
frontend_dir = Path(__file__).resolve().parent.parent / "frontend"
if frontend_dir.exists():
    app.mount("/frontend", StaticFiles(directory=str(frontend_dir), html=True), name="frontend")

# Serve frontend at root path for easy access
@app.get("/", include_in_schema=False)
def serve_frontend_root():
    index = frontend_dir / "index.html"
    if index.exists():
        return FileResponse(index)
    return {"message": "Welcome to Droham Private Limited ERP API"}


# Simple ping endpoint for frontend testing
@app.get(f"{settings.API_V1_STR}/ping", include_in_schema=False)
def ping():
    return {"message": "pong"}

# Set all CORS enabled origins
if settings.BACKEND_CORS_ORIGINS:
    app.add_middleware(
        CORSMiddleware,
        allow_origins=[str(origin) for origin in settings.BACKEND_CORS_ORIGINS],
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )

app.include_router(api_router, prefix=settings.API_V1_STR)


@app.get("/")
def read_root():
    return {"message": "Welcome to Droham Private Limited ERP API"}
