from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from email_utils import send_contact_email
from app.schemas import ContactCreate, ContactResponse
from models import Contact
from deps import get_db

router = APIRouter(
    prefix="/contact",
    tags=["Contact"]
)

@router.post("/", response_model=ContactResponse)
def create_contact(
    contact: ContactCreate,
    db: Session = Depends(get_db)
):
    new_contact = Contact(
        name=contact.name,
        email=contact.email,
        message=contact.message
    )

    db.add(new_contact)
    db.commit()
    db.refresh(new_contact)

    # SEND EMAIL
    send_contact_email(
        name=contact.name,
        email=contact.email,
        message=contact.message
    )

    return new_contact

