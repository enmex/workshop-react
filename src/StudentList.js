export const StudentList = (props) => {
    return (
        <ul>
            {props.students.map((student) => (
                <li key={student.surname}>{student.surname}: {student.course}</li>
            ))}
        </ul>
    )
}