import Appointment from "./components/Appointment";
import Consultation from "./components/Consultation";
import Doctors from "./components/Doctors";
import DR from "./components/DR";
import Experts from "./components/Experts";
import FAQs from "./components/FAQs";
import Feel from "./components/Feel";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Inspiration from "./components/Inspiration";
import MaskGroup from "./components/MaskGroup";
import Moving from "./components/Moving";
import Navbar from "./components/Navbar";
import Pain from "./components/Pain";
import Services from "./components/Services";
import Trust from "./components/Trust";
import Welcome from "./components/Welcome";

export default function App() {
  return <div>
      <Navbar/>
      <Hero/>
      <div className="sm:px-10 px-2 text-center">
      <div id="who">
      <Welcome/>
      </div>
      {/* <Doctors/> */}
      <DR/>
      <div id="srvs">
      <Consultation/>
      </div>
      <Services/>
      <Trust/>
      <Feel/>
      <div id="tstimnyls">
      <Inspiration/>
      </div>
      <Moving/>
      <div id="exprt">
      <Experts/>
      </div>
      <MaskGroup/>
      <Pain/>
      <FAQs/>
      </div>
      <div id="apointmnt">
      <Appointment/>
      </div>
      <Footer/>
    </div>
}