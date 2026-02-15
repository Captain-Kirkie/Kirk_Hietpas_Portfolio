import "./App.css";
import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";

const Resume = lazy(() => import("./Pages/Resume"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/resume"
        element={
          <Suspense fallback={<div className="loading-spinner">Loading resume...</div>}>
            <Resume />
          </Suspense>
        }
      />
    </Routes>
  );
}

export default App;
