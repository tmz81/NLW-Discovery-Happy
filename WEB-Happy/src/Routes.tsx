import { BrowserRouter, Route, Routes } from "react-router-dom";

import Landing from "./pages/Landing";
import Home from "./pages/Home";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/app" element={Home} />
      </Routes>
    </BrowserRouter>
  );
}
