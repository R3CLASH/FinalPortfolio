import React from "react";
import Hero from "../Components/Hero";
import ServiceBoxes from "../Components/ServiceBoxes";
import Portfolio from "../Components/Portfolio";
import WhyUs from "../Components/WhyUs";
import ContactForm from "../Components/ContactComps/ContactForm";
import Testemonials from "../Components/Testemonials";
function Home() {
  return (
    <>
      <Hero />
      <WhyUs />
      {/* <ServiceBoxes /> */}
      <Portfolio />
      <Testemonials />
      <ContactForm />
    </>
  );
}

export default Home;
