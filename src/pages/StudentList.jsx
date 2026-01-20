import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";
import { deleteStudentApi, getAllStudentApi } from "../services/StudentApi";

function StudentList() {
  // ✅ Initialize as empty array
  const [students, setStudents] = useState([]);

  const getStudents = async () => {
    const data = await getAllStudentApi();
    setStudents(data);
  };

  useEffect(() => {
    getStudents();
  }, []);

  const handleDelete = async (id) => {
    await deleteStudentApi(id);
    getStudents();
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Roll No</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>Department</TableCell>
            <TableCell>Course</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {students.map((eachStudent) => (
            <TableRow key={eachStudent.id}>
              <TableCell>{eachStudent.rollNo}</TableCell>
              <TableCell>{eachStudent.name}</TableCell>
              <TableCell>{eachStudent.email}</TableCell>
              <TableCell>{eachStudent.age}</TableCell>
              <TableCell>{eachStudent.department}</TableCell>
              <TableCell>{eachStudent.course}</TableCell>
              <TableCell>
                {/* ✅ Correct variable name */}
                <Button
                  variant="outlined"
                  color="error"
                  onClick={() => handleDelete(eachStudent.id)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default StudentList;
