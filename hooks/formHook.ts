

import { useForm, SubmitHandler } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import {
  SigninFormInput,
  SigninFormSchema,
  SignUpFormInput,
  SignUpFormSchema,
} from "@/lib/auth/formValidations"

type Mode = "signup" | "signin"

export function useAuthForm(mode: Mode) {
  const isRegister = mode === "signup"
  const schema = isRegister ? SignUpFormSchema : SigninFormSchema
  const router = useRouter()

  const form = useForm<SignUpFormInput | SigninFormInput>({
    resolver: zodResolver(schema),
  })

  const {
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = form

  const onSubmit: SubmitHandler<SignUpFormInput | SigninFormInput> = async (data) => {
    try {
      const endpoint = isRegister ? "/api/auth/register" : "/api/auth/login"

      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || "Authentication failed")
      }

      if (isRegister) {
        router.push("/signin?registered=true")
      } else {
        router.push("/dashboard")
      }
    } catch (error) {
      setError("root", {
        message: error instanceof Error ? error.message : "Something went wrong",
      })
    }
  }

  return {
    ...form,
    isRegister,
    errors,
    isSubmitting,
    onSubmit: handleSubmit(onSubmit),
  }
}