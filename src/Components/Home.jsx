import React from "react";
import { useUserContext } from "./context/usercontext";

function Home() {
  const { name, setName, email, department, setDepartment, setEmail, phone, setPhone, handleFormSubmit } =
    useUserContext();
  const formId = 11;
  return (
    <div className="container bg-primary my-5">
      <div className="row align-items-center ">
        <div className="col-lg-7 text-center text-lg-start h-200 p-5">
          
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/contact-us-3483604-2912020.png"
            className="img-fluid"
            alt="Contact Us Illustration"
          />
        </div>
        <div className="col-md-10 mx-auto col-lg-5">
            <h2 className="display-4 fw-bold lh-1 text-white mb-4">
              Enter Your <span className="text-warning">Data</span>
            </h2>
          <form
            className="p-4 p-md-5 border rounded bg-light"
            onSubmit={(e) => handleFormSubmit(e, { name, email, department, phone }, formId)}
          >
            
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="nameInput"
                placeholder="Enter the Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                id="emailInput"
                placeholder="name@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="departmentInput"
                placeholder="Enter the Department"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <input
                type="number"
                className="form-control"
                id="floatingNumber"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="form-check mb-3">
              <input
                type="checkbox"
                className="form-check-input"
                id="rememberCheck"
              />
              <label className="form-check-label" htmlFor="rememberCheck">
                Remember me
              </label>
            </div>
            <button className="btn btn-primary w-100" type="submit">
              Add To List
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Home;