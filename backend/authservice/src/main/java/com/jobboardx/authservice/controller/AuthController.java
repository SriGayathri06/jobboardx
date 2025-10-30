package com.jobboardx.authservice.controller;

import com.jobboardx.authservice.model.User;
import com.jobboardx.authservice.service.AuthService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "*")   // allow frontend calls
public class AuthController {

    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    // ✅ Register new user
    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody User user) {
        System.out.println("🟢 Register request reached controller: " + user.getEmail());
        try {
            String result = authService.register(user);
            return ResponseEntity.ok(result);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.badRequest().body("⚠️ Registration failed: " + e.getMessage());
        }
    }

    // ✅ Login and get JWT token
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User user) {
        System.out.println("🔥 Login request reached controller: " + user.getEmail());
        return authService.login(user.getEmail(), user.getPassword());
    }
}
