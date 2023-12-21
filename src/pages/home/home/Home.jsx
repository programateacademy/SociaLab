import React from "react";
import Navbar from "../../../components/navbar/Navbar";
import Info from "../../../components/info/Info";
import Portfolio from "../../../components/portfolio/Portfolio";
import Banner from "../../../components/banner/Banner";
import Footer from "../../../components/footer/Footer";
import Up from "../../../components/up/Up";
import  Form  from "../../../components/form/Form";
import Services from "../../../components/services/Services";

const Home = () => {
  return (
    <>
    <Navbar />
    <Banner />
    <Services />
    <Info />
    <Portfolio />|
    <Form />
    <Up />
    <Footer />
    </>
  )
}

export default Home;
