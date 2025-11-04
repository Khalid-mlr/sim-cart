export async function registerUser(form) {
  const response = await fetch("http://127.0.0.1:8000/api/register/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(form),
  });
  if (!response.ok) throw new Error(`Ошибка ${response.status}`);
  return await response.json();
}
