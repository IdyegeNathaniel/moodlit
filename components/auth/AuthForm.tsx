"use client";

import { ChevronRight, Eye, EyeClosed, Lock, Mail, User } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useState } from "react";
import Link from "next/link";
import { useAuthForm } from "@/hooks/formHook";
import Image from "next/image";
import banner from "@/public/images/onboarding.jpg";

const AuthForm: React.FC<{ mode: "signup" | "signin" }> = ({ mode }) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const { register, onSubmit, isRegister, errors, isSubmitting } =
    useAuthForm(mode);

  return (
    <section className="w-full min-h-screen overflow-hidden">
      <div className="min-h-screen grid md:grid-cols-2 font-syne">

          <div className="hidden md:block relative w-full h-full">
            <div className="absolute inset-0 bg-linear-to-b from-[plum] to-[plum]/70 opacity-80 z-10" />
            <Image
              src={banner}
              className="w-full object-cover"
              priority
              fill
              alt="moodlit-Onboarding"
            />
        </div>

        <div className="relative flex flex-col gap-3 justify-center items-center py-10 md:py-12 px-6 md:px-10">
          
          <div className="absolute top-6 left-6 md:top-10 md:left-10">
            <Button size="sm" variant="ghost" className="text-sm border-none" onClick={() => window.history.back()} aria-label="Go back">
              Go Back
            </Button>
          </div>
          {/* FORM */}
          <div className="w-full max-w-md bg-white p-10 rounded-xl shadow-md my-5">
            <div className="flex flex-col gap-2">
              <h2 className="text-3xl font-bold tracking-tight">
                {isRegister ? "Create Account" : "Sign In"}
              </h2>
              <p className="text-sm text-neutral-500">
                {isRegister
                  ? "Join us to get started"
                  : "Access your MoodLit account"}
              </p>
            </div>

            
            <form className="flex flex-col gap-4 mt-5" onSubmit={onSubmit}>
              {isRegister && (
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="name"
                    className="uppercase text-sm font-medium text-gray-400"
                  >
                    Full name
                  </label>
                  <div className="relative">
                    <User
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400"
                    />
                    <Input
                      type="text"
                      id="name"
                      placeholder="John Doe"
                      className={
                        (errors as any).fullName
                          ? "pl-12! border-red-400 outline-red-400"
                          : "pl-12!"
                      }
                      {...register("fullName")}
                    />
                  </div>
                  <p className="text-xs text-red-400">
                    {(errors as any).fullName?.message}
                  </p>
                </div>
              )}

              {/* EMAIL */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="uppercase text-sm font-medium text-gray-400"
                >
                  Email address
                </label>
                <div className="relative">
                  <Mail
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400"
                  />
                  <Input
                    type="email"
                    id="email"
                    placeholder="name@example.com"
                    className={
                      (errors as any).email
                        ? "pl-12! border-red-400 outline-red-400"
                        : "pl-12!"
                    }
                    {...register("email")}
                  />
                </div>
                <p className="text-xs text-red-400">
                  {(errors as any).email?.message}
                </p>
              </div>

              {/* PASSWORD */}
              <div className="flex flex-col gap-2 mb-3">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="uppercase text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>

                  <Link
                    href="/forgot-password"
                    className="text-sm text-blue-400 font-700"
                    aria-label="forgot-password"
                  >
                    Forgot?
                  </Link>
                </div>

                <div className="relative">
                  <Lock
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400"
                  />
                  <Input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    placeholder="********"
                    className={
                      (errors as any).password
                        ? "pl-12! border-red-400 outline-red-400"
                        : "pl-12!"
                    }
                    {...register("password")}
                  />
                  <button
                    type="button"
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400 cursor-pointer"
                    onClick={() => setShowPassword((prev) => !prev)}
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                    aria-pressed={showPassword}
                  >
                    {showPassword ? (
                      <EyeClosed size={18} color={"#7178e4"} />
                    ) : (
                      <Eye size={18} color={"#7178e4"} />
                    )}
                  </button>
                </div>
                <p className="text-xs text-red-400">
                  {(errors as any).password?.message}
                </p>
              </div>

              {/* SUBMIT BUTTON */}
              <Button
                type="submit"
                variant="except"
                size="xl"
                disabled={isSubmitting}
              >
                {isRegister ? "Continue" : "Get Started"}{" "}
                <ChevronRight
                  size={18}
                  className="group-hover:translate-x-1 font-bold"
                />
              </Button>

              <div className="flex items-center my-5">
                <div className="h-[0.05rem] flex-1 bg-gray-400" />
                <p className="px-2 text-gray-400 text-sm tracking-tighter">
                  OR
                </p>
                <div className="h-[0.05rem] flex-1 bg-gray-400" />
              </div>

              <Button
                type="button"
                variant="ghost"
                size="xl"
                className="text-neutral-500 hover:text-neutral-700 text-base"
              >
                Google Account
              </Button>
            </form>

            <div className="flex items-center justify-center mt-8 tracking-tight text-sm text-light-muted">
              <p>
                {isRegister ? "Already have an account?" : "New to MoodLit?"}{" "}
                <Link
                  href={isRegister ? "/sign-in" : "/sign-up"}
                  className="text-blue-400"
                >
                  {isRegister ? "Sign In" : "Sign Up"}
                </Link>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthForm;
