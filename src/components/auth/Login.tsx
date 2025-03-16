"use client";
import React, { useEffect, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useFormState } from "react-dom";
import Link from "next/link";
import { SubmitButton } from "../common/SubmitBtn";
import { toast } from "sonner";
import { loginAction } from "@/actions/authActions";
import { signIn } from "next-auth/react";

export default function Login() {
  const initialState = {
    message: "",
    status: 0,
    errors: {},
    data: {},
  };

  const [state, formAction] = useFormState(loginAction, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.status === 422) {
      toast.error(state.message);
    } else if (state.status === 404) {
      toast.error(state.message);
    } else if (state.status === 500) {
      toast.error(state.message);
    } else if (state.status === 200) {
      toast.success(state.message);
      signIn("credentials", {
        email: state.data?.email,
        password: state.data?.password,
        redirect: true,
        callbackUrl: "/dashboard",
      });
      formRef.current?.reset();
    }
  }, [state]);

  return (
    <form ref={formRef} action={formAction}>
      <div className="mt-4">
        <Label htmlFor="email">Email</Label>
        <Input id="email" placeholder="Type your email" name="email" />
        <span className="text-red-400">{state.errors?.email}</span>
      </div>
      <div className="mt-4">
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          type="password"
          placeholder="Type your password"
          name="password"
        />

        <span className="text-red-400">{state.errors?.password}</span>
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
