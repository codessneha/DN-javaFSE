package com.cognizant.jpacomparison;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class JpaHibernateComparisonApplication {

	public static void main(String[] args) {

		SpringApplication.run(
				JpaHibernateComparisonApplication.class,
				args);

		System.out.println("JPA vs Hibernate vs Spring Data JPA Demo");
	}

}