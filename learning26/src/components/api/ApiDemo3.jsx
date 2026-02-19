import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export const ApiDemo3 = () => {

  const { register, handleSubmit, reset } = useForm();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const res = await axios.get(
      "https://node5.onrender.com/user/user"
    );
    setUsers(res.data.data);
  };

  const submitHandler = async (data) => {
    try {
      await axios.post(
        "https://node5.onrender.com/user/user",
        data
      );

      alert("User Added Successfully ✅");

      reset();
      getUsers(); // refresh list
    } catch (error) {
      console.log(error);
      alert("Error ❌");
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Add User</h1>

      <form onSubmit={handleSubmit(submitHandler)}>
        <input placeholder="Name" {...register("name")} />
        <input placeholder="Email" {...register("email")} />
        <input placeholder="Age" type="number" {...register("age")} />
        <input placeholder="Password" type="password" {...register("password")} />
        <label>
          Active
          <input type="checkbox" {...register("isActive")} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>

      <h2>User List</h2>

      <table border="1" align="center" cellPadding="10">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.age}</td>
              <td>{user.isActive ? "Active" : "Inactive"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
