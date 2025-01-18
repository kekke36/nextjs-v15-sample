import CreateUser from "./components/CreateUser";
import DeleteUser from "./components/DeleteUser";
import UserList from "./components/UserList";

export default function Page() {
  return (
    <div className="p-2">
      <div className="flex space-x-4">
        <UserList></UserList>
        <UserList></UserList>
        <UserList></UserList>
      </div>
      <CreateUser></CreateUser>
      <DeleteUser></DeleteUser>
    </div>
  );
}
