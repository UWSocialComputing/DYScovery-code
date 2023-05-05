import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../HomePage/HomePage";
import ResultPage from "../ResultPage/ResultPage";

export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/DYScovery-code" element={<HomePage />} />
          <Route path="/DYScovery-code/results" element={<ResultPage />} />
        </Routes>
      </div>
    </Router>
  );
}
