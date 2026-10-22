import { useState, useEffect } from "react";
import "./EmployeeComponent.css";
import {
  createEmployee,
  getEmployee,
  updateEmployee,
} from "../services/EmployeeService";
import { useNavigate, useParams } from "react-router-dom";

const EmployeeComponent = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  // ! 9.1
  const { id } = useParams();

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const navigator = useNavigate();

  // useEffect(() => {
  //   if (id) {
  //     getEmployee(id)
  //       .then((response) => {
  //         setFirstName(response.data.firstName);
  //         setLastName(response.data.lastName);
  //         setEmail(response.data.Email);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   }
  // }, [id]);

  useEffect(() => {
    if (id) {
      getEmployee(id)
        .then((response) => {
          console.log("Full API Response:", response);
          console.log("Employee Data:", response.data);
          console.log("Email Value:", response.data.email);

          setFirstName(response.data.firstName);
          setLastName(response.data.lastName);
          setEmail(response.data.email);
        })
        .catch((error) => {
          console.error("Error fetching employee:", error);
        });
    }
  }, [id]);

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastName = (e) => {
    setLastName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  function saveOrUpdateEmployee(e) {
    e.preventDefault();

    if (validateForm()) {
      const employee = { firstName, lastName, email };
      console.log(employee);

      if (id) {
        updateEmployee(id, employee)
          .then((response) => {
            console.log(response.data);
            navigator("/employees");
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        createEmployee(employee)
          .then((response) => {
            console.log(response.data);
            navigator("/employees");
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }
  }

  function validateForm() {
    let valid = true;

    const errorsCopy = { ...errors };
    if (firstName.trim()) {
      errorsCopy.firstName = "";
    } else {
      errorsCopy.firstName = "First Name is required";
      valid = false;
    }

    if (lastName.trim()) {
      errorsCopy.lastName = "";
    } else {
      errorsCopy.lastName = "Last Name is required";
      valid = false;
    }

    if (email.trim()) {
      errorsCopy.email = "";
    } else {
      errorsCopy.email = "Email is required ";
    }

    setErrors(errorsCopy);

    return valid;
  }

  // ! 9.2
  function pageTitle() {
    if (id) {
      return <h2 className="employee-form-title">Update Employee</h2>;
    } else {
     return <h2 className="employee-form-title">Add Employee</h2>;
    }
  }
  return (
    <div>
      <div className="employee-form-container">
        <div className="employee-form-card">
          {pageTitle()}
          <div className="form-group">
            <label htmlFor="firstName" className="form-label">
              First Name:
            </label>
            <input
              id="firstName"
              type="text"
              placeholder="Enter Employee First Name"
              name="firstName"
              value={firstName}
              className={`form-control ${errors.firstName ? "is-invalid" : ""}`}
              onChange={handleFirstName}
            />
          </div>

          <div className="form-group">
            <label htmlFor="lastName" className="form-label">
              Last Name:
            </label>
            <input
              id="lastName"
              type="text"
              placeholder="Enter Employee Last Name"
              name="lastName"
              value={lastName}
              className={`form-control ${errors.lastName ? "is-invalid" : ""}`}
              onChange={handleLastName}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <input
              id="email"
              type="text"
              placeholder="Enter Employee Email"
              name="email"
              value={email}
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
              onChange={handleEmail}
            />
          </div>

          <button
            type="submit"
            className="submit-btn"
            onClick={saveOrUpdateEmployee}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmployeeComponent;
