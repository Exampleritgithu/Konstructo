import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Aboutus from "./component/Aboutus";
import Invertorbrands from "./component/Invertorbrands";
import Navbar from "./component/Navbar";
import PlatesBrands from "./component/PlatesBrands";
import Projects from "./component/Projects";
import Services from "./component/Services";
import Hero from "./component/Hero";
import Views from "./component/Views";
import Contact from "./component/Contact";
import OurTeam from "./component/OurTeam";
import Footer from "./component/Footer";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home /> // full home page
    },
    {
      path: "/About",
      element: <Aboutus />
    },
    {
      path: "/Services",
      element: <Services />
    },
    {
      path:"Contact",
      element:<Contact/>
    },
  ]);

  return <RouterProvider router={router} />;
}

const Home = () => (
  <>
    <Navbar />
    <Hero />
    <Aboutus />
    <Services />
    <PlatesBrands />
    <Projects />
    <Invertorbrands />
    <Views />
    <Contact />
    <OurTeam />
    <Footer />
  </>
);

export default App;
