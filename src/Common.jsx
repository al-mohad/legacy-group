import React from "react";
import { NavLink } from "react-router-dom";

function Common({ name, imgsrc, visit, btname }) {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                    {name}
                    <strong className="brand-name"> Legacy Group </strong>
                    of companies
                  </h1>

                  <h2 className="my-3">
                    {/* We're a team of talented developers that can help your
                    business grow! */}
                    Quas maiores qui soluta quia voluptatem quod. Sed molestiae cumque ducimus nam omnis. In incidunt numquam doloribus a. Ipsa quis id commodi. Vel qui rerum. Modi facere voluptatem est et est officiis quod omnis debitis.
                  </h2>

                  <div className="mt-3">
                    <NavLink to={visit} className="btn-get-started">
                      {btname}
                    </NavLink>
                  </div>
                </div>

                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img
                    src={imgsrc}
                    className="img-fluid animated"
                    alt="HomeImg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Common;
