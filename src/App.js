// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EmployeeList from './components/EmployeeList';
import EmployeeForm from './components/EmployeeForm';
import EmployeeUpdateForm from './components/EmployeeUpdateForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EmployeeList />} />
        <Route path="/insert" element={<EmployeeForm />} />
        <Route path="/update/:employeeId" element={<EmployeeUpdateForm />} />
      </Routes>
    </Router>
  );
}

export default App;
