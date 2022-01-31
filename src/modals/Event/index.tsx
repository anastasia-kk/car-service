/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {FC, useState} from 'react'
import {KTSVG, toAbsoluteUrl} from 'base/helpers'
import {Link, useNavigate} from 'react-router-dom'
import clsx from 'clsx'
import {useAuth} from 'context/AuthContext'
import {SubmitHandler, useForm} from 'react-hook-form'

interface IFormInput {
  email: string;
  password: string;
}

export const Event: FC = () => {
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
    <div className='modal fade' id='newEventModal' aria-hidden='true'>
      <div className='modal-dialog mw-650px'>
        <div className='modal-content'>
          <div className='modal-header pb-0 border-0 justify-content-end'>
            <div className='btn btn-sm btn-icon btn-active-color-primary' data-bs-dismiss='modal'>
              <KTSVG path='/media/icons/duotune/arrows/arr061.svg' className='svg-icon-1' />
            </div>
          </div>

          <div className='modal-body scroll-y mx-5 mx-xl-18 pt-0 pb-15'>
            <div className='text-lg-start mb-13'>
              <h1 className='mb-3'>Add new event</h1>
            </div>

            <form
              className='form w-100'
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              id='kt_login_signin_form'
            >
              <div className='d-flex flex-stack mb-2'>
                {/* begin::Label */}
                <label className='form-label text-dark fs-6 mb-0 required'>Event Name</label>
                {/* end::Label */}
              </div>
              <div className='fv-row mb-10'>
                <input
                  {...register}
                  type='text'
                  name='text'
                  className={clsx('form-control form-control-lg form-control-solid')}
                />
              </div>

              {/* begin::Form group */}
              <div className='fv-row mb-10'>
                <div className='d-flex justify-content-between mt-n5'>
                  <div className='d-flex flex-stack mb-2'>
                    {/* begin::Label */}
                    <label className='form-label text-dark fs-6 mb-0 '>Event Description</label>
                    {/* end::Label */}
                  </div>
                </div>

                <input
                  {...register}
                  type='text'
                  className={clsx(
                    'form-control form-control-lg form-control-solid')}
                />
              </div>
              {/* end::Form group */}

              {/* begin::Form group */}
              <div className='fv-row mb-10'>
                <div className='d-flex justify-content-between mt-n5'>
                  <div className='d-flex flex-stack mb-2'>
                    {/* begin::Label */}
                    <label className='form-label text-dark fs-6 mb-0'>Event Location</label>
                    {/* end::Label */}
                  </div>
                </div>

                <input
                  {...register}
                  type='text'
                  className={clsx(
                    'form-control form-control-lg form-control-solid')}
                />
              </div>
              {/* end::Form group */}
              <div className='fv-row mb-9'>
                <label className='form-check form-check-custom form-check-solid'>
                  <input className='form-check-input' type='checkbox' id='calendar-checkbox'/>
                  <span className='form-check-label fw-bold'>All Day</span>
                </label>
              </div>

              <div className='row row-cols-lg-2 g-10'>
                <div className='col'>
                  <div className='fv-row mb-9 fv-plugins-icon-container fv-plugins=bootstrap5-row-valid'>
                    {/* begin::Label */}
                    <label className='fs-6 fw-bold mb-2 required'>Event Start Date</label>
                    {/* end::Label */}
                    <input
                      className='form-control form-control-solid flatpickr-calendar cursor-pointer active'
                      type='text'
                      readOnly={true}
                      placeholder='Pick a date'
                    />
                  </div>
                </div>
              </div>
              {/* begin::Calendar-picker */}
              {/* end::Calendar-picker */}
              <div className='row row-cols-lg-2 g-10'>
                <div className='col'>
                  <div className='fv-row mb-9 fv-plugins-icon-container fv-plugins=bootstrap5-row-valid'>
                    {/* begin::Label */}
                    <label className='fs-6 fw-bold mb-2'>Event End Date</label>
                    {/* end::Label */}
                  </div>
                </div>
              </div>
              {/* begin::Action */}
              <div className='modal-footer flex-center'>
                <button
                  type='reset'
                  id='kt_add_event_cancel'
                  className='btn btn-light'>
                  Cancel
                </button>
                <button
                  type='submit'
                  id='kt_add_event_submit'
                  className='btn btn-primary'
                >
                  {!loading && <span className='indicator-label'>Submit</span>}
                  {loading && (
                    <span className='indicator-progress' style={{display: 'block'}}>
              Please wait...
              <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
            </span>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
