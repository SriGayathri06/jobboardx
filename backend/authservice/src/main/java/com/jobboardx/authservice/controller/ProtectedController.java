package com.jobboardx.authservice.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ProtectedController {

    @GetMapping("/api/protected/hello")
    public String sayHello() {
        return " You accessed a protected route!";
    }
}
