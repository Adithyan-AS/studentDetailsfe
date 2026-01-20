import { useState } from "react";
import { TextField, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { addStudentApi, studentData } from "../services/StudentApi";


function AddStudent() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ ...studentData });


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addStudentApi(formData); 
      navigate("/"); 
    } catch (error) {
      console.error("Failed to add student:", error);
    }
  };

  return (
    <div>
      <Typography variant="h5" gutterBottom>Add Student</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          name="rollNo"
          label="Roll No"
          fullWidth
          margin="dense"
          value={formData.rollNo}
          onChange={handleChange}
          required
        />
        <TextField
          name="name"
          label="Name"
          fullWidth
          margin="dense"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <TextField
          name="email"
          label="Email"
          fullWidth
          margin="dense"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <TextField
          name="age"
          label="Age"
          fullWidth
          margin="dense"
          value={formData.age}
          onChange={handleChange}
          required
        />
        <TextField
          name="department"
          label="Department"
          fullWidth
          margin="dense"
          value={formData.department}
          onChange={handleChange}
          required
        />
        <TextField
          name="course"
          label="Course"
          fullWidth
          margin="dense"
          value={formData.course}
          onChange={handleChange}
          required
        />
        <Button type="submit" variant="contained" sx={{ mt: 2 }}>
          Save
        </Button>
      </form>
    </div>
  );
}

export default AddStudent;
