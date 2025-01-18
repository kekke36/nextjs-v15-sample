"use server";

import { z } from "zod";
import { prisma } from "../globals/db";
import { revalidatePath } from "next/cache";

const userSchema = z.object({
  customerId: z.string().min(3),
  amount: z.string(),
  status: z.string(),
});

export default async function Create() {
  async function createInvoice(formData: FormData) {
    const rawFormData = {
      customerId: formData.get("customerId"),
      amount: formData.get("amount"),
      status: formData.get("status"),
    };

    const { success } = userSchema.safeParse(rawFormData);

    console.log(success);

    console.log(rawFormData);

    const user = await prisma.user.create({
      data: {
        name: "Alice2",
        email: "alice2@prisma.io",
      },
    });

    // mutate data
    // revalidate cache
    revalidatePath("/");
  }

  return (
    <div className="p-2">
      <form action={createInvoice} className="flex flex-col space-y-4">
        <input type="text" name="customerId" className="border" />
        <input type="text" name="amount" className="border" />
        <input type="text" name="status" className="border" />
        <button
          type="submit"
          className="rounded bg-pink-500 w-20 text-white h-10 font-bold shadow hover:opacity-80 transition mx-auto"
        >
          CREATE
        </button>
      </form>
    </div>
  );
}
