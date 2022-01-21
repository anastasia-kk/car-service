import React from 'react'

import { useForm, SubmitHandler } from "react-hook-form"


interface IFormInput {
  email: string;
  password: string;
}

export const Login = () => {
  const { register, formState: { errors }, handleSubmit } = useForm<IFormInput>()
  const onSubmit: SubmitHandler<IFormInput> = data => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="email" {...register("email", { required: true })} placeholder="Email" />
      {errors.email && "Required"}
      <input {...register("password", { required: true })} placeholder="Password" />
      {errors.password && "Required"}
      <input type="submit" />
    </form>
  )
}