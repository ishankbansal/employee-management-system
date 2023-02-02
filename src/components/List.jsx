import React from "react";

const List = ({ employees, handleEdit, handleDelete }) => {
  return (
    <div className="content">
      <div className="table-responsive custom-table-responsive">
        <table className="tableList table custom-table">
          <thead>
            <tr itemScope="row">
              <th className="col">Id</th>
              <th className="col">Name</th>
              <th className="col">Age</th>
              <th className="col">Department</th>
              <th className="col">Address</th>
              <th className="col">Contact</th>
            </tr>
          </thead>
          <tbody>
            {employees.length > 0 ? (
              employees.map((employee) => (
                <tr key={employee.id} itemScope="row">
                  <td>{employee.id}</td>
                  <td>{employee.name}</td>
                  <td>{employee.age}</td>
                  <td>{employee.department}</td>
                  <td>{employee.address}</td>
                  <td>{employee.contact}</td>
                  <td className="action-button">
                    <button
                      className="button-18"
                      onClick={() => {
                        handleEdit(employee.id);
                      }}
                    >
                      Edit
                    </button>
                    <button
                      className="button-45"
                      onClick={() => {
                        handleDelete(employee.id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={7} itemScope="row" className="no-employee">
                  No Employee
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default List;
