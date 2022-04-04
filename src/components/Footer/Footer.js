import React from "react";
import "./Footer.css";
import logo from "../../images/TBPL_Logo_Icon.svg";
import pageData from "./../../pageData/data";

const Footer = () => {
  const { footer } = pageData;

  return (
    <div className="mt-auto ">
      <footer className="text-center text-lg-start bg-light text-muted">
        <section className="d-flex justify-content-center justify-content-lg-between px-5 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span>{footer.l1Text}</span>
          </div>
          <div>
            {footer.l1Icons.map((icon) => (
              <a
                key={icon.key}
                href={icon.link}
                target="_blank"
                rel="noreferrer"
                className="me-4 text-reset fs-4"
              >
                <ion-icon name={icon.logo}></ion-icon>
              </a>
            ))}
          </div>
        </section>
        <section className="">
          <div className="container-fluid text-center text-md-start mt-2">
            <div className="row mt-2">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-2 d-none d-md-block">
                <img src={logo} alt="logo" className="footer-logo" />
                <h6 className="text-uppercase fw-bold mb-4">
                  {footer.l2c1Heading}
                </h6>
                <p>{footer.l2c1Text}</p>
              </div>
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-2 d-none d-md-block">
                <h6 className="text-uppercase fw-bold mb-4">
                  {footer.l2c2Heading}
                </h6>
                {footer.l2c2navLinks.map((navLink) => (
                  <p key={navLink.name}>
                    <a href={navLink.link} className="text-reset">
                      {navLink.name}
                    </a>
                  </p>
                ))}
              </div>
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-2 d-none d-md-block">
                <h6 className="text-uppercase fw-bold mb-4">
                  {footer.l2c3Heading}
                </h6>
                {footer.l2c3navLinks.map((navLink) => (
                  <p key={navLink.name}>
                    <a href={navLink.link} className="text-reset">
                      {navLink.name}
                    </a>
                  </p>
                ))}
              </div>
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-2 d-none d-md-block">
                <h6 className="text-uppercase fw-bold mb-3">
                  {footer.l2c4Heading}
                </h6>
                <div className="d-flex">
                  <ion-icon name="location-outline"></ion-icon>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.google.fi/maps/place/Kuusikkopuiston+kentt%C3%A4/@61.4543481,23.8315892,17z/data=!3m1!4b1!4m5!3m4!1s0x468edfa8a9d3f137:0x83233a72909fe9a7!8m2!3d61.4543456!4d23.8337779"
                    className="text-reset"
                  >
                    <p className="ms-2 mb-2">
                      Kuusikkopuiston kenttä, Ruovedenkatu 12, 33720 Tampere.
                    </p>
                  </a>
                </div>
                {footer.l2c4Contact.map((item) => (
                  <div key={item.name} className="d-flex">
                    <ion-icon name={item.logo}></ion-icon>
                    <p className="ms-2 mb-2">{item.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="text-center p-2 border-top">
          © {footer.copyrightYear} Copyright
          <a className="text-reset fw-bold ms-2" href="/">
            {footer.copyrightBy}
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
