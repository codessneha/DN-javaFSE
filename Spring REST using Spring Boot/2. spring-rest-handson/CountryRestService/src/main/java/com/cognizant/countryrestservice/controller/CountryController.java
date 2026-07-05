package com.cognizant.countryrestservice.controller;

import com.cognizant.countryrestservice.model.Country;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CountryController {

    // Logger object
    private static final Logger LOGGER =
            LoggerFactory.getLogger(CountryController.class);

    @RequestMapping("/country")
    public Country getCountryIndia() {

        LOGGER.info("Start");

        // Load Spring XML configuration
        ApplicationContext context =
                new ClassPathXmlApplicationContext("country.xml");

        // Get the bean from Spring Container
        Country country =
                context.getBean("country", Country.class);

        LOGGER.info("End");

        return country;
    }
}