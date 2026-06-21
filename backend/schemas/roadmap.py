from pydantic import BaseModel


class RoadmapCreate(BaseModel):
    company_id: int
    title: str
    description: str