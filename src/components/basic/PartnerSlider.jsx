import React from 'react'
import Slider from 'react-slick'

const logos = Array(8).fill("public/assets/partner.png"); // Use different paths if needed

const PartnerSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1200,
        settings: { slidesToShow: 4 }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 576,
        settings: { slidesToShow: 1 }
      }
    ]
  }

  return (
    <div className="container py-5">
      <Slider {...settings}>
        {logos.map((logo, index) => (
          <div key={index} className="d-flex justify-content-center">
            <div className="border py-3 px-5 rounded-2">
              <img src={logo} alt="partner" className="img-fluid" />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default PartnerSlider