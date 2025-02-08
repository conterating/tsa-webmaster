import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Resources from "./Resources";
import Appointments from "./Appointments";
import AboutUs from "./AboutUs";
import Footer from "./Footer";
import './App.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/resources" component={Resources} />
        <Route path="/appointments" component={Appointments} />
        <Route path="/about-us" component={AboutUs} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
