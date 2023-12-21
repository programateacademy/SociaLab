import React from "react";
import Navbar from "../../../components/navbar/Navbar";
import Info from "../../../components/info/Info";
import Portfolio from "../../../components/portfolio/Portfolio";
import Banner from "../../../components/banner/Banner";
import Footer from "../../../components/footer/Footer";
import Up from "../../../components/up/Up";
import  Form  from "../../../components/form/Form";

const Home = () => {
  return (
    <>
    <Navbar />
    <Banner />
    <Info />
    <Portfolio />|
    <Form />
    <Footer />
    <Up />
    </>
  )
}

export default Home;
