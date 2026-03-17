import React, { useEffect, useState } from "react";
import axios from "axios";

export const Garages = () => {
  const [garages, setGarages] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/garage")
      .then((res) => {
        setGarages(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h2>All Garages</h2>

      {garages.map((g) => (
        <div key={g._id} style={{border:"1px solid", margin:"10px", padding:"10px"}}>
          <h3>{g.name}</h3>
          <p>{g.city}</p>
        </div>
      ))}
    </div>
  );
};