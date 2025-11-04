import { registerUser } from "../controllers/authController.js";
import { User } from "../models/userModel.js";

const form = document.getElementById("registerForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  const user = new User(
    formData.get("email"),
    formData.get("password"),
    formData.get("username")
  );

  try {
    const data = await registerUser(user);
    alert("Регистрация успешна!");
    console.log("Ответ сервера:", data);
  } catch (error) {
    alert(error.message);
  }
});
