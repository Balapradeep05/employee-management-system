// import React from 'react'
import "./HeaderComponent.css"

const HeaderComponent = () => {
  return (
    <div>
      <header className="ems-header">
        <nav className="ems-navbar">
          <a className="ems-navabar-brand" href="https://www.accenture.com/en">
            Employee Management System
          </a>
        </nav>
      </header>
    </div>
  );
}

export default HeaderComponent