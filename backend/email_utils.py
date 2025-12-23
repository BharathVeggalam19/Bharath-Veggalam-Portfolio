import smtplib
from email.message import EmailMessage
import os
from dotenv import load_dotenv

load_dotenv()

EMAIL_HOST = os.getenv("EMAIL_HOST")
EMAIL_PORT = int(os.getenv("EMAIL_PORT"))
EMAIL_USERNAME = os.getenv("EMAIL_USERNAME")
EMAIL_PASSWORD = os.getenv("EMAIL_PASSWORD")
EMAIL_TO = os.getenv("EMAIL_TO")

def send_contact_email(name: str, email: str, message: str):
    msg = EmailMessage()
    msg["Subject"] = "📩 New Portfolio Contact"
    msg["From"] = EMAIL_USERNAME
    msg["To"] = EMAIL_TO

    msg.set_content(
        f"""
New contact received:

Name: {name}
Email: {email}

Message:
{message}
"""
    )

    with smtplib.SMTP(EMAIL_HOST, EMAIL_PORT) as server:
        server.starttls()
        server.login(EMAIL_USERNAME, EMAIL_PASSWORD)
        server.send_message(msg)
