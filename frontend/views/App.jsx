import { useState } from "react";
import "../src/index.css";

export default function App() {
  const [mode, setMode] = useState("home");
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    middleName: "",
    birthDate: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://127.0.0.1:8000/api/register/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!response.ok) throw new Error(`Ошибка ${response.status}`);

      const data = await response.json();
      alert(data.message || "Регистрация успешна!");
      setForm({
        firstName: "",
        lastName: "",
        middleName: "",
        birthDate: "",
        email: "",
        password: "",
      });
      setMode("home");
    } catch (err) {
      console.error("Ошибка при запросе:", err);
      alert("Ошибка при подключении к серверу");
    }
  };

  if (mode === "home") {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
        <h1 className="text-3xl mb-8">Sim-Cart App</h1>
        <div className="space-x-4">
          <button
            onClick={() => setMode("login")}
            className="bg-blue-500 px-6 py-2 rounded-xl hover:bg-blue-600"
          >
            Войти
          </button>
          <button
            onClick={() => setMode("register")}
            className="bg-green-500 px-6 py-2 rounded-xl hover:bg-green-600"
          >
            Регистрация
          </button>
        </div>
      </div>
    );
  }

  if (mode === "register") {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-800 text-white">
        <h2 className="text-2xl mb-4">Регистрация</h2>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col bg-gray-700 p-8 rounded-xl space-y-4 w-80"
        >
          <input name="firstName" placeholder="Имя" value={form.firstName} onChange={handleChange} className="p-2 rounded bg-gray-600 text-white" required />
          <input name="lastName" placeholder="Фамилия" value={form.lastName} onChange={handleChange} className="p-2 rounded bg-gray-600 text-white" required />
          <input name="middleName" placeholder="Отчество" value={form.middleName} onChange={handleChange} className="p-2 rounded bg-gray-600 text-white" />
          <input type="date" name="birthDate" value={form.birthDate} onChange={handleChange} className="p-2 rounded bg-gray-600 text-white" required />
          <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} className="p-2 rounded bg-gray-600 text-white" required />
          <input type="password" name="password" placeholder="Пароль" value={form.password} onChange={handleChange} className="p-2 rounded bg-gray-600 text-white" required />

          <button type="submit" className="bg-green-500 p-2 rounded-xl hover:bg-green-600">
            Зарегистрироваться
          </button>
          <button type="button" onClick={() => setMode("home")} className="text-sm text-gray-300 hover:underline">
            Назад
          </button>
        </form>
      </div>
    );
  }

  if (mode === "login") {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-800 text-white">
        <h2 className="text-2xl mb-4">Вход</h2>
        <form onSubmit={(e) => { e.preventDefault(); alert("Авторизация пока не реализована"); }} className="flex flex-col bg-gray-700 p-8 rounded-xl space-y-4 w-80">
          <input type="email" placeholder="Email" className="p-2 rounded bg-gray-600 text-white" required />
          <input type="password" placeholder="Пароль" className="p-2 rounded bg-gray-600 text-white" required />
          <button type="submit" className="bg-blue-500 p-2 rounded-xl hover:bg-blue-600">
            Войти
          </button>
          <button type="button" onClick={() => setMode("home")} className="text-sm text-gray-300 hover:underline">
            Назад
          </button>
        </form>
      </div>
    );
  }
}
