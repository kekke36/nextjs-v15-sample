import { cache } from "react";
import { prisma } from "../../globals/db";

const useUser = cache(async () => {
  const users = await prisma.user.findMany();
  console.log("fetch users");

  return { users };
});

export default useUser;
