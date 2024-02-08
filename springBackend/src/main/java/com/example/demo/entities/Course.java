package com.example.demo.entities;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@ToString
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name="Courses")
public class Course {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(unique = true)
    private String subjectId;
    private String name;
    private int classNo;

    @ManyToMany(mappedBy = "courses")
    private List<User> users;

}
