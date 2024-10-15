import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Company = () => {
  return (
    <div>
        <h1>Company Details</h1>
        <h3>Using Nested routing</h3>
       <ul>
        <li>
            <Link to="cmpOne">CompanyOne</Link>
        </li>
        <li>
            <Link to="cmpTwo">CompanyTwo</Link>
        </li>
        <li>
            <Link to="cmpThree">CompanyThree</Link>
        </li>
       </ul>
       <Outlet/>
    </div>
  )
}

export default Company