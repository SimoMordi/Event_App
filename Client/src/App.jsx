

import './App.css'
import { useState } from 'react'
import EventForm from './components/EventForm';
import EventList from './components/EventList';
import EmployeeForm from './components/EmployeeForm';
import EmployeeList from './components/EmployeeList';


function App() {
  
  const [events, setEvents] = useState([]);
  const [employees, setEmployees] = useState([]);


  return (
    <>
    
      <h1>My Events</h1>
      <EventForm  setEvents={setEvents} />
      <EventList events={events} setEvents={setEvents} />
      <h1>Employee Management</h1>
      <EmployeeForm setEmployees={setEmployees} />
      <EmployeeList employees={employees} setEmployees={setEmployees}/>
    </>
  )
}

export default App