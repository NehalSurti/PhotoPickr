"use client";
import React, { Suspense, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { EllipsisVertical } from "lucide-react";
import DeletePhotoPickr from "./DeletePhotoPickr";
import dynamic from "next/dynamic";
import Env from "@/lib/env";
import { toast } from "sonner";

const EditPhotoPickr = dynamic(() => import("./EditPhotoPickr"));

export default function PhotoPickrMenuBar({
  item,
  token,
}: {
  item: PhotoPickrType;
  token: string;
}) {
  const [open, setOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);

  const handleCopy = () => {
    navigator.clipboard?.writeText(`${Env.APP_URL}/photoPickr/${item.id}`);
    toast.success("Link copied successfully!");
  };

  return (
    <>
      <DeletePhotoPickr
        open={open}
        setOpen={setOpen}
        token={token}
        id={item.id}
      />

      <Suspense fallback={<p>Loading....</p>}>
        {editOpen && (
          <EditPhotoPickr
            token={token}
            open={editOpen}
            setOpen={setEditOpen}
            item={item}
          />
        )}
      </Suspense>

      <DropdownMenu>
        <DropdownMenuTrigger>
          <EllipsisVertical />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onClick={() => setEditOpen(true)}>
            Edit
          </DropdownMenuItem>
          <DropdownMenuItem onClick={handleCopy}>Copy Link</DropdownMenuItem>
          <DropdownMenuItem onClick={() => setOpen(true)}>
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
