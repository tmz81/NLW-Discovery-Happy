import { BrowserRouter, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Home from "./pages/Home";

export default function Rotas() {
  return (
    <BrowserRouter>
      <Route path="/" element={<Landing/>} />
      {/* <Route path="/home" element={Home} /> */}
    </BrowserRouter>
  );
}
