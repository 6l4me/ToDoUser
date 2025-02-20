import React from "react";
import { useQuery } from "@tanstack/react-query";
import UserTable from "./comps/UserTable"
import "./styles/appStyle.scss"
import { fetchUsers, fetchTodos } from "./comps/Api";

const App: React.FC = () => {
  const {data: users = [], isLoading: usersLoading, error: usersError } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers
  })

  const {data: todos = [], isLoading: todosLoading, error: todosError} = useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodos
  })

  if (usersLoading || todosLoading) return <p>Загрузка</p>
  if (usersError || todosError) return <p className="loadError">Ошибка загрузки данных</p>

  return (
    <div className="container">
      <h1 className="containerTitle">User To-Do Table</h1>
      <p className="containerText">User task table for effective planning.</p>
      <UserTable users={users} todos={todos} />
    </div>
  );
};

export default App;
