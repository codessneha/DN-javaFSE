package com.cognizant.springdateformatxml;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import java.text.SimpleDateFormat;
import java.util.Date;

@SpringBootApplication
public class SpringDateFormatXmlApplication {

	private static final Logger LOGGER =
			LoggerFactory.getLogger(SpringDateFormatXmlApplication.class);

	public static void main(String[] args) {

		SpringApplication.run(SpringDateFormatXmlApplication.class, args);

		LOGGER.info("Inside main()");

		displayDate();
	}

	private static void displayDate() {

		ApplicationContext context =
				new ClassPathXmlApplicationContext("date-format.xml");

		SimpleDateFormat format =
				context.getBean("dateFormat", SimpleDateFormat.class);

		try {
			Date date = format.parse("31/12/2018");

			System.out.println("Parsed Date: " + date);

		} catch (Exception e) {
			e.printStackTrace();
		}
	}
}