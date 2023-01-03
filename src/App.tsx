import React from "react";
import { useEffect } from "react";
import About from "./components/about/About";
import Choose from "./components/choose/Choose";
import Clients from "./components/clients/Clients";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Menu from "./components/menu/Menu";
import "aos/dist/aos.css";
import AOS from "aos";
import ScrollToTop from "react-scroll-to-top";
import Testimonials from "./components/testimonials/Testimonials";
import Events from "./components/eventsM/Events";
import Chefs from "./components/chefs/Chefs";
import BookATable from "./components/bookTable/BookATable";
import Footer from "./components/footer/Footer";
import Contact from "./components/contact/Contact";
import { BaseModalBackground, ModalProvider } from "styled-react-modal";
import styled from "styled-components";
import Gallery from "./components/gallery/Gallery";


const SpecialModalBackground = styled(BaseModalBackground)`
  background-color: #0c0b0bc6;
  z-index: 999999999;
`;
const App = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <ModalProvider backgroundComponent={SpecialModalBackground}>
        <Header />
        <Home />
        <About />
        <Choose />
        <Clients />
        <Menu />
        <Testimonials />
        <Events />
        <Chefs />
        <BookATable />
        <Gallery/>
        <Contact />
        <Footer />
        <ScrollToTop smooth className="scroll-to-top" color="white" />
      </ModalProvider>
    </>
  );
};

export default App;
