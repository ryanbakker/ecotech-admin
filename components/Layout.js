import Nav from "@/components/Nav";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";
import Logo from "./Logo";

export default function Layout({ children }) {
  const [showNav, setShowNav] = useState(false);
  const { data: session } = useSession();

  if (!session) {
    return (
      <div className="bg-gray-200 w-screen h-screen flex items-center">
        <div className="flex flex-col items-center justify-center gap-5 text-center w-full bg-gray-100 mx-32 shadow-lg shadow-black/50 p-5 py-20 rounded-lg">
          <Image
            src="/EcoTech-Logo.svg"
            width={180}
            height={40}
            alt="EcoTech Logo"
          />
          <h2>Welcome to EcoTech Admin Login</h2>
          <button
            onClick={() => signIn("google")}
            className="bg-white text-black p-2 px-4 rounded-lg flex gap-2 shadow-md shadow-black/20"
          >
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
              width={15}
              height={15}
              alt="Google Logo"
            />
            Sign in with Google
          </button>
          <div>
            <h4 className="text-gray-400">
              GitHub Repo:{" "}
              <a
                href="https://github.com/ryanbakkerNZ/ecotech-admin"
                className="underline"
                target="_blank"
              >
                here
              </a>
            </h4>
            <h4 className="text-gray-400">
              Go to the Store:{" "}
              <a
                href="https://github.com/ryanbakkerNZ/ecotech-admin"
                className="underline"
              >
                here
              </a>
            </h4>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="md:hidden flex items-center p-4">
        <button onClick={() => setShowNav(true)}>
          {/* Hamburger Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div className="flex grow justify-center mr-6">
          <Logo />
        </div>
      </div>
      <div className="flex">
        <Nav show={showNav} />
        <div className="bg-white flex-grow mt-2 mr-2 mb-2 rounded-lg p-4 shadow-sm shadow-black/10">
          {children}
        </div>
      </div>
    </div>
  );
}
