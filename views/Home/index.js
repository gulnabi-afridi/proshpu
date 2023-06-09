import React from "react";
import Layout from "../../components/Layout";
import Header from "./Header";
import Vision from "./Vision";
import Invested from "./Invested";
import Equity from "./Equity";
import Video from "./Video";
import Questions from "./Questions";
import HowItWorks from "./HowItWorks";

const Index = () => {
  return (
    <div>
      <Layout>
        <Header />
        <Vision />
         <Invested />
         <Equity />
       <Video />
        <Questions/>
        <HowItWorks/>
      </Layout>
    </div>
  );
};

export default Index;
