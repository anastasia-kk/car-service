import React, {useState, useEffect} from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import {Link} from 'react-router-dom'
import {toAbsoluteUrl} from 'base/helpers'
import { PasswordMeterComponent } from "base/assets/ts/components";


interface IFormInput {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export const Register = () => {
  const [loading, setLoading] = useState(false)
  const { register, formState: { errors }, handleSubmit } = useForm<IFormInput>()
  const onSubmit: SubmitHandler<IFormInput> = data => console.log(data)

  useEffect(()=>{
    PasswordMeterComponent.bootstrap();
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)}
          className='form w-100 fv-plugins-bootstrap5 fv-plugins-framework'
          noValidate
          id='kt_login_signup_form'>
      {/* begin::Heading */}
      <div className='mb-10 text-center'>
        {/* begin::Title */}
        <h1 className='text-dark mb-3'>Create an Account</h1>
        {/* end::Title */}

        {/* begin::Link */}
        <div className='text-gray-400 fw-bold fs-4'>
          Already have an account?
          <Link to='/auth/login' className='link-primary fw-bolder' style={{marginLeft: '5px'}}>
            Forgot Password ?
          </Link>
        </div>
        {/* end::Link */}
      </div>
      {/* begin::Form group Firstname */}
      <div className='row fv-row mb-7'>
        <div className='col-xl-6'>
          <label className='class="form-label fw-bolder text-dark fs-6'>First name</label>
          {/*<input {...register("firstName", { required: true, maxLength: 20 })} placeholder="First Name" />*/}
          {/*{errors.firstName?.type === 'required' && "Required"}*/}
          <input
            placeholder='First name'
            type='text'
            autoComplete='off'
          />
        </div>
        <div className='col-xl-6'>
          {/* begin::Form group Lastname */}
          <div className='fv-row mb-5'>
            <label className='form-label fw-bolder text-dark fs-6'>Last name</label>
            {/*<input {...register("lastName", { required: true })} placeholder="Last Name" />*/}
            {/*{errors.lastName && "Required"}*/}
            <input
              placeholder='Last name'
              type='text'
              autoComplete='off'
            />
          </div>
          {/* end::Form group */}
        </div>
      </div>
      {/* end::Form group */}

      {/* begin::Form group Email */}
      <div className='fv-row mb-7'>
        <label className='form-label fw-bolder text-dark fs-6'>Email</label>
        {/*<input type="email" {...register("email", { required: true })} placeholder="Email" />*/}
        {/*{errors.email && "Required"}*/}
        <input
          placeholder='Email'
          type='email'
          autoComplete='off'
        />
      </div>
      {/* end::Form group */}

      {/* begin::Form group Password */}
      <div className='mb-10 fv-row' data-kt-password-meter='true'>
        <div className='mb-1'>
          <label className='form-label fw-bolder text-dark fs-6'>Password</label>
          <div className='position-relative mb-3'>
            {/*<input {...register("password", { required: true })} placeholder="Password" />*/}
            {/*{errors.password && "Required"}*/}
            <input
              type='password'
              placeholder='Password'
              autoComplete='off'
            />
          </div>
          {/* begin::Meter */}
          <div
            className="d-flex align-items-center mb-3"
            data-kt-password-meter-control="highlight"
          >
            <div
              className="flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2"
            ></div>
            <div
              className="flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2"
            ></div>
            <div
              className="flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2"
            ></div>
            <div
              className="flex-grow-1 bg-secondary bg-active-success rounded h-5px"
            ></div>
          </div>
          {/* end::Meter */}
        </div>
        <div className="text-muted">
          Use 8 or more characters with a mix of letters, numbers & symbols.
        </div>
      </div>
      {/* end::Form group */}

      {/* begin::Form group Confirm password */}
      <div className='fv-row mb-5'>
        <label className='form-label fw-bolder text-dark fs-6'>Confirm Password</label>
        <input
          type='password'
          placeholder='Password confirmation'
          autoComplete='off'
        />
        <div className='fv-plugins-message-container'>
          <div className='fv-help-block'>
            <span role='alert'>ERROR</span>
          </div>
        </div>
      </div>
      {/* end::Form group */}

      {/* begin::Form group */}
      <div className='fv-row mb-10'>
        <div className='form-check form-check-custom form-check-solid'>
          <input
            className='form-check-input'
            type='checkbox'
            id='kt_login_toc_agree'
          />
          <label
            className='form-check-label fw-bold text-gray-700 fs-6'
            htmlFor='kt_login_toc_agree'
          >
            I Agree the{' '}
            <Link to='/auth/terms' className='ms-1 link-primary'>
              terms and conditions
            </Link>
            .
          </label>
        </div>
      </div>
      {/* end::Form group */}

      {/* begin::Form group */}
      <div className='text-center'>
        <button
          type='submit'
          id='kt_sign_up_submit'
          className='btn btn-lg btn-primary w-100 mb-5'
        >
          {!loading && <span className='indicator-label'>Submit</span>}
          {loading && (
            <span className='indicator-progress' style={{display: 'block'}}>
              Please wait...{' '}
              <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
            </span>
          )}
        </button>
        <Link to='/auth/login'>
          <button
            type='button'
            id='kt_login_signup_form_cancel_button'
            className='btn btn-lg btn-light-primary w-100 mb-5'
          >
            Cancel
          </button>
        </Link>
      </div>
    </form>
  )
}

