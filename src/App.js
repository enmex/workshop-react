import './App.css';
import { useState } from "react";
import { Student } from './Student';
import { StudentList } from './StudentList';

export const App = () => {
  const [students, setStudents] = useState([
    {surname:"Крамской", course:"4 курс"},
    {surname:"Привалов", course:"4 курс"},
    {surname:"Шелгунов", course:"4 курс"},
    {surname:"Иванов", course:"1 курс"},
  ]);

  const handleStudentChange = (index, course) => {
    setStudents(students.map((student, currentIndex) => {
      if (currentIndex === index) {
        return {
          surname: student.surname,
          course: course,
        }
      }

      return student;
    }))
  }

  return (
    <>
    <Student students={students} onStudentChange={handleStudentChange}/>
    <StudentList students={students} />
    </>
  );
}
