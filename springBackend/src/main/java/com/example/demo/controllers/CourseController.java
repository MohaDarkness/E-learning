package com.example.demo.controllers;

import com.example.demo.services.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/courses")
public class CourseController {

    @Autowired
    private CourseService courseService;

    @GetMapping
    public ResponseEntity<?> getCourses(Authentication authentication) {
        String role = authentication.getAuthorities().toArray()[0].toString();
        return ResponseEntity.ok(courseService.getCoursesByRole(role, authentication.getName()));
    }
}
