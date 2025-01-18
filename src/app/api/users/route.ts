import { prisma } from "@/app/globals/db";
import { NextRequest } from "next/server";

export async function GET() {
  const users = await prisma.user.findMany();

  return Response.json(users);
}

export async function POST(request: NextRequest) {
  const { name, email } = await request.json();

  const users = await prisma.user.create({
    data: {
      name,
      email,
    },
  });

  return Response.json(users);
}
