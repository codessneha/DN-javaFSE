package com.cognizant.jpacomparison.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cognizant.jpacomparison.model.Employee;

@Repository
public interface EmployeeRepository
        extends JpaRepository<Employee,Integer> {

}