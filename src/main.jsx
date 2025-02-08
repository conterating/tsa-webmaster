import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "../src/pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </Router>
  </StrictMode>
);

const Home = () => {
  return (
    <section className={styles.heroSection}>
      <h1>Welcome to Green Support</h1>
      <p>Your go-to place for delicious vegan and vegetarian dishes.</p>
      <button>Explore Menu</button>
    </section>
  );
};

export default Home;
