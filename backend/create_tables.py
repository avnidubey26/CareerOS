from database import engine, Base
from models.user import User
from models.company import Company
from models.question import Question
from models.roadmap import Roadmap

print("Creating tables...")

Base.metadata.create_all(bind=engine)

print("Tables created successfully!")