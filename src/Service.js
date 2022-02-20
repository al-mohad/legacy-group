import React from "react";
import Card from "./Card";
import img1 from "../src/Pictures/img1.png";
import img2 from "../src/Pictures/img2.png";
import img3 from "../src/Pictures/img3.png";
import img4 from "../src/Pictures/img4.png";
import img5 from "../src/Pictures/img5.png";
import img6 from "../src/Pictures/img6.png";

function Service() {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Our Services</h1>
      </div>

      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              <Card
                title="Confectionaries"
                imgsrc={img1}
                info="Our confectionery services is open for different types of events eg. weddings, anniversaries, birthdays and other special occassions or festivals. Our Confectionery Products includes Donuts, parfaits, cookies, cakes & more; with rich ingerients such as almond, peanuts, berries etc."
              />
              <Card
                title="Engineering Consultancy"
                imgsrc={img2}
                info="At LCGE, we aimed at designing an organizational structure which will allow us to provide our clients with great service, by working on a variety of projects. LCEG vision is to the best provider of civil engineering, survening & construction quality management.The service includes planning & design of residential and commercial..."
              />
              <Card
                title="Legacy Schools"
                imgsrc={img3}
                info="Get ready for a world-class education at our legacy international schools in the Nigeria. At our schools, we go beyond traditional learning to deliver a high quality, transformational education to thousands of students from kindergarten through to the end of secondary school."
              />
              <Card
                title="Business Analytics"
                imgsrc={img4}
                info="We provide S.O.L.I.D. business analysis and risk management through S.W.A.T. to run your bussiness without failure."
              />
              <Card
                title="Medical Services"
                imgsrc={img5}
                info="We offer a variety of services to support your health and well-being; through disease management tools & technology."
              />
              <Card
                title="Fragnance"
                imgsrc={img6}
                info="We manufacture bath and body products such as scented candles and Niche fragnances to mention a few."
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Service;
