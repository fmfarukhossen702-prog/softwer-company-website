import React from 'react'
import Container from '../common/Container'
import CardHome from './CardHome';
import img1 from "../../assets/serHome.png"
import img2 from "../../assets/serHome2.png"
import img3 from "../../assets/serHome3.png"

const ServideHome = () => {
  return (
    <div className=" py-25 ">
      <Container>
        <h2 className=" text-4xl font-bold  w-140 mx-auto text-center leading-15 ">
          Our Ultimate Set of Services for Your Ideas Implementation
        </h2>

        <div className="flex justify-evenly mt-16">
          <CardHome
            image={img1}
            heading="Predictive Analytics"
            title="Forecast trends and make data-driven decisions with our advanced ML models."
          />
          <CardHome
            image={img2}
            heading="AI Consulting"
            title="Expert guidance on implementing AI solutions for your business needs."
          />
          <CardHome
            image={img3}
            heading="Data Engineering"
            title="Build robust data pipelines and infrastructure for ML operations.."
          />
        </div>
      </Container>
    </div>
  );
}

export default ServideHome
