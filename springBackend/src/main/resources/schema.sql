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

CREATE TABLE Students (
                          StudentId VARCHAR(20) PRIMARY KEY,
                          UserName VARCHAR(50) NOT NULL,
                          Password VARCHAR(50) NOT NULL,
                          Name VARCHAR(100) NOT NULL,
                          Major VARCHAR(100),
                          YearOfBirth INT,
                          Picture BLOB,
                          MobileNumber VARCHAR(20),
                          PastCourses TEXT,
                          NowCourses TEXT
);

CREATE TABLE Teachers (
                          TeacherId VARCHAR(20) PRIMARY KEY,
                          UserName VARCHAR(50) NOT NULL,
                          Password VARCHAR(50) NOT NULL,
                          Name VARCHAR(100) NOT NULL,
                          Picture BLOB,
                          MobileNumber VARCHAR(20),
                          Courses TEXT
);

CREATE TABLE Courses (
                         CourseId INT PRIMARY KEY AUTO_INCREMENT,
                         DepartmentId INT,
                         CourseName VARCHAR(100) NOT NULL,
                         CourseSupervisor VARCHAR(100),
                         CreditHours INT,
                         CourseClass VARCHAR(100),
                         StudentsIDs TEXT,
                         Quizzes INT
);

CREATE TABLE Classes (
                         ClassId INT PRIMARY KEY AUTO_INCREMENT,
                         CourseId INT,
                         TeacherId VARCHAR(20)
);

CREATE TABLE ClassFiles (
                            FileId INT PRIMARY KEY AUTO_INCREMENT,
                            FileType VARCHAR(20),
                            ClassId INT,
                            Data BLOB,
                            DisplayRank INT,
                            UploadBy VARCHAR(50)
);

CREATE TABLE ClassStudent (
                              ClassId INT,
                              StudentId VARCHAR(20),
                              FOREIGN KEY (ClassId) REFERENCES Classes(ClassId),
                              FOREIGN KEY (StudentId) REFERENCES Students(StudentId)
);

CREATE TABLE Departments (
                             DepartmentID INT PRIMARY KEY AUTO_INCREMENT,
                             DepartmentName VARCHAR(100) NOT NULL,
                             DepartmentSupervisor VARCHAR(100)
);

CREATE TABLE News (
                      NewsId INT PRIMARY KEY AUTO_INCREMENT,
                      Title VARCHAR(100) NOT NULL,
                      Body TEXT,
                      Date DATE
);

CREATE TABLE Holidays (
                          holidayId INT PRIMARY KEY AUTO_INCREMENT,
                          holidayName VARCHAR(100) NOT NULL,
                          holidayStartDate DATE,
                          holidayEndDate DATE
);

