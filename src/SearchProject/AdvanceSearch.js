import React, { useEffect, useState } from "react";
import Table from "./Table";
import { Users } from "./Users";

import axios from 'axios';

const AdvanceSearch = () => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  console.log(query);
  // console.log(Users.filter(user=> user.first_name.toLowerCase().includes("fe")));

// fetch data by api 

useEffect(()=>{
    const fetchUsers = async () =>{
        const res = await axios.get("https://localhost:5000")
        setData(res.data)
    };
    fetchUsers();  
},[])

// ----------------------


//   Another way search user best aproach

const keys = ["first_name", "last_name", "email"];


const SearchUser = (data) => {
    return Users.filter(
      (item) =>
        keys.some((key) => item[key].toLowerCase().includes(query))
    );
  };



// ----------------------------------------



//   const SearchUser = (data) => {
//     return Users.filter(
//       (item) =>
//         item.first_name.toLowerCase().includes(query) ||
//         item.last_name.toLowerCase().includes(query) ||
//         item.email.toLowerCase().includes(query)
//     );
//   };

  return (
    <div className="search-container">
      <input
        style={{ margin: "20px" }}
        type="text"
        placeholder="Search..."
        className="Search"
        onChange={(e) => setQuery(e.target.value)}
      />
      <Table data={SearchUser(Users)} />
    </div>
  );
};

export default AdvanceSearch;
