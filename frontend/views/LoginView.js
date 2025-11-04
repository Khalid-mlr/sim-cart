import { loginUser } from "../controllers/authController.js";
import { User } from "../models/userModel.js";

const form = document.getElementById("loginForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  const user = new User(formData.get("email"), formData.get("password"));

  try {
    const data = await loginUser(user);
    alert("Успешный вход!");
    console.log("Ответ сервера:", data);
  } catch (error) {
    alert(error.message);
  }
});
