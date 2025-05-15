import requests
import json

url = "http://localhost:8000/api/v1/posts/"
# url = "http://127.0.0.1:8000/api/v1/posts/"


headers = {
  'Content-Type': 'application/json',
  'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzQ3Nzg1OTkwLCJqdGkiOiIwN2Q3ZGY3ZGMyN2Y0NWQ1OWRjMmY2NWE2ZGQ5ZjNlZSIsInVzZXJfaWQiOjF9.5h7QFApt-Jhh6vzAyeWBawwNoQ9uTvICxbxLS8vvBbU'
}

for i in range(18,19):
    payload = json.dumps({
        "text": f"Пост #{i} с группой",
        "group": 1
    })
    response = requests.request("POST", url, headers=headers, data=payload)

    print(response.text)
