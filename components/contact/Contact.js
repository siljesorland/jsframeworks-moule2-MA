import React from "react";
import Heading from "../../components/Heading";
import App from "../../components/ContactForm";

import { Container } from "react-bootstrap";



function Home() {

  return ( 
  <Container><div>
    <Heading title="Contact Form" />
    <App />
  </div>
  </Container>
  );
}

export default Home;