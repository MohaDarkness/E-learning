package com.example.demo.services;


import com.example.demo.entities.User;
import com.example.demo.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;



    public void save(User user) {
        user.setPassword(user.getPassword());
        userRepository.save(user);
    }

    // Additional methods can be added here for other user-related operations
}
