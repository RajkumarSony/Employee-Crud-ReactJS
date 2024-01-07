// components/EmployeeForm.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';
import Swal from 'sweetalert2';

const EmployeeForm = () => {
  const [employee, setEmployee] = useState({
    employeeId: 0,
    employeeName: '',
    department: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await EmployeeService.createEmployee(employee);
      Swal.fire('Success!', 'Employee has been added successfully.', 'success');
    } catch (error) {
      console.error('Error creating employee:', error);
      Swal.fire('Error!', 'Failed to add employee.', 'error');
    }
    navigate('/');
  };

  return (
    <center>
      <div>
        <h2>Add Employee</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <table>
              <tr>
                <th><label htmlFor="employeeName"> Employee Name </label></th>
                <td>
                  <input type="text" id="employeeName" name="employeeName" value={employee.employeeName}
                    onChange={handleChange} required/>
                </td>
              </tr>
              <tr>
                <th><label htmlFor="department"> Department </label></th>
                <td>
                  <input type="text" id="department" name="department" value={employee.department}
                    onChange={handleChange} required/>
                </td>
              </tr>
              <br/>
            </table>
            <div>
              <button type="submit"> Add Employee </button>
              <br/>
              <Link to="/"> Cancel </Link>
            </div>
          </div>
        </form>
      </div>
    </center>
  );
};

export default EmployeeForm;
