import React from 'react';
import { Container, Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';


import amdocsLogo from '../Logos/PlacementSection/amdocs.png';
import googleLogo from '../Logos/PlacementSection/google.png';
import tcsLogo from '../Logos/PlacementSection/tcs.png';
import zensarLogo from '../Logos/PlacementSection/zensar.png';
import ibmLogo from '../Logos/PlacementSection/ibm.png';


const clients = [
  { name: 'Amdocs', logo: amdocsLogo },
  { name: 'Google', logo: googleLogo },
  { name: 'TCS', logo: tcsLogo },
  { name: 'Zensar', logo: zensarLogo },
  { name: 'IBM', logo: ibmLogo },

];

// Function to group clients into chunks of 5
const groupLogos = (logos, groupSize) => {
  const groupedLogos = [];
  for (let i = 0; i < logos.length; i += groupSize) {
    groupedLogos.push(logos.slice(i, i + groupSize));
  }
  return groupedLogos;
};

const groupedClients = groupLogos(clients, 5);

const OurClients = () => {
  return (
    <Container fluid className="our-clients-section text-center">
      <h2 className="section-title">Our Clients</h2>
      <Carousel className="clients-carousel" indicators={false} interval={3000} controls={true}>
        {groupedClients.map((group, index) => (
          <Carousel.Item key={index} className="client-slide">
            <div className="d-flex justify-content-center align-items-center">
              {group.map((client, idx) => (
                <div key={idx} className="mx-2">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="client-logo"
                  />
                </div>
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
      
    </Container>
  );
};

export default OurClients;
