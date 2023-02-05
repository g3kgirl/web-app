import React from "react";
import web from "../src/images/pics2.jpg";
import CommonCode from "./CommonCode";

const About = () => {
  return (
    <div>
      <CommonCode
        name="Hi there! Welcom to About page"
        imgsrc={web}
        visit="/contact"
        btname="Contact Now"
      />
    </div>
  );
};
export default About;
