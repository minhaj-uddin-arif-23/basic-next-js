"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Button = () => {
  const router = useRouter();
  const handleNavigation = () => {
    router.push("/dashboard");
  };

  return (
    <div>
      <button
        onClick={handleNavigation}
        className="hover:text-blue-600 cursor-pointer"
      >
        Dashboard
      </button>
    </div>
  );
};

export default Button;
