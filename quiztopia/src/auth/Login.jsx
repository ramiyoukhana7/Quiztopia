import { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async () => {
    const url =
      "https://fk7zu3f4gj.execute-api.eu-north-1.amazonaws.com/auth/login";
    const settings = {
      method: "POST",
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    };

    const response = await fetch(url, settings);
    const data = await response.json();
    console.log("handleLogin: ", data);

    if (data.success) {
      setMessage("Login successful");
      sessionStorage.setItem("token", data.token);
    } else {
      setMessage("Login failed");
    }
  };

  return (
    <div className="container">
      <h1>Login</h1>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      <button onClick={handleLogin}>Login</button>
      <p>{message}</p>
    </div>
  );
};
export default Login;
