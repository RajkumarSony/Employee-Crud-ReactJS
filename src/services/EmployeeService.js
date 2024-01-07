// services/EmployeeService.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080'; // Replace with your Java API base URL

const EmployeeService = {
  getAllEmployees: async () => {
    const response = await axios.get(`${API_BASE_URL}/api/employees`);
    return response.data;
  },

  getEmployeeById: async (id) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/employees/${id}`);
      return response.data;
    } catch (error) {
      return null;
    }
  },

  createEmployee: async (employee) => {
    const response = await axios.post(`${API_BASE_URL}/api/employees`, employee);
    return response.data;
  },

  updateEmployee: async (id, updatedEmployee) => {
    try {
      const response = await axios.put(`${API_BASE_URL}/api/employees/${id}`, updatedEmployee);
      return response.data;
    } catch (error) {
      return null;
    }
  },

  deleteEmployee: async (id) => {
    await axios.delete(`${API_BASE_URL}/api/employees/${id}`);
  },
};

export default EmployeeService;
