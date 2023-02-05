import React from "react";
import web from "../src/images/pics3.jpg";
import { NavLink } from "react-router-dom";


const Card = (props) => {
  return (
    <React.Fragment>
              <div className="col-mb-4 col-4 mx-auto">
                <div className="card">
                  <img src={props.imgsrc} class="card-img-top" alt={props.imgsrc} />
                  <div className="card-body">
                    <h5 className="card-title font-weight-bold">{props.title}</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <NavLink to="" class="btn btn-primary">
                      Go somewhere
                    </NavLink>
                  </div>
                </div>
              </div>
    </React.Fragment>
  );
};
export default Card;
