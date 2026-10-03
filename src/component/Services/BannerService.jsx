import React from 'react'
import Container from '../common/Container'
import bg from '../../assets/bannerServiceBG.png'
import image from '../../assets/bannerServices.png'


const BannerService = () => {
  return (
    <div className=" pt-40 ">
      <Container>
        <div
          className="bg-cover bg-center bg-no-repeat flex items-center justify-evenly py-5 rounded-3xl "
          style={{ backgroundImage: `url(${bg})` }}
        >
          <div className="w-161.25 ">
            <h1 className=" text-4xl font-medium pb-8 ">
              Our Comprehensive{" "}
              <span className=" font-bold text-primary ">Digital Solutions</span>
            </h1>
            <p>
              At Catalyst Analytics, we offer a comprehensive suite of digital
              solutions designed to propel your business to new heights in the
              digital realm. With a team of skilled professionals, cutting-edge
              technologies, and a passion for innovation, we are committed to
              delivering exceptional results for every project we undertake.
              From captivating web design that leaves a lasting impression to
              seamless web development that ensures optimal functionality, we
              cover every aspect of your online presence.
            </p>
          </div>
          <div>
            <img src={image} alt="" />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default BannerService
