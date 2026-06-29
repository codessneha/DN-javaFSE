package com.cognizant.ormlearn.model;
//this is the model class for Country entity. It maps to the country table in the database.

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "country")
public class Country {

    @Id
    @Column(name = "co_code") // Maps exactly to your SQL column
    private String code;

    @Column(name = "co_name") // Maps exactly to your SQL column
    private String name;

    // Standard Getters and Setters
    public String getCode() { return code; }
    public void setCode(String code) { this.code = code; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    @Override
    public String toString() {
        return "Country{" + "code='" + code + '\'' + ", name='" + name + '\'' + '}';
    }
}