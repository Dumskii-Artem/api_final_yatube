const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

let raw = JSON.stringify({
  "username": "regular_user",
  "password": "iWannaBeAdmin"
});

let requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch("http://127.0.0.1:8000/api/v1/jwt/create/", requestOptions)
  .then((response) => response.json())
  .then((result) => {
        console.log(result.access);
        // здесь используется часть myHeaders
        myHeaders.append("Authorization", `Bearer ${result.access}`);
    })
  .catch((error) => console.error(error));