from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

# Configuración de CORS
origins = [
    "http://localhost:8000",
    "http://localhost",
    "null",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Item(BaseModel):
    desc_school: str
    cif: str
    phone: str
    email: str
    password: str
    country_id: str
    city: str
    type_id: str

@app.post("/items/")
async def create_item(item: Item):
    return {"item": item.dict()}