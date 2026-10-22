package com.employee.emp_backend.mapper;

import com.employee.emp_backend.dto.EmployeeDto;
import com.employee.emp_backend.entity.Employee;

public final class EmployeeMapper {

    private EmployeeMapper() {
    }

    public static EmployeeDto toDto(Employee employee) {
        return new EmployeeDto(
                employee.getId(),
                employee.getFirstName(),
                employee.getLastName(),
                employee.getEmail()
        );
    }

    public static Employee toEntity(EmployeeDto employeeDto) {
        return new Employee(
                employeeDto.getId(),
                employeeDto.getFirstName(),
                employeeDto.getLastName(),
                employeeDto.getEmail()
        );
    }
}
