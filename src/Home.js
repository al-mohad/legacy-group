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
        btname="Get started"
      />
    </>
  );
}

export default Home;
