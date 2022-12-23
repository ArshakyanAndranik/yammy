import React from "react";
import { useEffect } from "react";
import About from "./components/about/About";
import Choose from "./components/Choose/Choose";
import Clients from "./components/Clients/Clients";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Menu from "./components/menu/Menu";
import "aos/dist/aos.css";
import AOS from "aos";
import ScrollToTop from "react-scroll-to-top";
import Testimonials from "./components/testimonials/Testimonials";
import Events from "./components/eventsM/Events";
import Contacts from "./components/contact/Contact";
import Chefs from "./components/Chefs/Chefs";
import BookATable from "./components/bookTable/BookATable";
import Footer from "./components/footer/Footer";
import Contact from "./components/contact/Contact";
import Index from "./components";
import { BaseModalBackground, ModalProvider } from "styled-react-modal";
import styled from "styled-components";

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
        {/* <Index/> */}
        <About />
        <Choose />
        <Clients />
        <Menu />
        <Testimonials />
        <Events />
        <Chefs />
        <BookATable />
        <Contact />
        <Footer />
        <ScrollToTop smooth className="scroll-to-top" color="white" />
      </ModalProvider>
    </>
  );
};

export default App;
