from sqlalchemy import Column, Integer, String
from database import Base


class Company(Base):
    __tablename__ = "companies"

    id = Column(Integer, primary_key=True, index=True)

    company_name = Column(String, nullable=False)

    role = Column(String, nullable=False)

    experience = Column(String)

    package = Column(String)

    roadmap = Column(String)
    