import React from 'react'
import { EmployeeList } from './EmployeeList'

export const Employees = () => {
  var title = "EMPLOYEE APP"

  var company = {
    name: "ADANI",
    year: 2026,
  }

  var employees = [
    { id: 101, name: "ajay", age: 22 },
    { id: 102, name: "vijay", age: 23 },
    { id: 103, name: "jay", age: 25 },
    { id: 104, name: "prakas", age: 27 },
  ]

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Employees</h1>
      <EmployeeList
        title = {title}
        company={company}
        employees={employees}
      />
    </div>
  )
}
