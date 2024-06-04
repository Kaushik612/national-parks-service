import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "../pages/HomePage";
import About from "../pages/About";
import { AnimatePresence } from "framer-motion";
import Explore from "../pages/Explore";
import ParkDetailsPage from "../pages/ParkDetailsPage";
import TopRatedParks from "../pages/top-rated";

const Root = () => {
  const location = useLocation();
  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route index element={<HomePage />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/about" element={<About />} />
          <Route path="/park" element={<ParkDetailsPage />} />
          <Route path="/top-parks" element={<TopRatedParks />} />
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default Root;
