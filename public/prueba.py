import requests

url= 'http://localhost:8000/register'


userdata = {
  "desc_school": "Name School",
  "cif": "abcde",
  "phone": "999999999",
  "zip_code": "15011",
  "email": "info@school.com",
  "password": "strongpass",
  "country_id": "España",
  "type_id": "Concertado",
  "city": "La Coruña"
}

ans = requests.post(url, json=userdata)
print(ans.text)