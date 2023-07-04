import { useState } from "react";
import "./Github.css";

function Github() {
  const [selectUser, setSelectUser] = useState(null);
  const users = ["Dimich", "Artem"];
  const newUsers = users.map(function (item) {
    return (
      <li
        className={selectUser === item ? "check" : ""}
        onClick={() => {
          setSelectUser(item);
          document.title = item;
        }}
      >
        {item}
      </li>
    );
  });

  return (
    <div className="container">
      <div>
        <div>
          <input type="text" placeholder="search" /> <button>Find</button>
        </div>
        <ul>{newUsers}</ul>
      </div>
      <div>
        <h2>Username</h2>
        <div>Details</div>
      </div>
    </div>
  );
}

export default Github;
