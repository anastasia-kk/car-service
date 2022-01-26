import React, {useEffect, useState} from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import {toAbsoluteUrl} from 'base/helpers'
import {Link, useNavigate} from 'react-router-dom'
import clsx from 'clsx'
import {useAuth} from 'context/AuthContext'

interface IFormInput {
  email: string;
  password: string;
}

export const Login = () => {
  const {isLoggedIn, setIsLoggedIn} = useAuth()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const { register, formState: { errors, touchedFields }, handleSubmit } = useForm<IFormInput>()
  const onSubmit: SubmitHandler<IFormInput> = data => {
    if(data && !errors.email && !errors.password) {
      localStorage.setItem('APP_IS_LOGGED_IN', 'true')
      setIsLoggedIn(true)
      navigate('/dashboard')
    }
    return false
  }

  return (
    <form
      className='form w-100'
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      id='kt_login_signin_form'
    >
      {/* begin::Heading */}
      <div className='text-center mb-10'>
        <h1 className='text-dark mb-3'>Sign In to Metronic</h1>
        <div className='text-gray-400 fw-bold fs-4'>
          New Here?{' '}
          <Link to='/registration' className='link-primary fw-bolder'>
            Create an Account
          </Link>
        </div>
      </div>
      {/* begin::Heading */}

      <div className='mb-10 bg-light-info p-8 rounded'>
        <div className='text-info'>
          Use account <strong>admin@demo.com</strong> and password <strong>demo</strong> to
          continue.
        </div>
      </div>

      {/* begin::Form group */}
      <div className='fv-row mb-10'>
        <input
          {...register("email", { required: true, pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/})}
          placeholder='Email'
          type='email'
          name='email'
          autoComplete='off'
          className={clsx(
            'form-control form-control-lg form-control-solid',
            {
              'is-invalid': errors.email,
            },
            {
              'is-valid': touchedFields.email && !errors.email,
            }
          )}
        />
        {errors.email && (
          <div className='fv-plugins-message-container'>
            <span role='alert'>Required</span>
          </div>
        )}
      </div>
      {/* end::Form group */}

      {/* begin::Form group */}
      <div className='fv-row mb-10'>
        <div className='d-flex justify-content-between mt-n5'>
          <div className='d-flex flex-stack mb-2'>
            {/* begin::Label */}
            <label className='form-label fw-bolder text-dark fs-6 mb-0'>Password</label>
            {/* end::Label */}
            {/* begin::Link */}
            <Link
              to='/auth/forgot-password'
              className='link-primary fs-6 fw-bolder'
              style={{marginLeft: '5px'}}
            >
              Forgot Password ?
            </Link>
            {/* end::Link */}
          </div>
        </div>

        <input
          {...register("password", { required: true })}
          type='password'
          autoComplete='off'
          className={clsx(
            'form-control form-control-lg form-control-solid',
            {
              'is-invalid': errors.password,
            },
            {
              'is-valid': touchedFields.password && !errors.password,
            }
          )}
        />
        {errors.password && (
          <div className='fv-plugins-message-container'>
            <div className='fv-help-block'>
              <span role='alert'>Required</span>
            </div>
          </div>
        )}
      </div>
      {/* end::Form group */}

      {/* begin::Action */}
      <div className='text-center'>
        <button
          type='submit'
          id='kt_sign_in_submit'
          className='btn btn-lg btn-primary w-100 mb-5'
        >
          {!loading && <span className='indicator-label'>Continue</span>}
          {loading && (
            <span className='indicator-progress' style={{display: 'block'}}>
              Please wait...
              <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
            </span>
          )}
        </button>

        {/* begin::Separator */}
        <div className='text-center text-muted text-uppercase fw-bolder mb-5'>or</div>
        {/* end::Separator */}

        {/* begin::Google link */}
        <a href='#' className='btn btn-flex flex-center btn-light btn-lg w-100 mb-5'>
          <img
            alt='Logo'
            src={toAbsoluteUrl('/media/svg/brand-logos/google-icon.svg')}
            className='h-20px me-3'
          />
          Continue with Google
        </a>
        {/* end::Google link */}

        {/* begin::Google link */}
        <a href='#' className='btn btn-flex flex-center btn-light btn-lg w-100 mb-5'>
          <img
            alt='Logo'
            src={toAbsoluteUrl('/media/svg/brand-logos/facebook-4.svg')}
            className='h-20px me-3'
          />
          Continue with Facebook
        </a>
        {/* end::Google link */}

        {/* begin::Google link */}
        <a href='#' className='btn btn-flex flex-center btn-light btn-lg w-100'>
          <img
            alt='Logo'
            src={toAbsoluteUrl('/media/svg/brand-logos/apple-black.svg')}
            className='h-20px me-3'
          />
          Continue with Apple
        </a>
        {/* end::Google link */}
      </div>
      {/* end::Action */}
    </form>
  )
}