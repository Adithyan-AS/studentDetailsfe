import { Routes, Route, Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
} from "@mui/material";
import StudentList from "./pages/StudentList";
import AddStudent from "./pages/AddStudent";
import './App.css'

function App() {
 

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Student CRUD
          </Typography>
          <Button color="inherit" component={Link} to="/">
            Students
          </Button>
          <Button color="inherit" component={Link} to="/add">
            Add Student
          </Button>
        </Toolbar>
      </AppBar>

      <Container sx={{ mt: 4 }}>
        <Routes>
          <Route path="/" element={<StudentList />} />
          <Route path="/add" element={<AddStudent />} />
        </Routes>
      </Container>
    </>
  )
}

export default App
