"use client";
import React, { useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SubmitButton } from "../common/SubmitBtn";
import { useFormState } from "react-dom";

export default function Register() {
  
  return (
    <form>
      <div className="mt-4">
        <Label htmlFor="name">Name</Label>
        <Input id="name" placeholder="Type your name" name="name" />
        <span className="text-red-400">{}</span>
      </div>
      <div className="mt-4">
        <Label htmlFor="email">Email</Label>
        <Input id="email" placeholder="Type your email" name="email" />
        <span className="text-red-400">{}</span>
      </div>
      <div className="mt-4">
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          type="password"
          placeholder="Type your password"
          name="password"
        />
        <span className="text-red-400">{}</span>
      </div>
      <div className="mt-4">
        <Label htmlFor="cpassword">Confirm Password</Label>
        <Input
          id="cpassword"
          type="password"
          placeholder="Type your password"
          name="confirm_password"
        />
        <span className="text-red-400">{}</span>
      </div>
      <div className="mt-4">
        <SubmitButton />
      </div>
    </form>
  );
}
