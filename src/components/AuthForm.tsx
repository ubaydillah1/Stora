/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";

type FormType = "sign-in" | "sign-up";

const authFormScheme = (formType: FormType) => {
  return z.object({
    email: z.string().email(),
    fullName:
      formType === "sign-up"
        ? z.string().min(2).max(50)
        : z.string().optional(),
  });
};

const AuthForm = ({ type }: { type: FormType }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>();

  const formSchema = authFormScheme(type);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <>
      <div className="lg:hidden items-center flex absolute left-1/2 top-14 -translate-1/2">
        <Image src="/assets/icons/logo.png" alt="logo" width={82} height={82} />

        <p className="text-[37px] text-brand font-semibold">Stora</p>
      </div>
      <div className="w-full max-w-[580px] mx-auto">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            <h1 className="h1 text-center text-light-100 md:text-left color-gray-900">
              {type === "sign-in" ? "Login" : "Create Account"}
            </h1>
            {type === "sign-up" && (
              <>
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <div className="p-5 flex flex-col space-y-2 bg-white rounded-xl">
                        <FormLabel>Full Name</FormLabel>

                        <FormControl>
                          <Input
                            className="outline-none border-none hover:border-none"
                            placeholder="Enter your Full Name"
                            {...field}
                          />
                        </FormControl>
                      </div>

                      <FormMessage className="ml-8 text-red-400" />
                    </FormItem>
                  )}
                />
              </>
            )}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <div className="p-5 flex flex-col space-y-2 bg-white rounded-xl">
                    <FormLabel>Email</FormLabel>

                    <FormControl>
                      <Input
                        className="border-none ring-0 focus:ring-0 focus:ring-offset-0 hover:border-none"
                        placeholder="Enter your Email"
                        {...field}
                      />
                    </FormControl>
                  </div>

                  <FormMessage className="ml-8 text-red-400" />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="w-full bg-brand hover:bg-brand-100 cursor-pointer h-[50px] lg:h-[66px] rounded-[41px] disabled:bg-brand-100"
              disabled={isLoading}
            >
              {type === "sign-in" ? "Sign In" : "Sign Up"}

              {isLoading && (
                <Image
                  src="/assets/icons/loader.svg"
                  alt="loader"
                  height={24}
                  width={24}
                  className="ml-2 animate-spin"
                />
              )}
            </Button>

            {errorMessage && (
              <p className="text-red-400 text-body-2 text-center">
                ${errorMessage}
              </p>
            )}

            <div className="text-body-2 flex justify-center">
              <p className="text-body-2">
                {type === "sign-in"
                  ? "Don't have an account?"
                  : "Already have an account?"}
              </p>
              <Link
                href={type === "sign-in" ? "sign-up" : "sign-in"}
                className="ml-1 font-medium text-brand"
              >
                {type === "sign-in" ? "Sign In" : "Sign Up"}
              </Link>
            </div>
          </form>
        </Form>
      </div>
    </>
  );
};

export default AuthForm;
