package com.employee.emp_backend.service.impl;

import com.employee.emp_backend.dto.EmployeeDto;
import com.employee.emp_backend.entity.Employee;
import com.employee.emp_backend.execption.ResourceNotFoundExecption;
import com.employee.emp_backend.mapper.EmployeeMapper;
import com.employee.emp_backend.repository.EmployeeRepository;
import com.employee.emp_backend.service.EmployeeService;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Service
public class EmployeeServiceImpl implements EmployeeService {

    private final EmployeeRepository employeeRepository;

    public EmployeeServiceImpl(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    @Override
    public EmployeeDto createEmployee(EmployeeDto employeeDto) {
        Employee employee = new Employee(
                employeeDto.getFirstName(),
                employeeDto.getLastName(),
                employeeDto.getEmail()
        );
        return EmployeeMapper.toDto(employeeRepository.save(employee));
    }

//    @Override
//    public EmployeeDto getEmployeeById(Long id) {
//        return EmployeeMapper.toDto(findEmployeeById(id));
//    }


//    I did this one
    @Override
    public EmployeeDto getEmployeeById(Long id){
    Employee employee=employeeRepository.findById(id).orElseThrow(()-> new ResourceNotFoundExecption("Employee is not exists with given id: " + id));
        return EmployeeMapper.toDto(employee);
    }

    @Override
    public List<EmployeeDto> getAllEmployees() {
        List<Employee> employees=employeeRepository.findAll();
        return employees
                .stream()
                .map(EmployeeMapper::toDto)
                .toList();
    }

    @Override
    public EmployeeDto updateEmployee(Long id, EmployeeDto employeeDto) {

        Employee employee=employeeRepository.findById(id).orElseThrow(()-> new ResourceNotFoundExecption("Employee is not exists with given id: " + id));

        employee.setFirstName(employeeDto.getFirstName());
        employee.setLastName(employeeDto.getLastName());
        employee.setEmail(employeeDto.getEmail());

        Employee updateEmpolyee=employeeRepository.save(employee);


        return EmployeeMapper.toDto(updateEmpolyee);
    }

    @Override
    public void deleteEmployee(Long id) {
        Employee employee=employeeRepository.findById(id).orElseThrow(()-> new ResourceNotFoundExecption("Employee is not exists with given id: " + id));

        employeeRepository.deleteById(id);
    }


}



//private Employee findEmployeeById(Long id) {
//    return employeeRepository.findById(id)
//            .orElseThrow(() -> new ResponseStatusException(
//                    HttpStatus.NOT_FOUND,
//                    "Employee not found with id: " + id
//            ));
//}