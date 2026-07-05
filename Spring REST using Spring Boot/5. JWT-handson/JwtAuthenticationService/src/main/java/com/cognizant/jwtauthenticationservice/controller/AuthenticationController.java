package com.cognizant.jwtauthenticationservice.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import java.nio.charset.StandardCharsets;
import java.util.Base64;

@RestController
public class AuthenticationController {

    private static final Logger LOGGER =
            LoggerFactory.getLogger(AuthenticationController.class);

    @GetMapping("/authenticate")
    public String authenticate(@RequestHeader("Authorization") String authorizationHeader) {

        LOGGER.info("Start");

        // Remove "Basic "
        String base64Credentials = authorizationHeader.substring(6);

        // Decode Base64
        byte[] decodedBytes = Base64.getDecoder().decode(base64Credentials);

        // Convert bytes to string
        String credentials = new String(decodedBytes, StandardCharsets.UTF_8);

        // Split username and password
        String[] values = credentials.split(":");

        String username = values[0];
        String password = values[1];

        LOGGER.info("Username: {}", username);
        LOGGER.info("Password: {}", password);

        LOGGER.info("End");

        return "Username = " + username + ", Password = " + password;
    }
}