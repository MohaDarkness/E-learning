package com.example.demo.services;


import com.example.demo.entities.Course;
import com.example.demo.entities.User;
import com.example.demo.repositories.CourseRepository;
import com.example.demo.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CourseService {

    @Autowired
    private CourseRepository courseRepository;

    @Autowired
    private UserRepository userRepository;

    public List<Course> getCoursesByRole(String role, String username) {
        switch (role) {
            case "ROLE_STUDENT":
                return courseRepository.findByUsers_Username(username);
            case "ROLE_TEACHER":
                User teacher = userRepository.findByUsername(username).orElse(null);
                if (teacher != null) {
                    return courseRepository.findByUsers_Username(username);
                }
                break;
            case "ROLE_ADMIN":
                // Admin can fetch all courses
                return courseRepository.findAll();
            default:
                throw new IllegalStateException("Unexpected role: " + role);
        }
        return List.of();
    }

    // Additional methods can be added here for other course-related operations
}
