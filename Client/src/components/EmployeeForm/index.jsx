import { useState } from 'react';
import axios from 'axios';

const EmployeeForm = ({ setEmployees }) => {
  const [employeeData, setEmployeeData] = useState({
    name: '',
    role: '',
    department: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmployeeData({ ...employeeData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/server/employees', employeeData);
      if (response.status === 200) {
        setEmployees((prevEmployees) => [...prevEmployees, response.data]);
      }
    } catch (error) {
      console.error('Error adding employee:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="role">Role:</label>
          <input type="text" name="role" onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="department">Department:</label>
          <input type="text" name="department" onChange={handleInputChange} />
        </div>
        <button type="submit">Add Employee</button>
      </form>
    </div>
  );
};

export default EmployeeForm;
