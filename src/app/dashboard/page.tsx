// "use client";
import React from "react";
import Navbar from "@/components/base/Navbar";
import AddPhotoPickr from "@/components/photoPickr/AddPhotoPickr";

import { authOptions, CustomSession } from "../api/auth/[...nextauth]/options";
import { fetchPhotoPickrs } from "@/fetch/photoPickrFetch";
import { getServerSession } from "next-auth";

import PhotoPickrCard from "@/components/photoPickr/PhotoPickrCard";

export default async function dashboard() {
  const session: CustomSession | null = await getServerSession(authOptions);
  const photoPickrs: Array<PhotoPickrType> | [] = await fetchPhotoPickrs(
    session?.user?.token!
  );
  return (
    <div className="container m-auto">
      <Navbar />
      <div className="text-end mt-4">
        <AddPhotoPickr user={session?.user!} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {photoPickrs.length > 0 &&
          photoPickrs.map((item, index) => (
            <PhotoPickrCard
              item={item}
              key={index}
              token={session?.user?.token!}
            />
          ))}
      </div>
    </div>
  );
}
