import React, { useEffect, useState } from 'react';
import { studentsGetStudentsAPI } from '../api/students';
import StudentItem from './StudentItem';
// import StudentsTable from './StudentsTable';

const STUDENT_IDS = [
  'AKrlZQQJFjMT2qQaNlR182d2JMp2', // Rosa
  'AS8kEIgZ74WDv7f7SEaPkxhwQe53',
  'Dom7EC2DBzb5n1yaCpMHpF4OzKi2',
  'jWGLceeByURXvUF384uhj8TPjmU2',
];

export default function MainApp() {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    async function fetch() {
      const tmpStudents = await studentsGetStudentsAPI(STUDENT_IDS);
      setStudents(tmpStudents);
    }
    fetch();
  }, []);
  return (
    <div style={{ maxWidth: 1000, margin: 'auto', paddingTop: 40 }}>
      {students.map((student) => <StudentItem key={student.id} student={student} />)}
      {/* <StudentsTable students={students.filter((student) => student.id !== 'AKrlZQQJFjMT2qQaNlR182d2JMp2')} /> */}
    </div>
  );
}
