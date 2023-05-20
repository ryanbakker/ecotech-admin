import Layout from "@/components/Layout";
import { useSession } from "next-auth/react";
import Image from "next/image";

export default function Home() {
  const { data: session } = useSession();

  return (
    <Layout>
      <div className="text-blue-900 flex justify-between">
        <h2>
          Hello, <b>{session?.user?.name}</b>
        </h2>

        <div className="flex bg-gray-300 text-black gap-1 justify-center items-center rounded-lg overflow-hidden">
          <Image
            src={session?.user?.image}
            alt="Users Image"
            width={100}
            height={100}
            className="w-8 h-8"
          />
          <span className="px-2">{session?.user?.name}</span>
        </div>
      </div>
    </Layout>
  );
}
