import React from 'react'

function SectionTwo() {
  return (
    <section
    className="fw-main-row  ls section_padding_top_50 section_padding_bottom_50 columns_padding_0"
    id="about"
  >
    <div className="container">
      <div className="row">
        <div
          className="fw-column col-xs-12 col-md-6 to_animate1 text-center col-lg-7"
          data-animation="fadeInLeft"
        >
          <div className="fw-column-inner padding_30">
            <img
              className="shortcode-media-image"
              src={"assets/img/truck.png"}
              alt="assets/img/truck.png"
            />{" "}
          </div>
        </div>
        <div
          className="fw-column col-xs-12 col-md-6 to_animate1 text-left col-lg-5"
          data-animation="fadeInRight"
        >
          <div className="fw-column-inner">
            <div className="numbered-header text-left">
              <h3 className=" section_header ">
                <span className=" thin text-uppercase">
                  What <strong>WE OFFER</strong>{" "}
                </span>
              </h3>
              <p className="  paragraph">
                <span className="  text-uppercase">
                  effective flatbed transportation{" "}
                </span>
              </p>
            </div>
            <div className="fw-divider-zebra">
              <hr className="zebra_bg divider_left" />
            </div>
            <div
              className="fw-divider-space "
              style={{ paddingTop: `10px` }}
            ></div>
            <div className="text-block">
              <p>
                We provide fast, courteous and inexpensive towing services
                in New York. We are fully insured and been in business since
                1986. We are ready to respond to all your vehicle emergency
                needs 24 hours a day, seven days a week.
              </p>
            </div>
            <div className="icons-list">
              <ul className="list1 no-bullets with-border">
                <li>
                  <div className="media small-teaser shortcode-icon">
                    <div className="media-left">
                      <div className="icon-wrap">
                        <i className="fa fa-check highlight fontsize_18"></i>
                      </div>
                    </div>
                    <div className="media-body">
                      <span className="title">More than </span>
                      <span className="text">
                        <strong>30 years of experience</strong>{" "}
                      </span>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="media small-teaser shortcode-icon">
                    <div className="media-left">
                      <div className="icon-wrap">
                        <i className="fa fa-check highlight fontsize_18"></i>
                      </div>
                    </div>
                    <div className="media-body">
                      <span className="title">Short arrival time of </span>
                      <span className="text">
                        <strong>30 minutes or less</strong>{" "}
                      </span>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="media small-teaser shortcode-icon">
                    <div className="media-left">
                      <div className="icon-wrap">
                        <i className="fa fa-check highlight fontsize_18"></i>
                      </div>
                    </div>
                    <div className="media-body">
                      <span className="title">
                        Honest competitive prices -{" "}
                      </span>
                      <span className="text">
                        <strong>zero hidden fees</strong>{" "}
                      </span>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="media small-teaser shortcode-icon">
                    <div className="media-left">
                      <div className="icon-wrap">
                        <i className="fa fa-check highlight fontsize_18"></i>
                      </div>
                    </div>
                    <div className="media-body">
                      <span className="title">Friendly and </span>
                      <span className="text">
                        <strong>professional service</strong>{" "}
                      </span>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="media small-teaser shortcode-icon">
                    <div className="media-left">
                      <div className="icon-wrap">
                        <i className="fa fa-check highlight fontsize_18"></i>
                      </div>
                    </div>
                    <div className="media-body">
                      <span className="title">Available </span>
                      <span className="text">
                        <strong>24 hours</strong> a day,{" "}
                        <strong>7 days</strong> a week{" "}
                      </span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default SectionTwo