import React, {useEffect, useState} from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import {toAbsoluteUrl} from 'base/helpers'
import {Link} from 'react-router-dom'
import clsx from 'clsx'

interface IFormInput {
  email: string;
  password: string;
}

export const Login = () => {
  const [loading, setLoading] = useState(false)
  const { register, formState: { errors }, handleSubmit } = useForm<IFormInput>()
  const onSubmit: SubmitHandler<IFormInput> = data => console.log(data)

  useEffect(() => {
    document.body.classList.add('bg-white')
    return () => {
      document.body.classList.remove('bg-white')
    }
  }, [])

  return (

    <div
      className='d-flex flex-column flex-column-fluid bgi-position-y-bottom position-x-center bgi-no-repeat bgi-size-contain bgi-attachment-fixed'
      style={{
        backgroundImage: `url(${toAbsoluteUrl('/media/illustrations/sketchy-1/14.png')})`,
      }}
    >
      {/* begin::Content */}
      <div className='d-flex flex-center flex-column flex-column-fluid p-10 pb-lg-20'>
        {/* begin::Logo */}
        <a href='#' className='mb-12'>
          <img alt='Logo' src={toAbsoluteUrl('/media/logos/logo-1.svg')} className='h-45px' />
        </a>
        {/* end::Logo */}
        {/* begin::Wrapper */}
        <div className='w-lg-500px bg-white rounded shadow-sm p-10 p-lg-15 mx-auto'>
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
                <Link to='/auth/registration' className='link-primary fw-bolder'>
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
                {...register("email", { required: true })}
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
                    'is-valid': !errors.email,
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
                    'is-valid': !errors.password,
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
        </div>
        {/* end::Wrapper */}
      </div>
      {/* end::Content */}
      {/* begin::Footer */}
      <div className='d-flex flex-center flex-column-auto p-10'>
        <div className='d-flex align-items-center fw-bold fs-6'>
          <a href='#' className='text-muted text-hover-primary px-2'>
            About
          </a>

          <a href='#' className='text-muted text-hover-primary px-2'>
            Contact
          </a>

          <a href='#' className='text-muted text-hover-primary px-2'>
            Contact Us
          </a>
        </div>
      </div>
      {/* end::Footer */}
    </div>
  )
}