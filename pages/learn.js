import React from "react";
import Layout from "../components/Layout";
import HeroSection from "../views/Learn/HeroSection";
import TheBasicsSection from "../views/Learn/TheBasicsSection";
import FreeEducationalCourse from "../views/Learn/FreeEducationalCourse";


const Learn = () => {
    return (
        <Layout>
            <HeroSection />
            <TheBasicsSection/>
            <FreeEducationalCourse/>
        </Layout>
    );
};

export default Learn;