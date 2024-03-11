import Footer from "./Components/Footer/Footer"
import Contact from "./Components/Contact/Contact"
import Intro from "./Components/Intro/Intro";
import Navbar from "./Components/Navbar/Navbar";
import { Skills } from "./Components/Skills/Skills";
import { Works } from "./Components/Work/Works";
//import Clients from "./Components/Clients/Clients";
import Links from "./Components/Links/Links";
import Education from "./Components/Education/Education";
import Experience from "./Components/Experience/Experience";

function App() {
  return (
    <div>
      <Navbar />
      <Intro />
      <Skills />
      <Works />
      <Experience />
      <Education />
      <Contact />
      <Links />
      <Footer />
    </div>
  );
}

export default App;
