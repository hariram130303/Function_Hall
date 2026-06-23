import { useState } from "react";
import api from "../services/api";

export default function Login() {
  const [email, setEmail] =
    useState("");

  const [password,
    setPassword] =
    useState("");

  const login =
    async (e) => {
      e.preventDefault();

      const res =
        await api.post(
          "/auth/login",
          {
            email,
            password
          }
        );

      localStorage.setItem(
        "token",
        res.data.token
      );

      alert("Login Success");
    };

  return (
    <div className="form">
      <h2>Login</h2>

      <form onSubmit={login}>
        <input
          placeholder="Email"
          onChange={(e) =>
            setEmail(
              e.target.value
            )
          }
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) =>
            setPassword(
              e.target.value
            )
          }
        />

        <button>
          Login
        </button>
      </form>
    </div>
  );
}