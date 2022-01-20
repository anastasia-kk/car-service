import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form"


interface IFormInput {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export const Register = () => {
  const { register, formState: { errors }, handleSubmit } = useForm<IFormInput>()
  const onSubmit: SubmitHandler<IFormInput> = data => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName", { required: true, maxLength: 20 })} placeholder="First Name" />
      {errors.firstName?.type === 'required' && "Required"}
      <input {...register("lastName", { required: true })} placeholder="Last Name" />
      {errors.lastName && "Required"}
      <input type="email" {...register("email", { required: true })} placeholder="Email" />
      {errors.email && "Required"}
      <input {...register("password", { required: true })} placeholder="Password" />
      {errors.password && "Required"}
      <input type="submit" />
    </form>
  )
}