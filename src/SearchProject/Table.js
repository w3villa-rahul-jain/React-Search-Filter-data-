import React from 'react'
// import { Users } from './Users'

const Table = ({data}) => {
  return (
    <table className="table">
  <thead>
    <tr>
      <th scope="col">User ID</th>
      <th scope="col"> First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Email</th>
    </tr>
  </thead>
  <tbody>
      {data.map(item=> (
          <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.first_name}</td>
          <td>{item.last_name}</td>
          <td>{item.email}</td>
        </tr>
      ))}
    

    {/* { Users.filter((user) => user.first_name.toLowerCase().includes("ab")).map(
        (user) => (
          <li style={{listStyleType:"none", margin:"10px"}} key={user.id} className="list-item">
            {user.first_name}
          </li>
        )
      )} */}
   </tbody>
</table>
  )
}

export default Table