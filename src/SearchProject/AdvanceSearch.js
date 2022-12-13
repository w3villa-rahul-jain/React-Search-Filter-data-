import React, { useState } from "react";
import Table from "./Table";
import { Users } from "./Users";

const AdvanceSearch = () => {
  const [query, setQuery] = useState("");
  console.log(query);
  // console.log(Users.filter(user=> user.first_name.toLowerCase().includes("fe")));

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
