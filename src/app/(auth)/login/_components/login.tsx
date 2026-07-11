"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { LoginForm, loginSchemaForm } from "@/validation/auth.validation";
import {
  INITIAL_LOGIN_FORM,
  INITIAL_STATE_LOGIN_FORM,
} from "@/constant/auth.constant";
import { zodResolver } from "@hookform/resolvers/zod";
import { startTransition, useActionState, useEffect } from "react";
import FormInput from "@/components/common/form-input";
import { Loader2 } from "lucide-react";
import { login } from "../action";
import { toast } from "sonner";

export function Login() {
  const form = useForm<LoginForm>({
    resolver: zodResolver(loginSchemaForm),
    defaultValues: INITIAL_LOGIN_FORM,
  });

  const [loginState, loginAction, isPendingLogin] = useActionState(
    login,
    INITIAL_STATE_LOGIN_FORM,
  );

  const onSubmit = form.handleSubmit(async (data) => {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
    });

    startTransition(() => {
      loginAction(formData);
    });
  });

    useEffect(() => {
    if (loginState?.status === "error") {
      toast.error("Login Failed", {
        description: loginState.errors?._form?.[0],
      });
      startTransition(() => {
        loginAction(null);
      });
    }
  }, [loginState]);

  return (
    <div className="flex flex-col gap-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={onSubmit}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <FormInput
                  form={form}
                  name="email"
                  label="Email"
                  placeholder="Insert email here.."
                  type="email"
                />
                <FormInput
                  form={form}
                  name="password"
                  label="Password"
                  placeholder="****"
                  type="password"
                />
                <Button type="submit" disabled={isPendingLogin}>
                  {isPendingLogin ? (
                    <Loader2 className="animate-spin" />
                  ) : (
                    "Login"
                  )}
                </Button>
              </div>
            </div>
            <div className="mt-4 text-center text-sm">
              Don&apos;t have an account?{" "}
              <Link
                href="/auth/sign-up"
                className="underline underline-offset-4"
              >
                Sign up
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
