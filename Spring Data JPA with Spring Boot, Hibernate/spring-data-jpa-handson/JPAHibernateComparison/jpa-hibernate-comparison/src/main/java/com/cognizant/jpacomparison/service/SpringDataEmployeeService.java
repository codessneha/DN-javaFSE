package com.cognizant.jpacomparison.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cognizant.jpacomparison.model.Employee;
import com.cognizant.jpacomparison.repository.EmployeeRepository;

@Service
public class SpringDataEmployeeService {

    @Autowired
    private EmployeeRepository employeeRepository;

    @Transactional
    public void addEmployee(Employee employee){

        employeeRepository.save(employee);

        System.out.println("Employee saved using Spring Data JPA");
    }
}