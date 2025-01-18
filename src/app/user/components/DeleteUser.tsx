import React from "react";
import useMutateUser from "../hooks/useMutateUser";

const DeleteUser = async () => {
  const { deleteUser } = await useMutateUser();

  return (
    <div>
      <h2>Delete User</h2>
      <form action={deleteUser} className="flex flex-col space-y-4">
        <input type="text" name="id" className="border" />
        <button type="submit">Delete</button>
      </form>
    </div>
  );
};

export default DeleteUser;
