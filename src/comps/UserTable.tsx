import React from "react";
import "../styles/tableStyle.scss"
import userIcon from "../imgs/icons/userIcon.svg"
import { UserTableProps } from "../types/UserTable"

const UserTable: React.FC<UserTableProps> = ({ users, todos }) => {
  const getUserTaskCount = (userId: number) => {
    return todos.filter(todo => todo.userId === userId).length;
  };

  return (
    <table className="userTable">
      <thead>
        <tr className="headTr">
          <th className="numberTh">#</th>
          <th className="userTh">Username</th>
          <th className="toDoTh">to-do count</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr key={user.id}>
            <td>{index + 1}</td>
            <td className="userTd">
              <div className="userContainer">
                <img src={userIcon} className="usersIcon"/>
                <div className="userBlock">
                  <h4>{user.username}</h4> 
                  <p className="userText">{user.email}</p>
                </div>
              </div>
            </td>
            <td className="toDoTd">{getUserTaskCount(user.id)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
