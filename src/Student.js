import { useState } from "react";

export const Student = (props) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    
    const student = props.students[currentIndex];
    
    return (
        <>
        <h1>{student.surname}</h1>
        <textarea onChange={(e) => props.onStudentChange(currentIndex, e.target.value)} placeholder={student.course}></textarea>
        <button onClick={() => setCurrentIndex((currentIndex + 1) % props.students.length)}>Next</button>
        </>
    )
}