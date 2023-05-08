import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../Homepage/Homepage";
import ResultPage from "../ResultPage/ResultPage";
import DetailPage from "../DetailPage/DetailPage";
import NewPostPage from "../NewPostPage/NewPostPage";

export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/DYScovery-code" element={<HomePage />} />
          <Route path="/DYScovery-code/results" element={<ResultPage />} />
          <Route path="/DYScovery-code/details" element={<DetailPage />} />
          <Route path="/DYScovery-code/postnew" element={<NewPostPage />} />
        </Routes>
      </div>
    </Router>
  );
}
