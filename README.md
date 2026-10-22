Employee Management System 
A full-stack Employee Management System built with React on the frontend and Java Spring Boot on the backend. The application lets users view employee records and create, update, and delete employee details.

Features
View the list of employees

Add a new employee

Update an existing employee

Delete an employee

Store employee first name, last name, and email

Validate required form fields

REST API integration between the React frontend and Spring Boot backend

Tech Stack
Frontend
React

JavaScript

React Router

Axios

Vite

CSS

Backend
Java 17

Spring Boot

Spring Web MVC

Spring Data JPA

Maven

Database
MySQL

Project Structure
Employee-Management-System/
├── ems-frontend/    # React + Vite frontend
└── emp-backend/     # Spring Boot REST API
Prerequisites
Install the following before running the project:

Node.js and npm

Java Development Kit (JDK) 17

MySQL Server

Git (optional, for cloning the repository)

Database Configuration
Start MySQL.

Create a database named ems if it does not already exist:

CREATE DATABASE ems;
Configure the database connection for the backend using environment variables. Do not commit real database passwords or other secrets to GitHub.

The backend's application.properties should use environment-variable placeholders similar to these:

spring.application.name=emp-backend
spring.datasource.url=${DB_URL:jdbc:mysql://localhost:3306/ems}
spring.datasource.username=${DB_USERNAME:root}
spring.datasource.password=${DB_PASSWORD}
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQLDialect
spring.jpa.hibernate.ddl-auto=update
Set DB_PASSWORD in your local environment before starting the backend. Adjust the username and connection URL to match your own MySQL setup.

Run the Backend
From a terminal, navigate to the backend folder:

cd emp-backend
On Windows, run the Maven wrapper:

.\mvnw.cmd spring-boot:run
The API is expected to run at:

http://localhost:8080
Make sure MySQL is running and the database configuration is correct.

Run the Frontend
Open a second terminal and navigate to the frontend folder:

cd ems-frontend
Install frontend dependencies:

npm install
Start the Vite development server:

npm run dev
Vite will print the local development URL in the terminal (commonly http://localhost:5173). Open that URL in your browser.

The frontend currently sends requests to the backend API at:

http://localhost:8080/api/employees
If you change the backend address or port, update the base URL in ems-frontend/src/services/EmployeeService.js as well.

API Endpoints
Base URL: /api/employees

Method	Endpoint	Purpose
GET	/api/employees	Retrieve all employees
GET	/api/employees/{id}	Retrieve one employee by ID
POST	/api/employees	Create an employee
PUT	/api/employees/{id}	Update an employee
DELETE	/api/employees/{id}	Delete an employee
Example employee data:

{
  "firstName": "Bala",
  "lastName": "Kumar",
  "email": "bala@example.com"
}
Use sample data only; replace it with your own test data as needed.

Notes
The frontend and backend are separate applications and should be started in separate terminals.

The backend uses MySQL; make sure the database is available before starting it.

This README describes the current development setup. Deployment instructions can be added when the application is hosted.

Author
Bala