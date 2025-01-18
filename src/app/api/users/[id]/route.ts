import { prisma } from "@/app/globals/db";
import { NextRequest } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = Number((await params).id);

  const users = await prisma.user.findUnique({
    where: {
      id,
    },
  });

  return Response.json(users);
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = Number((await params).id);
  const { name, email } = await request.json();

  const users = await prisma.user.update({
    where: {
      id,
    },
    data: {
      name,
      email,
    },
  });

  return Response.json(users);
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = Number((await params).id);

  const users = await prisma.user.delete({
    where: {
      id,
    },
  });

  return Response.json(users);
}
