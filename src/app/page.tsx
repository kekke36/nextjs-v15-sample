import Link from "next/link";
import Create from "./components/Create";
import List from "./user/components/UserList";
import CreateUser from "./user/components/CreateUser";

export default function Home() {
  return (
    <div>
      <h1>
        Next.js v15 sample
        {process.env.NEXT_PUBLIC_APP_VERSION}
      </h1>

      <div className="flex flex-col">
        <CreateUser />
      </div>
      <div>
        <Link href={"/user"} className="text-cyan-500">
          user
        </Link>
      </div>
    </div>
  );
}
