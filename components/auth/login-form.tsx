"use client";
import { CardWrapper } from "./card-wrapper";
import { LoginSchema } from "@/schemas";
import { useState, useTransition } from "react";
import * as z from "zod";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { FormError } from "../form-error";
import { FormSuccess } from "../form-success";
import { postUserLogin } from '@/app/services/apiService';
import { toast } from 'react-toastify';
import { useRouter } from "next/navigation";  // Adjust import


export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();
  const [isPending, startTransition] = useTransition();

  const validateForm = () => {
    const formData = { email, password };
    try {
      LoginSchema.parse(formData);
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        setError(error.errors.map((err) => err.message).join(", "));
      }
      return false;
    }
  };

  let router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setError("");
    setSuccess("");

    const api = '/api/users/login';
    const userData = { email, password };

    try {
      const res: any = await postUserLogin(api, userData);

      if (res && res.EC === 0) {
        let data = {
          isAuthenticated: true,
          token: 'fake token'
        }
        sessionStorage.setItem("account", JSON.stringify(data));
        toast.success(res.EM);

        const emailDomain = email.split('@')[1];
        if (emailDomain === 'admin.com') {
          router.push('/roles/admin/dashboard');
        } else if (emailDomain === 'doctor.com') {
          router.push('/roles/doctors/blood-bank');
        } else {
          router.push('/roles/donors/donate');
        }
      } else {
        //ffffff
        toast.error(res.EM);
      }
    } catch (error) {
      setError(`An error occurred. Please try again. ${error}`);
    }
  };

  return (
    <>
      <CardWrapper
        headerLabel="Welcome back"
        backButtonLabel="Don't have an account?"
        backButtonHref="/auth/register"
        showSocial
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
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
            {isPending ? "Submitting..." : "Login"}
          </Button>
        </form>
      </CardWrapper>
    </>
  );
};
