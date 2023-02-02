import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Edit = ({ setToggleEdit, selectedEmployee, setEmployees }) => {
  const [name, setName] = useState(selectedEmployee.name);
  const [age, setAge] = useState(selectedEmployee.age);
  const [department, setDepartment] = useState(selectedEmployee.department);
  const [address, setAddress] = useState(selectedEmployee.address);
  const [contact, setContact] = useState(selectedEmployee.contact);
  const id = selectedEmployee.id;

  // this function will trigger when the user changed the existing employee data
  // and submit the form then this function will update the that data in local storage
  const handleEdit = (e) => {
    e.preventDefault();

    const employee = {
      id,
      name,
      age,
      department,
      address,
      contact,
    };

    const employees = JSON.parse(localStorage.getItem("employeesData"));

    for (let i = 0; i < employees.length; i++) {
      if (employees[i].id === id) {
        employees.splice(i, 1, employee);
        break;
      }
    }

    setEmployees(employees);
    // Alert will pop up when the employee details updates
    toast.success("Employee details updated", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    setToggleEdit(false);
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
          <form onSubmit={handleEdit}>
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
              {/* Update Button */}
              <button className="formbold-btn" type="submit">
                Update
              </button>
              {/* Cancel Button */}
              <button
                className="formbold-btn-cancel"
                type="button"
                onClick={() => setToggleEdit(false)}
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

export default Edit;
