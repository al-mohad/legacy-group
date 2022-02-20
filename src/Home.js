import React from "react";
import Common from "./Common";
import web from "../src/Pictures/logo.png";

function Home() {
  return (
    <>
      <Common
        name="Grow with"
        imgsrc={web}
        visit="/service"
        btname="Continue"
        subtitle='Established in 1999, Legacy Group of Companies started off with the school sections in the year 2000. It went into the confectionery bussiness in 2020; and other aspects were involved subsequently.'
      />
    </>
  );
}

export default Home;
