import useFetchUser from "../hooks/useFetchUser";

export default async function UserList() {
  const { users } = await useFetchUser();

  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
