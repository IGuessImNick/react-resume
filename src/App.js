import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Resume from "./components/resume/Resume";
import Wave from "./components/wave/Wave";


function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Wave />
      <About />
      <Resume />
      <Contact />
    </div>
  );
}

export default App;
