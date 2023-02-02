import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Add = ({ setToggleAdd, setEmployees }) => {
  // Maintaining state whenever the user change input it will change
  const employees = JSON.parse(localStorage.getItem("employeesData"));
  const [id, setEmployeeID] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [department, setDepartment] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");

  useEffect(() => {
    localStorage.setItem("employeesData", JSON.stringify(employees));
  }, [employees]);

  // this function will trigger when the user submit the form, it will add the new employee data in the local storage
  const handleAdd = (e) => {
    e.preventDefault();

    const newEmployee = {
      id,
      name,
      age,
      department,
      address,
      contact,
    };
    console.log(employees);
    employees.push(newEmployee);
    console.log(employees);
    setEmployees(employees);

    // Alert pop up when new employee details added
    toast.success("Employee details added successfully", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    setToggleAdd(false);
  };

  return (
    <div className="addContainer">
      {/* Add Employee Heading */}
      <div className="heading">
        <h1>Add Employee</h1>
      </div>
      {/* Form for adding employee */}
      <div className="formbold-main-wrapper">
        <div className="formbold-form-wrapper">
          <form onSubmit={handleAdd}>
            {/* ID input field */}
            <div className="formbold-mb-5">
              <label for="guest" className="formbold-form-label">
                ID
              </label>
              <input
                type="number"
                name="id"
                id="id"
                placeholder="Employee ID"
                className="formbold-form-input"
                value={id}
                onChange={(e) => setEmployeeID(e.target.value)}
                required
              />
            </div>
            <div className="flex flex-wrap formbold--mx-3">
              <div className="w-full sm:w-half formbold-px-3">
                {/* Name input field */}
                <div className="formbold-mb-5">
                  <label for="fName" className="formbold-form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    name="Name"
                    id="name"
                    placeholder="Name"
                    className="formbold-form-input"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="w-full sm:w-half formbold-px-3">
                {/* Age input field */}
                <div className="formbold-mb-5">
                  <label for="lName" className="formbold-form-label">
                    Age
                  </label>
                  <input
                    type="number"
                    name="Age"
                    id="lName"
                    placeholder="Age"
                    className="formbold-form-input"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    required
                  />
                </div>
              </div>
            </div>
            {/* Department input field */}
            <div className="formbold-mb-5">
              <label for="guest" className="formbold-form-label">
                Department
              </label>
              <input
                type="text"
                name="Department"
                id="guest"
                placeholder="Department"
                className="formbold-form-input"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                required
              />
            </div>

            <div className="flex flex-wrap formbold--mx-3">
              <div className="w-full sm:w-half formbold-px-3">
                {/* Addresss input field */}
                <div className="formbold-mb-5 w-full">
                  <label for="date" className="formbold-form-label">
                    Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    id="address"
                    className="formbold-form-input"
                    placeholder="Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="w-full sm:w-half formbold-px-3">
                {/* Contact input field */}
                <div className="formbold-mb-5">
                  <label for="time" className="formbold-form-label">
                    Contact Number
                  </label>
                  <input
                    type="tel"
                    name="number"
                    id="number"
                    className="formbold-form-input"
                    placeholder="Phone"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    required
                  />
                </div>
              </div>
            </div>

            <div className="buttons">
              {/* Submit Button */}
              <button className="formbold-btn" type="submit">
                Submit
              </button>
              {/* Cancel Button */}
              <button
                className="formbold-btn-cancel"
                type="button"
                onClick={() => setToggleAdd(false)}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Add;
