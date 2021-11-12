import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import request from "./utils/request";

function App() {
  const fetchFc = async () => {
    const res = await request("/api/platform/cert/query", {
      method: "POST",
    });
    console.log(res, 2);
  };

  useEffect(() => {
    fetchFc();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
