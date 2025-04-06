"use client";
import React from "react";
import { useSession } from "next-auth/react";

function dashboard() {
  const { data: session } = useSession();

  console.log("Session :,", session);

  return <div>page</div>;
}

export default dashboard;
