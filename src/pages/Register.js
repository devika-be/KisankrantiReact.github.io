import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useInput } from "./UserInput";
import { toast } from "react-toastify";

function Register() {
  const {
    value: firstName,
    bind: bindFirstName,
    reset: resetFirstName,
  } = useInput("");
  const {
    value: lastName,
    bind: bindLastName,
    reset: resetLastName,
  } = useInput("");
  const {
    value: phoneNumber,
    bind: bindPhoneNumber,
    reset: resetPhoneNumber,
  } = useInput("");
  const {
    value: password,
    bind: bindPassword,
    reset: resetPassword,
  } = useInput("");

  //Toast notification when user log in successful
  const notify = () => toast.success("Welcome David !");
  const registerError = () => toast.error("Oops! Try again");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const url = "https://kisankranti.herokuapp.com/apiv1/register";
    const req = {
      firstName,
      lastName,
      phoneNumber,
      password,
    };

    axios
      .post(url, req)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
        registerError();
      });
    resetFirstName();
    resetLastName();
    resetPhoneNumber();
    resetPassword();
  };
  return (
    <div>
      <div>
        <div
          className="section section-signup page-header"
          style={{ backgroundImage: 'url("./assets/img/3-home.jpg")' }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-5 col-md-6 mx-auto">
                <div className="card card-login">
                  <form className="form" onSubmit={handleSubmit}>
                    <div className="card-header card-header-success text-center">
                      <h4 className="card-title">Register To Kisankranti</h4>
                    </div>
                    <div className="card-body">
    
                      <div>
                        <div className="col-lg-12 col-sm-6">
                          <div className="form-group has-success">
                            <label htmlFor="exampleInput" className="bmd-label-floating">First Name</label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="col-lg-12 col-sm-6">
                          <div className="form-group has-success">
                            <label htmlFor="exampleInput" className="bmd-label-floating">Last Name</label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="col-lg-12 col-sm-6">
                          <div className="form-group has-success">
                            <label htmlFor="exampleInput" className="bmd-label-floating">Mobile Number</label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="col-lg-12 col-sm-2">
                          <div className="form-group has-success">
                            <label htmlFor="exampleInput" className="bmd-label-floating">Password</label>
                            <input type="password" className="form-control" autoComplete />
                          </div>
                        </div>
                      </div>
    
    
//                       <div className="input-group">
//                         <div className="input-group-prepend">
//                           <span className="input-group-text"></span>
//                         </div>
//                         <input
//                           type="text"
//                           className="form-control"
//                           placeholder="First Name"
//                           {...bindFirstName}
//                         />
//                       </div>
//                       <div className="input-group">
//                         <div className="input-group-prepend">
//                           <span className="input-group-text"></span>
//                         </div>
//                         <input
//                           type="text"
//                           className="form-control"
//                           placeholder="Last Name"
//                           {...bindLastName}
//                         />
//                       </div>
//                       <div className="input-group">
//                         <div className="input-group-prepend">
//                           <span className="input-group-text"></span>
//                         </div>
//                         <input
//                           type="text"
//                           className="form-control"
//                           placeholder="Mobile Number"
//                           {...bindPhoneNumber}
//                         />
//                       </div>
//                       <div className="input-group">
//                         <div className="input-group-prepend">
//                           <span className="input-group-text"></span>
//                         </div>
//                         <input
//                           type="password"
//                           className="form-control"
//                           placeholder="Password"
//                           {...bindPassword}
//                         />
//                       </div>
//                     </div>
                    <div className="footer text-center">
                      <button
                        type="submit"
                        className="btn btn-success btn-raised btn-round"
                      >
                        Submit<Link to="/OTP"></Link>
                      </button>
                    </div>
                    <br />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
