"use client";
import { CardWrapper } from "./card-wrapper";
import { RegisterSchema } from "@/schemas";
import { useState, useTransition } from "react";
import * as z from "zod";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { FormError } from "../form-error";
import { FormSuccess } from "../form-success";
import { postCreateNewUser } from '@/app/services/apiService';
import { toast } from 'react-toastify';
import { useRouter } from "next/navigation";  // Adjust import

export const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();
  const [isPending, startTransition] = useTransition();

  const validateForm = () => {
    const formData = { username, email, password };
    try {
      RegisterSchema.parse(formData);
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        setError(error.errors.map(err => err.message).join(", "));
      }
      return false;
    }
  };

  let router = useRouter();  // Adjust hook

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setError("");
    setSuccess("");

    const api = '/api/users/create-new-user';
    const userData = { username, email, password };

    try {
      const res: any = await postCreateNewUser(api, userData);
      if (res && res.EC === 0) {
        toast.success(res.EM);
        router.push('/auth/login');  // Adjust navigation function
      } else {
        toast.error(res.EM);
      }
    } catch (error) {
      setError(`An error occurred. Please try again. ${error}`);
    }
  };

  return (
    <>
      <CardWrapper
        headerLabel="Create an account to use this website"
        backButtonLabel="Already have an account"
        backButtonHref="/auth/login"
        showSocial
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div>
              <label htmlFor="username">Name</label>
              <Input
                id="username"
                name="username"
                type="text"
                placeholder="For example: Nancy"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                disabled={isPending}
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="nancy@example.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                disabled={isPending}
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="*******"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                disabled={isPending}
              />
            </div>
          </div>
          {error && <FormError message={error} />}
          {success && <FormSuccess message={success} />}
          <Button className="w-full" type="submit" disabled={isPending}>
            {isPending ? "Submitting..." : "Submit"}
          </Button>
        </form>
      </CardWrapper>
    </>
  );
};
