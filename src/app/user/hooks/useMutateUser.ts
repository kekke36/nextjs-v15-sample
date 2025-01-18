import { prisma } from "@/app/globals/db";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const useMutateUser = () => {
  async function createUser(formData: FormData) {
    "use server";

    const userSchema = z.object({
      name: z.string(),
      email: z.string().email(),
    });

    const rawFormData = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
    };

    const { success } = userSchema.safeParse(rawFormData);

    if (!success) return;

    console.log(rawFormData);

    await prisma.user.create({
      data: {
        name: rawFormData.name,
        email: rawFormData.email,
      },
    });

    revalidatePath("/user");
  }

  async function deleteUser(formData: FormData) {
    "use server";
    const schema = z.object({
      id: z.string(),
    });

    const rawFormData = {
      id: formData.get("id") as string,
    };

    const { success } = schema.safeParse(rawFormData);

    if (!success) return;

    await prisma.user.delete({
      where: {
        id: Number(rawFormData.id),
      },
    });

    revalidatePath("/user");
  }

  return { createUser, deleteUser };
};

export default useMutateUser;
