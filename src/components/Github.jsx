import { useEffect, useState } from "react";
import "./Github.css";

function Github() {
  const [selectUser, setSelectUser] = useState(null);
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    if (selectUser) {
      document.title = selectUser;
    }
  }, [selectUser]);

  useEffect(() => {
    fetch("https://api.github.com/search/users?q=it-kamasutra")
      .then((response) => response.json())
      .then((data) => {
        // Обработка полученных данных
        setUsersData(data.items);
      })
      .catch((error) => {
        // Обработка ошибок
        console.error(error);
      });
  }, []);
  const users = usersData;
  const newUsers = users.map(function (item) {
    return (
      <li
        key={usersData.id}
        className={selectUser === item ? "check" : ""}
        onClick={() => {
          setSelectUser(item.login);
          //   document.title = item;
        }}
      >
        {item.login}
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
