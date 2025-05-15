const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Authorization", `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzQ4MTc3MjAzLCJqdGkiOiJmYjA2YWE1MWRhZWI0ZDhkODJkMzRiZWE5Y2M0ZGVmOSIsInVzZXJfaWQiOjJ9.urpxonS5qny3dOJ1SUnNwUgryeGjsTBJLlKZKnZmDrU`);

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: null, // Временно null, будет меняться в цикле
  redirect: "follow"
};

for (let i = 1; i <= 50; i++) {

    requestOptions.body = JSON.stringify({
        text: `Пост номер ${i} зарегистрированного пользователя.`
    });
    
    fetch("http://127.0.0.1:8000/api/v1/posts/", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
}