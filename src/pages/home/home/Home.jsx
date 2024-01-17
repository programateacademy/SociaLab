import React from "react";
import Info from "../../../components/info/Info";
import Portfolio from "../../../components/portfolio/Portfolio";
import Banner from "../../../components/banner/Banner";
import Up from "../../../components/up/Up";
import Form from "../../../components/form/Form";
import Services from "../../../components/services/Services";
import Layout from "../../../components/layout/Layout";

const Home = () => {
  return (
    <>
      <Layout>
        <Banner />
        <Services />
        <Info />
        <Portfolio />|
        <Form />
        <Up />
      </Layout>
    </>
  );
};

export default Home;
