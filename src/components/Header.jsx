import React from "react";

const Header = ({ setToggleAdd }) => {
  return (
    <header className="header">
      {/* Heading */}
      <h1 className="heading">Employee Management System</h1>
      {/* Add employee button */}
      <button className="add-employee" onClick={() => setToggleAdd(true)}>
        Add Employee
      </button>
    </header>
  );
};

export default Header;
