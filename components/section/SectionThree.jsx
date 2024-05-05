import React from 'react'
import RegisterForm from '../form/register/registerform'

function SectionThree() {
  return (
    <>
      <section
        className="fw-main-row  ds section_padding_top_130 section_padding_bottom_130 columns_padding_15 parallax section_overlay fullwidth-section background_cover"
        style={{
          backgroundImage: `url(assets/img/counters.jpg)`,
        }}
      >
        <div className="container-fluid">
          <div className="row">
            <div className="fw-column col-xs-12 col-md-3">
              <div className="fw-column-inner">
                {" "}
                <div className="teaser text-center ">
                  <div className="teaser_icon size_big highlight">
                    <i className="toyicon-star"></i>
                  </div>
                  <h3
                    className="counter"
                    data-from="0"
                    data-to="30"
                    data-speed="2200"
                  >
                    0
                  </h3>

                  <p>Years of Experience </p>
                </div>
              </div>
            </div>
            <div className="fw-column col-xs-12 col-md-3">
              <div className="fw-column-inner">
                {" "}
                <div className="teaser text-center ">
                  <div className="teaser_icon size_big highlight">
                    <i className="toyicon-buildings"></i>
                  </div>
                  <h3
                    className="counter"
                    data-from="0"
                    data-to="74"
                    data-speed="3000"
                  >
                    0
                  </h3>

                  <p>Offices Worldwide </p>
                </div>
              </div>
            </div>
            <div className="fw-column col-xs-12 col-md-3">
              <div className="fw-column-inner">
                {" "}
                <div className="teaser text-center ">
                  <div className="teaser_icon size_big highlight">
                    <i className="toyicon-truck"></i>
                  </div>
                  <h3
                    className="counter"
                    data-from="0"
                    data-to="3720"
                    data-speed="1600"
                  >
                    0
                  </h3>

                  <p>Vehicles Towed </p>
                </div>
              </div>
            </div>
            <div className="fw-column col-xs-12 col-md-3">
              <div className="fw-column-inner">
                {" "}
                <div className="teaser text-center ">
                  <div className="teaser_icon size_big highlight">
                    <i className="toyicon-group"></i>
                  </div>
                  <h3
                    className="counter"
                    data-from="0"
                    data-to="874"
                    data-speed="1200"
                  >
                    0
                  </h3>

                  <p>Workers in Team </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <RegisterForm/>
    
    
    </>
  )
}

export default SectionThree