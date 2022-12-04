import React from "react";
import Link from "next/link";
import BookForm from "../../form/book/bookForm";
function Intro() {
  return (
    <>
      <section className="mt-7 py-0">
        <div
          className="bg-holder w-50 bg-right d-none d-lg-block"
          style={{
            backgroundImage: `url("assets/img/gallery/flatbed-tow-truck.jpg")`,
          }}
        ></div>

        <div className="container">
          <div className="row">
            <div className="col-lg-6 py-5 py-xl-5 py-xxl-7">
              <h1 className="display-2 text-1000 fw-normal">
                Get connected to
              </h1>
              <h1 className="display-4 text-primary  fw-bold">
                the best towing services
              </h1>
              <BookForm />
            </div>
          </div>
        </div>
      </section>

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

      <section className="py-0" id="flights">
        <div className="container-fluid">
          <div className="row h-100">
            <div className="col-lg-7 mx-auto  text-center mb-6">
              <h5 className="fw-bold fs-3 fs-lg-5 lh-sm mb-3">
                Towing Parks close to you at the Best Costs
              </h5>
            </div>
          </div>
          <div className="row g-0 flex-center">
            <div className="col-12 col-sm-4 col-md-3 col-lg-4 col-xl-2">
              <div
                className="d-flex flex-column justify-content-center px-3"
                style={{
                  backgroundColor: `#240D8C`,
                  minHeight: `230px`,
                }}
              >
                <h5 className="text-light">Mile 2</h5>
                <h6 className="text-light fw-normal fs-0">Contact</h6>
                <i className="fas fa-arrow-right text-light mt-4"></i>
                <a className="stretched-link" href="#!"></a>
              </div>
            </div>
            <div className="col-12 col-sm-4 col-md-3 col-lg-4 col-xl-2">
              <div
                className="d-flex flex-column justify-content-center px-3"
                style={{
                  backgroundColor: `#3011BB`,
                  minHeight: `230px`,
                }}
              >
                <h5 className="text-light">Oyingbo</h5>
                <h6 className="text-light fw-normal fs-0">Contact</h6>
                <i className="fas fa-arrow-right text-light mt-4"></i>
                <a className="stretched-link" href="#!"></a>
              </div>
            </div>
            <div className="col-12 col-sm-4 col-md-3 col-lg-4 col-xl-2">
              <div
                className="d-flex flex-column justify-content-center px-3"
                style={{
                  backgroundColor: `#4914DC`,
                  minHeight: `230px`,
                }}
              >
                <h5 className="text-light">Third Mainland Bridge</h5>
                <h6 className="text-light fw-normal fs-0">Contact</h6>
                <i className="fas fa-arrow-right text-light mt-4"></i>
                <a className="stretched-link" href="#!"></a>
              </div>
            </div>
            <div className="col-12 col-sm-4 col-md-3 col-lg-4 col-xl-2">
              <div
                className="d-flex flex-column justify-content-center px-3"
                style={{
                  backgroundColor: `#6213D2`,
                  minHeight: `230px`,
                }}
              >
                <h5 className="text-light">Victoria Island Toll Plaza</h5>
                <h6 className="text-light fw-normal fs-0">Contact</h6>
                <i className="fas fa-arrow-right text-light mt-4"></i>
                <a className="stretched-link" href="#!"></a>
              </div>
            </div>
            <div className="col-12 col-sm-4 col-md-3 col-lg-4 col-xl-2">
              <div
                className="d-flex flex-column justify-content-center px-3"
                style={{
                  backgroundColor: `#4611BC`,
                  minHeight: `230px`,
                }}
              >
                <h5 className="text-light">Egbeda</h5>
                <h6 className="text-light fw-normal fs-0">Contact</h6>
                <i className="fas fa-arrow-right text-light mt-4"></i>
                <a className="stretched-link" href="#!"></a>
              </div>
            </div>
            <div className="col-12 col-sm-4 col-md-3 col-lg-4 col-xl-2">
              <div
                className="d-flex flex-column justify-content-center px-3"
                style={{
                  backgroundColor: `#7013CE`,
                  minHeight: `230px`,
                }}
              >
                <h5 className="text-light">Ajao Estate</h5>
                <h6 className="text-light fw-normal fs-0">Contact</h6>
                <i className="fas fa-arrow-right text-light mt-4"></i>
                <a className="stretched-link" href="#!"></a>
              </div>
            </div>
            <div className="col-12 col-sm-4 col-md-3 col-lg-4 col-xl-2">
              <div
                className="d-flex flex-column justify-content-center px-3"
                style={{
                  backgroundColor: `#4611BC`,
                  minHeight: `230px`,
                }}
              >
                <h5 className="text-light">Jibowu Ikorodu</h5>
                <h6 className="text-light fw-normal fs-0">Contact</h6>
                <i className="fas fa-arrow-right text-light mt-4"></i>
                <a className="stretched-link" href="#!"></a>
              </div>
            </div>
            <div className="col-12 col-sm-4 col-md-3 col-lg-4 col-xl-2">
              <div
                className="d-flex flex-column justify-content-center px-3"
                style={{
                  backgroundColor: `#6213D2`,
                  minHeight: `230px`,
                }}
              >
                <h5 className="text-light">Akure,Ondo State</h5>
                <h6 className="text-light fw-normal fs-0">Contact</h6>
                <i className="fas fa-arrow-right text-light mt-4"></i>
                <a className="stretched-link" href="#!"></a>
              </div>
            </div>
            <div className="col-12 col-sm-4 col-md-3 col-lg-4 col-xl-2">
              <div
                className="d-flex flex-column justify-content-center px-3"
                style={{
                  backgroundColor: `#240D8C`,
                  minHeight: `230px`,
                }}
              >
                <h5 className="text-light">PH, Rivers State</h5>
                <h6 className="text-light fw-normal fs-0">Contact</h6>
                <i className="fas fa-arrow-right text-light mt-4"></i>
                <a className="stretched-link" href="#!"></a>
              </div>
            </div>
            <div className="col-12 col-sm-4 col-md-3 col-lg-4 col-xl-2">
              <div
                className="d-flex flex-column justify-content-center px-3"
                style={{
                  backgroundColor: `#4914DC`,
                  minHeight: `230px`,
                }}
              >
                <h5 className="text-light">Kano, Kano State</h5>
                <h6 className="text-light fw-normal fs-0">Contact</h6>
                <i className="fas fa-arrow-right text-light mt-4"></i>
                <a className="stretched-link" href="#!"></a>
              </div>
            </div>
            <div className="col-12 col-sm-4 col-md-3 col-lg-4 col-xl-2">
              <div
                className="d-flex flex-column justify-content-center px-3"
                style={{
                  backgroundColor: `#3011BB`,
                  minHeight: `230px`,
                }}
              >
                <h5 className="text-light">Lagos- Benin Expressway</h5>
                <h6 className="text-light fw-normal fs-0">Contact</h6>
                <i className="fas fa-arrow-right text-light mt-4"></i>
                <a className="stretched-link" href="#!"></a>
              </div>
            </div>
            <div className="col-12 col-sm-4 col-md-3 col-lg-4 col-xl-2">
              <div
                className="d-flex flex-column justify-content-center px-3"
                style={{
                  backgroundColor: `#4611BC`,
                  minHeight: `230px`,
                }}
              >
                <h5 className="text-light">Abuja</h5>
                <h6 className="text-light fw-normal fs-0">Contact</h6>
                <i className="fas fa-arrow-right text-light mt-4"></i>
                <a className="stretched-link" href="#!"></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section id="rooms" className="container mt-5">
        <h2 className="mb-3 ml-2 stays-heading">
          {location ? `Rooms in ${location}` : "All Rooms"}
        </h2>

        <div className="bg-holder w-50 bg-right d-none d-lg-block">
          asdasdadadasdasdadsaa
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 py-5 py-xl-5 py-xxl-7">
              <h1 className="display-3 text-1000 fw-normal">
                Let’s make a tour
              </h1>
              <h1 className="display-3 text-primary fw-bold">
                Discover the beauty
              </h1>
              <div className="pt-5">
                <nav>
                  <div
                    className="nav nav-tabs voyage-tabs"
                    id="nav-tab"
                    role="tablist"
                  >
                    <button
                      className="nav-link active"
                      id="nav-home-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-home"
                      type="button"
                      role="tab"
                      aria-controls="nav-home"
                      aria-selected="true"
                    >
                      <i className="fas fa-map-marker-alt"></i>
                    </button>
                    <button
                      className="nav-link"
                      id="nav-profile-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-profile"
                      type="button"
                      role="tab"
                      aria-controls="nav-profile"
                      aria-selected="false"
                    >
                      {" "}
                      <i className="fas fa-plane"></i>
                    </button>
                    <button
                      className="nav-link"
                      id="nav-contact-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-contact"
                      type="button"
                      role="tab"
                      aria-controls="nav-contact"
                      aria-selected="false"
                    >
                      {" "}
                      <i className="fas fa-hotel"></i>
                    </button>
                  </div>
                  <div className="tab-content" id="nav-tabContent">
                    <div
                      className="tab-pane fade show active"
                      id="nav-home"
                      role="tabpanel"
                      aria-labelledby="nav-home-tab"
                    >
                      <form className="row g-4 mt-5">
                        <div className="col-sm-6 col-md-6 col-xl-5">
                          <div className="input-group-icon">
                            <label
                              className="form-label visually-hidden"
                              for="inputAddress1"
                            >
                              Address 1
                            </label>
                            <input
                              className="form-control input-box form-voyage-control"
                              id="inputAddress1"
                              type="text"
                              placeholder="From where"
                            />
                            <span className="nav-link-icon text-800 fs--1 input-box-icon">
                              <i className="fas fa-map-marker-alt"></i>
                            </span>
                          </div>
                        </div>
                        <div className="col-sm-6 col-md-6 col-xl-5">
                          <div className="input-group-icon">
                            <label
                              className="form-label visually-hidden"
                              for="inputAddress2"
                            >
                              Address 2
                            </label>
                            <input
                              className="form-control input-box form-voyage-control"
                              id="inputAddress2"
                              type="text"
                              placeholder="To where"
                            />
                            <span className="nav-link-icon text-800 fs--1 input-box-icon">
                              <i className="fas fa-map-marker-alt"> </i>
                            </span>
                          </div>
                        </div>
                        <div className="col-sm-6 col-md-6 col-xl-5">
                          <div className="input-group-icon">
                            <input
                              className="form-control input-box form-voyage-control"
                              id="inputdateOne"
                              type="date"
                            />
                            <span className="nav-link-icon text-800 fs--1 input-box-icon">
                              <i className="fas fa-calendar"></i>
                            </span>
                          </div>
                        </div>
                        <div className="col-sm-6 col-md-6 col-xl-5">
                          <div className="input-group-icon">
                            <input
                              className="form-control input-box form-voyage-control"
                              id="inputDateTwo"
                              type="date"
                            />
                            <span className="nav-link-icon text-800 fs--1 input-box-icon">
                              <i className="fas fa-calendar"></i>
                            </span>
                          </div>
                        </div>
                        <div className="col-sm-6 col-md-6 col-xl-5">
                          <div className="input-group-icon">
                            <label
                              className="form-label visually-hidden"
                              for="inputPersonOne"
                            >
                              Person
                            </label>
                            <select
                              className="form-select form-voyage-select input-box"
                              id="inputPersonOne"
                            >
                              <option selected="selected">2 Adults</option>
                              <option>2 Adults 1 children</option>
                              <option>2 Adults 2 children</option>
                            </select>
                            <span className="nav-link-icon text-800 fs--1 input-box-icon">
                              <i className="fas fa-user"> </i>
                            </span>
                          </div>
                        </div>
                        <div className="col-12 col-xl-10 col-lg-12 d-grid mt-6">
                          <button className="btn btn-secondary" type="submit">
                            Search Packages
                          </button>
                        </div>
                      </form>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="nav-profile"
                      role="tabpanel"
                      aria-labelledby="nav-profile-tab"
                    >
                      <form className="row g-4 mt-5">
                        <div className="col-6">
                          <div className="input-group-icon">
                            <label
                              className="form-label visually-hidden"
                              for="inputAddressThree"
                            >
                              Address 1
                            </label>
                            <input
                              className="form-control input-box form-voyage-control"
                              id="inputAddressThree"
                              type="text"
                              placeholder="From where"
                            />
                            <span className="nav-link-icon text-800 fs--1 input-box-icon">
                              <i className="fas fa-map-marker-alt"></i>
                            </span>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="input-group-icon">
                            <label
                              className="form-label visually-hidden"
                              for="inputAddressFour"
                            >
                              Address 2
                            </label>
                            <input
                              className="form-control input-box form-voyage-control"
                              id="inputAddressFour"
                              type="text"
                              placeholder="To where"
                            />
                            <span className="nav-link-icon text-800 fs--1 input-box-icon">
                              <i className="fas fa-map-marker-alt"> </i>
                            </span>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="input-group-icon">
                            <input
                              className="form-control input-box form-voyage-control"
                              id="inputDateThree"
                              type="date"
                            />
                            <span className="nav-link-icon text-800 fs--1 input-box-icon">
                              <i className="fas fa-calendar"></i>
                            </span>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="input-group-icon">
                            <input
                              className="form-control input-box form-voyage-control"
                              id="inputDateFour"
                              type="date"
                            />
                            <span className="nav-link-icon text-800 fs--1 input-box-icon">
                              <i className="fas fa-calendar"></i>
                            </span>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="input-group-icon">
                            <label
                              className="form-label visually-hidden"
                              for="inputPeopleTwo"
                            >
                              People
                            </label>
                            <select
                              className="form-select form-voyage-select input-box"
                              id="inputPeopleTwo"
                            >
                              <option selected="selected">2 Adults</option>
                              <option>2 Adults 1 children</option>
                              <option>2 Adults 2 children</option>
                            </select>
                            <span className="nav-link-icon text-800 fs--1 input-box-icon">
                              <i className="fas fa-user"> </i>
                            </span>
                          </div>
                        </div>
                        <div className="col-12 d-grid mt-6">
                          <button className="btn btn-secondary" type="submit">
                            Search Packages
                          </button>
                        </div>
                      </form>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="nav-contact"
                      role="tabpanel"
                      aria-labelledby="nav-contact-tab"
                    >
                      <form className="row g-4 mt-5">
                        <div className="col-6">
                          <div className="input-group-icon">
                            <input
                              className="form-control input-box form-voyage-control"
                              id="inputDateFive"
                              type="date"
                            />
                            <span className="nav-link-icon text-800 fs--1 input-box-icon">
                              <i className="fas fa-calendar"></i>
                            </span>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="input-group-icon">
                            <input
                              className="form-control input-box form-voyage-control"
                              id="inputDateSix"
                              type="date"
                            />
                            <span className="nav-link-icon text-800 fs--1 input-box-icon">
                              <i className="fas fa-calendar"></i>
                            </span>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="input-group-icon">
                            <label
                              className="form-label visually-hidden"
                              for="inputPeopleThree"
                            >
                              Person
                            </label>
                            <select
                              className="form-select form-voyage-select input-box"
                              id="inputPeopleThree"
                            >
                              <option selected="selected">2 Adults</option>
                              <option>2 Adults 1 children</option>
                              <option>2 Adults 2 children</option>
                            </select>
                            <span className="nav-link-icon text-800 fs--1 input-box-icon">
                              <i className="fas fa-user"> </i>
                            </span>
                          </div>
                        </div>
                        <div className="col-12 d-grid mt-6">
                          <button className="btn btn-secondary" type="submit">
                            Search Packages
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
}

export default Intro;
