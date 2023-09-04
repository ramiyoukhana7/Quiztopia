import { useState } from "react";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleCreateUser = async () => {
    const url =
      "https://fk7zu3f4gj.execute-api.eu-north-1.amazonaws.com/auth/signup";
    const settings = {
      method: "POST",
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    };

    const response = await fetch(url, settings);
    const data = await response.json();
    console.log("handleCreateUser; ", data);

    if (data.success) {
      setMessage("Account created");
    } else {
      setMessage("Error - Account creation failed");
    }
  };

  return (
    <div className="container">
      <h1>Sign Up</h1>
      <label>
        Username
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </label>
      <label>
        Password
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      <button onClick={handleCreateUser}>Sign Up</button>
      <p>{message}</p>
    </div>
  );
};

export default SignUp;
