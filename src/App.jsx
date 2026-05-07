import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Sermons from "./pages/Sermons";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import PrayerRequest from "./pages/PrayerRequest";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/sermons" element={<Sermons />} />

        <Route path="/gallery" element={<Gallery />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/prayer-request" element={<PrayerRequest />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;