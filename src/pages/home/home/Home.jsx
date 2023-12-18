import React from "react";
import Navbar from "../../../components/navbar/Navbar";
import Info from "../../../components/info/Info";
import Portfolio from "../../../components/portfolio/Portfolio";
import Banner from "../../../components/banner/Banner";

const Home = () => {
  return (
    <>
    <Navbar />
    <Banner />
    <Info />
    <Portfolio />|
    </>
  )
}

export default Home;