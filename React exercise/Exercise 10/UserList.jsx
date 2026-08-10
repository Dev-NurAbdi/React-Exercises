function App() {
  const UserList = [
    { name: "Nur abdi", id: 453, email: "nur@gmail.com" },
    { name: "xasan cali", id: 12, email: "xasan@gmail.com" },
    { name: "jamac xasan", id: 342, email: "jamac@gmail.com" },
    { name: "muse cali", id: 122, email: "muse@gmail.com" }
  ];
  return (
    <div>
      <h1>User List</h1>
     <ul>
         {
        UserList.map(user => (
            <li key={user.id}> {user.name}  <b>{user.email}</b> </li>
        ))
      }
     </ul>
    </div>
  );
}
export default App;