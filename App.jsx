
import React, { useEffect, useState } from "react";

export default function App() {
  const [msg, setMsg] = useState("");

  useEffect(() => {
    fetch("/api/hello")
      .then(res => res.json())
      .then(data => setMsg(data.msg))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ textAlign: "center", padding: "2rem", color: "white", background: "black", minHeight: "100vh" }}>
      <h1>Time Moggle</h1>
      <p>{msg || "Loading..."}</p>
    </div>
  );
}
