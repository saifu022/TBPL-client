import React from "react";
import "./HeroMain.css";
import gif1 from "./../../images/final_60928969621bc600a85e591d_368421.gif";
import banner from "./../../images/banner1.jpg";

const HeroMain = () => {
  return (
    <div className="d-flex justify-content-center">
      <div className="carousel-box">
        <div
          id="carouselExampleFade"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={gif1} className="d-block w-100" alt="Coming soon!" />
            </div>
            <div className="carousel-item">
              <img src={banner} className="d-block w-100" alt="TBPL" />
              <div className="carousel-caption d-none d-md-block">
                <button className="btn btn-lg btn-danger ">register</button>
              </div>
            </div>
            {/* <div className="carousel-item">
                            <img src={image1} className="d-block w-100" alt="..." />
                        </div> */}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroMain;
