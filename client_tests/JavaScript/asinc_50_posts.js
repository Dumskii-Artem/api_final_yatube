const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const loginData = {
  username: "regular_user",
  password: "iWannaBeAdmin"
};

const createPost = async () => {
  try {
    // 1. Авторизация
    const authResponse = await fetch("http://127.0.0.1:8000/api/v1/jwt/create/", {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(loginData),
      redirect: "follow"
    });

    const authResult = await authResponse.json();
    const accessToken = authResult.access;
    console.log("Access token получен:", accessToken);

    // 2. Добавим Authorization заголовок
    const authHeaders = new Headers();
    authHeaders.append("Content-Type", "application/json");
    authHeaders.append("Authorization", `Bearer ${accessToken}`);

    // 3. Цикл с последовательными запросами
    for (let i = 1; i <= 20; i++) {
      const body = JSON.stringify({
        text: `Пост номер ${i} зарегистрированного пользователя.`
      });

      const postResponse = await fetch("http://127.0.0.1:8000/api/v1/posts/", {
        method: "POST",
        headers: authHeaders,
        body: body,
        redirect: "follow"
      });

      const postResult = await postResponse.text();
      console.log(`Пост ${i} отправлен:`, postResult);
    }

  } catch (error) {
    console.error("Ошибка:", error);
  }
};

createPost();
