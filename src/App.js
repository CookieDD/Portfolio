import Navbar from "./Components/Navbar/Navbar";
import './App.css';
import Intro from "./Components/Intro/Intro";
import Service from "./Components/Services/Services";
import Experience from "./Components/Experience/Experience";
import Work from "./Components/Wroks/works";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import {themeContext} from "./Context";
import {useContext} from "react";
function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="App"
      style={{
        background: darkMode? 'black' :'',
        color: darkMode? "white":''
      }}
    >
      <Navbar/>
      <Intro/>
      <Service/>
      <Experience/>
      <Work/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
