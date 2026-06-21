from pydantic import BaseModel


class CompanyCreate(BaseModel):
    company_name: str
    role: str
    experience: str
    package: str
    roadmap: str