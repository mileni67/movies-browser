import { Route, Routes, Navigate } from "react-router-dom";
import Navbar from "../widgets/Navbar/ui/Navbar";
import MoviesPage from "../pages/MoviesPages/ui/MoviesPage";
import PeoplePage from "../pages/PeoplePage/ui/PeoplePage";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/movies" replace />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/people" element={<PeoplePage />} />
      </Routes>
    </>
  );
};

export default App;
