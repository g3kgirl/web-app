import React from "react";
import CardData from "./CardData";
import Card from "./Card";

const Service = () => {
  return (
    <React.Fragment>
      <div className="my-5">
        <h1 className="text-center"> Our Services </h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
                {
                    CardData.map((val, ind)=> {
                        return <Card key={ind}
                        imgsrc={val.imgsrc} title={val.title} />
                    })
                }
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Service;
