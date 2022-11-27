import * as React from "react";
import Nav from "../components/public/Nav.tsx";

export default function SignupPage() {
  return (
    <>
      <Nav />
      <div className="mx-auto container">
        <h1 className="text-3xl font-bold">Let&apos;s get started</h1>
        <form>
          <input type="text" name="" id="" placeholder="Your Name" />
        </form>
      </div>
    </>
  );
}
