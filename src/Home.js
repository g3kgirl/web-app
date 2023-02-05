import React from "react";
import web from "../src/images/pics1.jpg";
import CommonCode from "./CommonCode";

export const Home = () => {
  return (
    <div>
      <CommonCode
        name="Grow your own businees with"
        imgsrc={web}
        visit="/service"
        btname="Get Started"
      />
    </div>
  );
};
export default Home;
