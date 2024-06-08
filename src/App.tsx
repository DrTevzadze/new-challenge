import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Welcome from "./pages/Welcome";
import PartyA from "./pages/PartyA";
import PartyB from "./pages/PartyB";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/partya" element={<PartyA />} />
        <Route path="/partyb" element={<PartyB />} />
      </Routes>
    </Router>
  );
}

export default App;
