import './App.css'
import { useEffect, useState } from "react";
import type { HealthResponse } from "@portfolio/shared";

function App() {
  const [health, setHealth] = useState<HealthResponse | null>(null);

  useEffect(() => {
    fetch("/api/v1/health")
      .then((res) => res.json() as Promise<HealthResponse>)
      .then(setHealth)
      .catch(() => setHealth(null));
  }, []);

  return (<div><header>Stephen Tredger</header>
  <p>API Status: {health ? health.status: "unreachable"}</p></div>)
}

export default App
