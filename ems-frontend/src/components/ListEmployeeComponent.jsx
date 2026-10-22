import React, { useEffect, useState } from "react";
import "./ListEmployeeComponent.css";
import { deleteEmployee, listEmployees } from "../services/EmployeeService";
import { useNavigate } from "react-router-dom";

const ListEmployeeComponent = () => {
  const [employees, setEmployees] = useState([]);

  const navigator = useNavigate();

  useEffect(() => {
    getAllEmployees();
  }, []);
  // const dummyData = [
  //   {
  //     id: 1,
  //     firstName: "Ramesh",
  //     lastName: "Fadatare",
  //     email: "ramesh@gmail.com",
  //   },
  //   {
  //     id: 2,
  //     firstName: "Umesh",
  //     lastName: "Fadatare",
  //     email: "umesh@gmail.com",
  //   },

  //   {
  //     id: 3,
  //     firstName: "Rajkumar",
  //     lastName: "Fadatare",
  //     email: "rajkum@gmail.com",
  //   },
  // ];

  function getAllEmployees() {
    listEmployees()
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function addNewEmployee() {
    navigator("/add-employee");
  }

  function updateEmployee(id) {
    navigator(`/edit-employee/${id}`);
  }

  function removeEmployee(id) {
    // navigator(`/delete-employee/${id}`)
    // console.log(id);

    deleteEmployee(id)
      .then((response) => {
        getAllEmployees();
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div className="employee-container">
      <h2>List of Employees</h2>

      <button className="btn" onClick={addNewEmployee}>
        Add Employee
      </button>
      <table className="employee-table">
        <thead>
          <tr>
            <th>Employee Id</th>
            <th>Employee First Name </th>
            <th>Employee Last Name</th>
            <th>Employee Email Id</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.email}</td>
              <td>
                <button
                  className="upt-btn"
                  onClick={() => updateEmployee(employee.id)}
                >
                  Update
                </button>
                <button
                  className="del-btn"
                  onClick={() => removeEmployee(employee.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
          <tr></tr>
        </tbody>
      </table>
    </div>
  );
};

export default ListEmployeeComponent;
