import React from "react";
import Container from "../common/Container";
import CardServices from "./CardServices";
import imgAI from "../../assets/servicesAI.png";
import backChain from '../../assets/backChain.png'
import algoi from '../../assets/algori.png'
import data from '../../assets/data.png'
import analy from '../../assets/analist.png'
import mlop from '../..//assets/mlop.png'

const OurServides = () => {
  return (
    <div className=" py-30">
      <Container>
        <div className=" w-160 mx-auto mb-15 text-center! ">
          <h1 className=" text-4xl  font-semibold mb-5 ">Our Services</h1>
          <p>
            Comprehensive AI, blockchain, and analytics solutions powered by
            deep expertise in machine learning and data engineering
          </p>
        </div>
        <div className=" flex flex-wrap justify-between gap-y-10 ">
          <CardServices
            image={imgAI}
            title="Machine Learning Solutions"
            discription=" Custom ML models designed and optimized for your specific business
        challenges, leveraging cutting-edge deep learning techniques."
            firstLi="Deep learning model development"
            secentLi="Neural network architecture design"
            thirdLi="Computer vision solutions"
            fourLi="Natural language processing"
            fiveLi="Model optimization and scaling"
          />
          <CardServices
            image={backChain}
            title="Blockchain Development"
            discription="End-to-end blockchain solutions from smart contract development to decentralized application architecture."
            firstLi="Smart contract development"
            secentLi="DeFi protocol design"
            thirdLi="Blockchain integration"
            fourLi="Web3 development"
            fiveLi="Token implementation"
          />
          <CardServices
            image={algoi}
            title="Algorithmic Trading"
            discription="Advanced trading algorithms and systems leveraging ML for market analysis and automated execution."
            firstLi="Trading strategy development"
            secentLi="High-frequency trading systems"
            thirdLi="Market analysis algorithms"
            fourLi="Risk management systems"
            fiveLi="Performance optimization"
          />
          <CardServices
            image={data}
            title="Data Engineering"
            discription="Build robust data infrastructure that scales with your business needs using modern data engineering practices."
            firstLi="Data pipeline development"
            secentLi="Big data processing"
            thirdLi="Database optimization"
            fourLi="ETL workflow design"
            fiveLi="Data warehouse architecture"
          />
          <CardServices
            image={analy}
            title="Predictive Analytics"
            discription="Transform your data into actionable insights with our advanced predictive modeling and forecasting solutions."
            firstLi="Time series analysis"
            secentLi="Predictive modeling"
            thirdLi="Business intelligence"
            fourLi="Statistical analysis"
            fiveLi="Data visualization"
          />
          <CardServices
            image={mlop}
            title="MLOps & Infrastructure "
            discription="Enterprise-grade infrastructure for deploying and managing ML models in production environments."
            firstLi="CI/CD pipeline setup"
            secentLi="Model deployment automation"
            thirdLi="Performance monitoring"
            fourLi="Infrastructure scaling"
            fiveLi="DevOps integration"
          />
        </div>
      </Container>
    </div>
  );
};

export default OurServides;
