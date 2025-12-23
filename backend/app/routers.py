from fastapi import APIRouter
from app.schemas import ContactCreate

router = APIRouter(prefix="/contact", tags=["Contact"])

@router.post("/")
def create_contact(contact: ContactCreate):
    return {
        "success": True,
        "message": "Contact saved successfully",
        "data": contact
    }
