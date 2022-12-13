import React, { useState } from "react";
import { Users } from "./Users";

const SearchUser = () => {
  const [query, setQuery] = useState("");
  console.log(query);
  // console.log(Users.filter(user=> user.first_name.toLowerCase().includes("fe")));

  return (
    <div className="search-container">
      <input
        style={{height: "20px", width: "400px", padding: "10px"}}
        type="text"
        placeholder="Search..."
        className="Search"
        onChange={(e) => setQuery(e.target.value)}
      />
      {Users.filter((user) => user.first_name.toLowerCase().includes(query)).map(
        (user) => (
          <li style={{listStyleType:"none", margin:"10px"}} key={user.id} className="list-item">
            {user.first_name}
          </li>
        )
      )}
    </div>
  );
};

export default SearchUser;
