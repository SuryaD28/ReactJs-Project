import React from 'react'
import { useLocation, useParams } from 'react-router-dom';

const employeeDetails = {
    EmpOne: { id: 'EmpOne', name: 'Employee One', age: 25, address: 'Bangalore' },
    EmpTwo: { id: 'EmpTwo', name: 'Employee Two', age: 30, address: 'Hyderabad' }
  };

const EmployeeDetails = () => {
    const { employeeId } = useParams();
    const employee = employeeDetails[employeeId];

    const location = useLocation();
    console.log("Location in empdetails", location)
  
    return (
      <div>
        <h3> Using useLocation Hook</h3>
        <p>Current Path: {location.pathname}</p>
        <p>State: {JSON.stringify(location.state)}</p>

        <br/><br/>
        
        <h2>{employee.name}</h2>
        <p>Age: {employee.age}</p>
        <p>Address: {employee.address}</p>
      </div>
    );






//     const params = useParams();
//     const { name } = params;
//   return (
//     <div>
//         <h1>{name} Details</h1>
//     </div>
//   )
}
  
export default EmployeeDetails