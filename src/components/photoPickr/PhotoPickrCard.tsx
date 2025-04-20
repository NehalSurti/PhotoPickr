import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { getImageUrl } from "@/lib/utils";
import Link from "next/link";
import { Button } from "../ui/button";
import PhotoPickrMenuBar from "./PhotoPickrMenuBar";

export default function PhotoPickrCard({
  item,
  token,
}: {
  item: PhotoPickrType;
  token: string;
}) {
  return (
    <Card>
      <CardHeader className="flex justify-between items-center flex-row">
        <CardTitle>{item.title}</CardTitle>
        <PhotoPickrMenuBar item={item} token={token} />
      </CardHeader>
      <CardContent className="h-[300px]">
        {item?.image && (
          <Image
            src={getImageUrl(item.image)}
            width={500}
            height={500}
            alt={item.title}
            className="rounded-md w-full h-[220px] object-contain"
          />
        )}
        <p>{item?.description}</p>
        <p>
          <strong>Expire At :-</strong>{" "}
          {new Date(item?.expire_at!).toDateString()}
        </p>
      </CardContent>
      <CardFooter className="space-x-4">
        <Link href={`/photoPickr/items/${item.id}`}>
          <Button>Items</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
