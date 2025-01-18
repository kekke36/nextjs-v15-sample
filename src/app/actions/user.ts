"use server";

import { prisma } from "../globals/db";

export async function getUsers() {
  const users = await prisma.user.findMany();
  return users;
}

export async function createUser() {
  const user = await prisma.user.create({
    data: {
      name: "Alice",
      email: "alice@prisma.io",
    },
  });
  return user;
}
