const BASE_URL = "http://127.0.0.1:8000/api";

export async function registerUser(userData) {
  const response = await fetch(`${BASE_URL}/register/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
    credentials: "include"
  });

  if (!response.ok) throw new Error(`Ошибка регистрации: ${response.status}`);
  return await response.json();
}

export async function loginUser(userData) {
  const response = await fetch(`${BASE_URL}/login/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
    credentials: "include"
  });

  if (!response.ok) throw new Error(`Ошибка входа: ${response.status}`);
  return await response.json();
}
