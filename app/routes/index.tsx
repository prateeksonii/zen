import * as React from "react";
import { Link } from "@remix-run/react";
import Nav from "../components/public/Nav.tsx";

export default function IndexPage() {
  return (
    <>
      <Nav />
      <main className="mx-auto container h-[calc(100vh-4rem)] flex flex-col gap-2 justify-center">
        <h1 className="text-6xl">Share knowledge with others.</h1>
        <h4 className="text-6xl text-emerald-400">Tailored for developers</h4>
        <div className="flex items-center gap-4">
          <Link
            to="/signup"
            className="inline-block mt-4 py-3 px-6 bg-emerald-600 w-max rounded-md font-medium text-lg"
          >
            Signup now
          </Link>
          <Link
            to="/signin"
            className="inline-block mt-4 py-3 px-6 bg-zinc-800 w-max rounded-md font-medium text-lg"
          >
            Already a member?
          </Link>
        </div>
      </main>
    </>
  );
}
