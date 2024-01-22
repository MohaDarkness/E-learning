CREATE TABLE User (
                      id BIGINT AUTO_INCREMENT PRIMARY KEY,
                      username VARCHAR(255) UNIQUE NOT NULL,
                      password VARCHAR(255) NOT NULL,
                      role VARCHAR(50) NOT NULL
);

CREATE TABLE Course (
                        id BIGINT AUTO_INCREMENT PRIMARY KEY,
                        subjectId VARCHAR(255) UNIQUE NOT NULL,
                        name VARCHAR(255) NOT NULL,
                        classNo INT NOT NULL
);

CREATE TABLE User_Course (
                             user_id BIGINT NOT NULL,
                             course_id BIGINT NOT NULL,
                             PRIMARY KEY (user_id, course_id),
                             FOREIGN KEY (user_id) REFERENCES User(id),
                             FOREIGN KEY (course_id) REFERENCES Course(id)
);
