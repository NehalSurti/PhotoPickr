"use client";
import React, { useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useFormState } from "react-dom";
import Link from "next/link";
import { SubmitButton } from "../common/SubmitBtn";

export default function Login() {
  const initialState = {
    message: "",
    status: 0,
    errors: {},
    data: {},
  };

  return (
    <form>
      <div className="mt-4">
        <Label htmlFor="email">Email</Label>
        <Input placeholder="Type your email" name="email" />
        <span className="text-red-400">{}</span>
      </div>
      <div className="mt-4">
        <Label htmlFor="password">Password</Label>
        <Input
          type="password"
          placeholder="Type your password"
          name="password"
        />

        <span className="text-red-400">{}</span>
      </div>
      <div className="mt-4">
        <SubmitButton />
      </div>
      <div className="text-center mt-2">
        <Link href="/forgot-password">Forgot Password?</Link>
      </div>
    </form>
  );
}
