import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";

const Navbar = () => {
  const navigate = useNavigate();
  const { user } = useUser();
  const { openSignIn } = useClerk();

  return (
    <div className="fixed z-50 w-full flex justify-between items-center py-4 px-4 sm:px-20 xl:px-32">
      <img
        src={assets.logo}
        alt="logo"
        className="w-32 sm:w-40 cursor-pointer"
        onClick={() => navigate("/")}
      />

      {user ? (
        <UserButton />
      ) : (
        <div className="flex items-center gap-5">
          <button
            onClick={openSignIn}
            className="hidden sm:block text-sm text-ink/70 hover:text-ink transition cursor-pointer"
          >
            Sign in
          </button>
          <button
            onClick={openSignIn}
            className="text-sm bg-primary text-white px-6 py-2.5 rounded-lg hover:opacity-90 transition cursor-pointer"
          >
            Get started
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;