from sqlalchemy import Column, Integer, String
from database import Base


class Roadmap(Base):
    __tablename__ = "roadmaps"

    id = Column(Integer, primary_key=True, index=True)

    company_id = Column(Integer)

    title = Column(String, nullable=False)

    description = Column(String, nullable=False)