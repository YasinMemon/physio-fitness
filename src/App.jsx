import Consultation from "./components/Consultation";
import Doctors from "./components/Doctors";
import Feel from "./components/Feel";
import Hero from "./components/Hero";
import Inspiration from "./components/Inspiration";
import Moving from "./components/Moving";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Trust from "./components/Trust";
import Welcome from "./components/Welcome";

export default function App() {
  return <div>
      <Navbar/>
      <Hero/>
      <div className="sm:px-10 px-2 text-center">
      <Welcome/>
      <Doctors/>
      <Consultation/>
      <Services/>
      <Trust/>
      <Feel/>
      <Inspiration/>
      <Moving/>
      </div>
    </div>
}