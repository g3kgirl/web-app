import React, { useState, useEffect } from "react";
import Validations from "./Validation";

export const Contact = (props) => {

  const formValid = formErrors => {
    let valid = true;
    Object.datas(formErrors).forEach(val => {
      console.log("check",val)
      return val.length > 0 && (valid = false);
    });
    return valid;
  };

    const [datas, setDatas] = useState({
        fullname: "",
        phone: "",
        email: "",
        comment: "",
    });

    // const [errors, setErrors] = useState({
    //   fullname: "",
    //   phone: "",
    //   email: "",
    // });

    const InputEvent = (event) => {
      const {name, value} = event.target;

      setDatas((preVal)=>{
        return{
          ...preVal,
          [name]: value,
        };
      });
    };

    const formSubmit =(e)=>{
      e.preventDefault();
      // setErrors(Validations(datas));

      const user = {
        fullname: datas.fullname,
        phone: datas.phone,
        email: datas.email,
        comment: datas.comment,
      };
      // (errors)
      if (formValid){
        props.onAddUser(user);
        console.log("value",user);
      }

      // alert(
      //   `My name is ${data.fullname}. My phone no. is ${data.phone}`
      // );
    }
    // useEffect(()=>{
    //   setErrors(Validations(datas));
    // },[datas]);


  return (
    <React.Fragment>
      <div className="my-5">
        <h1 className="text-center">Hi there! Thank you for your Review.</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  FullName
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="fullname"
                  value={datas.fullname}
                  onChange={InputEvent}
                  placeholder="Enter Your Name"
                />
                {/* {errors.fullname && <p>{errors.fullname}</p>} */}
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Phone No.
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="phone"
                  value={datas.phone}
                  onChange={InputEvent}
                  placeholder="Mobile Number"
                />
                {/* {errors.phone && <p>{errors.phone}</p>} */}
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="email"
                  value={datas.email}
                  onChange={InputEvent}
                  placeholder="name@example.com"
                />
                {/* {errors.email && <p>{errors.email}</p>} */}
              </div>
              <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">
                  Comment Box
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  name="comment"
                  value={datas.comment}
                  onChange={InputEvent}
                  rows="3"
                ></textarea>
              </div>
              <div class="col-12 mb-4 auto">
                <button class="btn btn-outline-primary" type="submit">
                  Submit form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Contact;
