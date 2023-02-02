import React, { useEffect, useState } from "react";
import Add from "./Add";
import Edit from "./Edit";
import Header from "./Header";
import List from "./List";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  // intialising employees array on render according to the local storage
  const loadEmployees = localStorage.getItem("employeesData")
    ? JSON.parse(localStorage.getItem("employeesData"))
    : [];
  const [employees, setEmployees] = useState(loadEmployees);
  const [toggleAdd, setToggleAdd] = useState(false);
  const [toggleEdit, setToggleEdit] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  // function to delete the employee
  const handleDelete = (id) => {
    setEmployees(employees.filter((employee) => employee.id !== id));
    // Alert will pop up when employee details deleted
    toast.info("Employee details deleted", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  // function to edit the existing employee data
  const handleEdit = (id) => {
    const [employee] = employees.filter((employee) => employee.id === id);
    setSelectedEmployee(employee);
    setToggleEdit(true);
  };

  // whenver the employees array change due to add, edit or delete this will trigger and update the local storage
  useEffect(() => {
    localStorage.setItem("employeesData", JSON.stringify(employees));
  }, [employees]);

  return (
    <div className="container">
      {/* Display the header and list of the employees */}
      {!toggleAdd && !toggleEdit && (
        <>
          <Header setToggleAdd={setToggleAdd} />
          <List
            employees={employees}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        </>
      )}

      {/* Display add page to add employee */}
      {toggleAdd && (
        <Add
          setToggleAdd={setToggleAdd}
          employees={employees}
          setEmployees={setEmployees}
        />
      )}

      {/* Display edit page to edit employee details */}
      {toggleEdit && (
        <Edit
          setToggleEdit={setToggleEdit}
          selectedEmployee={selectedEmployee}
          setEmployees={setEmployees}
        />
      )}
      <ToastContainer />
    </div>
  );
};

export default Home;
