import requests

url = "http://127.0.0.1:5000/add_favorite"
headers = {'Content-Type': 'application/json'}
data = {"recipe_id": 53076}

response = requests.post(url, json=data, headers=headers)
print(response.json())
