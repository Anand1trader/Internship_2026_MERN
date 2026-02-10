import React from 'react'

export const EmployeeList = (props) => {
  console.log("emlist", props)

  return (
    <div style={{ textAlign: "center" }}>
      <h1>EmployeeList</h1>

      <h2>{props.title}</h2>
      <h4>{props.company.name}</h4>
      <h4>{props.company.year}</h4>

      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>AGE</th>
          </tr>
        </thead>
        <tbody>
          {props.employees.map((emp) => (
            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td>{emp.name}</td>
              <td>{emp.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
