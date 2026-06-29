package com.cognizant.jpacomparison.service;

import com.cognizant.jpacomparison.model.Employee;

public class HibernateEmployeeService {

    public Integer addEmployee(Employee employee){

        System.out.println("Open Hibernate Session");

        System.out.println("Begin Transaction");

        System.out.println("session.save(employee)");

        System.out.println("Commit Transaction");

        System.out.println("Close Session");

        return employee.getId();
    }
}