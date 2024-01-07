
# To Do Functionalities 

## Back-End
### Database:
 - [ ] [BD1 Student Database ](#bd1)
 - [ ] [BD2 Teacher Database](#bd2)
 - [ ] [BD3 Courses Database](#bd3)

### End-Points
- [ ] [BE1 `~/GetStudent?StudentID=<StdId>`](#be1)
- [ ] [BE2 `~/GetTeacher?TeacherID=<TchId>`](#be2)
- [ ] [BE3 `~/GetCourse?CourseID=<CsId>`](#be3)
- [ ] [BE4 `~/StudentsList?ViewerID=<ID>`](#b4)
- [ ] [BE5 `~/TeachersList?viwerId=<ID>`](#b5)
- [ ] [BE6 `~/SignUpStudent?<all the data but not courses>`](#b6)
- [ ] [BE7 `~/SignUpTeacher?<all the data but not courses>`](#be7)
- [ ] [BE8 `~/AddStudentToCourse?CourseId=<csId>&ClassId<id>&StudnetId=<stdId>`](#be8)
- [ ] [BE9 `~/AssignTeacherToCourse?CourseId=<csId>&ClassId<id>&TeacherId=<stdId>`](#be9)
- [ ] [BE10 `~/UploadFileToCourse?CourseId=<id>&ClassId=<id>&File=<File?!>`](#be10)

## Front-End
### Pages
- [ ] [FP1 Student SignUp from Admin](#fp1)
- [ ] [FP2 Teacher SignUp from Admin](#fp2)
- [ ] [FP3 Course Creation by Admin](#fp3)
- [ ] [FP4 Assign Teacher to Course by Admin](#fp4)
- [ ] [FP5 Assign Students to a class](#fp5)

## Functionalities Details
### BD1 
##### Students Database
Student have:
- Student Id (starts with `std`)
- UserName
- Password
- Name 
- Major
-  YearOfBirth
-  Picture
-  MobileNumber
-  PastCourses
-  NowCourses (This Semester)
### BD2 
##### Teachers Database
Teacher must have:
- Teacher Id (starts with `tch`)
- UserName
- Password
- Name
- Picture
- MobileNumber
- Courses (This semester)
### BD3 
##### Courses
A course must have:
- CourseId
- CourseName
- CourseClass
- CourseFiles
- TeacherID (To each class)
- StudentsIDs
- quizzes (To each class) ((NO ACTUAL QUIZ JUST A NUMBER))
### BE1 
##### `~/GetStudent?StudentID=<StdId>`
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;returns JSON with all the student details
### BE2 
#####`~/GetTeacher?TeacherID=<TchId>`
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;returns JSON with all the Teacher details
### BE3 
##### `~/GetCourse?CourseID=<CsId>`
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;returns JSON with all the course details
### BE4 
##### `~/StudentsList?ViewerID=<ID>`
If the ID indicates a  
**Teacher (starts with `tch`)** &rarr; The Teacher will see only his/her students this semester
**Admin (starts with `ad`)** &rarr; The Admin will see All Students
### BE5 
##### `~/TeachersList?viwerId=<ID>`
If the ID indicates a  
**Student (starts with `std`)** &rarr; The Student will see only his/her teachers this semester
**Admin (starts with `ad`)** &rarr; The Admin will see All Teachers
### BE6 
##### `~/SignUpStudent?<all the data but not courses>`
- only admin can do this
### BE7 
##### `~/SignUpTeacher?<all the data but not courses>`
- only admin can do this
### BE8 
##### `~/AddStudentToCourse?CourseId=<csId>&ClassId<id>&StudnetId=<stdId>`
- only admin can access this
### BE9 
##### `~/AssignTeacherToCourse?CourseId=<csId>&ClassId<id>&TeacherId=<stdId>`
- only Admin can do this
- Make sure there is no teacher already taking that class!

### BE10 
##### `~/UploadFileToCourse?CourseId=<id>&ClassId=<id>&File=<File?!>`
- only the teacher of this course & this class can do this


### FP1
##### Student SignUp from Admin
Students cannot SignUp by their own, the admin must register them into the school with a new UserName and default password

### FP2
##### Teacher SignUp from Admin
Teachers cannot SignUp by their own, the admin must register them into the school with a new UserName and default password

### FP3
##### Course Creation by Admin
Admin is gonna create the new courses and classes

### FP4
##### Assign Teacher to Course by Admin
Admin gonna assign a specific teacher to teach the class

### FP5
##### Assign Students to a class
Admin gonna assign students into their classes in the elearning
