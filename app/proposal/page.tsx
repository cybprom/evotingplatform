"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

export default function Proposal() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to another page immediately
    router.push("/");
  }, [router]);

  return null;
}

// import { useEffect } from "react";
// import { useRouter } from "next/navigation";

// const InaccessiblePage = () => {
//   const router = useRouter();

//   useEffect(() => {
//     // Redirect to another page immediately
//     router.push("/redirected");
//   }, [router]);

//   return null; // This page doesn't render anything
// };

// return (
//   <div className=" mt-20 text-white">
//     <button onClick={() => router.back()} className=" text-xl text-[#808080]">
//       <span className=" text-xl">←</span> Back
//     </button>
//   </div>
// );
