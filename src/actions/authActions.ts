"use server"

import { REGISTER_URL } from "@/lib/apiEndPoints";
import axios, { AxiosError } from "axios";

export async function registerAction(prevState: any, formdata: FormData) {

    try {
        await axios.post(REGISTER_URL, {
            name: formdata.get("name") || null,
            email: formdata.get("email") || null,
            password: formdata.get("password") || null,
            confirm_password: formdata.get("confirm_password") || null,
        });
        return {
            status: 200,
            message:
                "Account created successfully! Please check your email and verify your email.",
            errors: {},
        };
    } catch (error) {
        if (error instanceof AxiosError) {
            if (error.response?.status === 422) {
                return {
                    status: 422,
                    message: error.response?.data?.message,
                    errors: error.response?.data?.errors,
                };
            }
        }
        return {
            status: 500,
            message: "Something went wrong.please try again!",
            errors: {},
        };
    }
}

export async function loginAction(prevState: any, formData: FormData) {
    try {
        await axios.post(CHECK_CREDENTIALS_URL, {
            email: formData.get("email") || null,
            password: formData.get("password") || null,
        });
        return {
            status: 200,
            message: "Credentials matched loging you shortly!",
            errors: {},
            data: {
                email: formData.get("email"),
                password: formData.get("password"),
            },
        };
    } catch (error) {
        if (error instanceof AxiosError) {
            if (error.response?.status === 422) {
                return {
                    status: 422,
                    message: error.response?.data?.message,
                    errors: error.response?.data?.errors,
                };
            }
        }
        return {
            status: 500,
            message: "Something went wrong.please try again!",
            errors: {},
            data: {},
        };
    }
}