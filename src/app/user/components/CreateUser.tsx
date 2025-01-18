import useMutateUser from "../hooks/useMutateUser";

const CreateUser = async () => {
  const { createUser } = useMutateUser();

  return (
    <div>
      <h2>Create User</h2>
      <form action={createUser} className="flex flex-col space-y-4">
        <input type="text" name="name" className="border" />
        <input type="text" name="email" className="border" />
        <button
          type="submit"
          className="rounded bg-pink-500 w-20 text-white h-10 font-bold shadow hover:opacity-80 transition mx-auto"
        >
          CREATE
        </button>
      </form>
    </div>
  );
};

export default CreateUser;
