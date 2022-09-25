import React from "react";
import Heading from "../../components/Heading";
import MemesList from "../../components/memes/Memes";
import { Container } from "react-bootstrap";



function Home() {

  return ( 
  <Container><div>
    <Heading title="Memes" />
    <MemesList />
  </div>
  </Container>
  );
}

export default Home;

