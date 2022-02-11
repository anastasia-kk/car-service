/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {FC, useState} from 'react'
import {KTSVG} from 'base/helpers'
import {useNavigate} from 'react-router-dom'
import clsx from 'clsx'
import {useAuth} from 'context/AuthContext'
import {SubmitHandler, useForm} from 'react-hook-form'
import Flatpickr from 'react-flatpickr'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

interface IFormInput {
  eventName: string;
  eventDescription: string;
  eventLocation: string;
}

export const Event: FC = () => {
  const {setIsLoggedIn} = useAuth()
  const navigate = useNavigate()
  const [events, setEvents] = useState([])
  const [event, setEvent] = useState({})
  const [time, setTime] = useState(true)
  const [loading, setLoading] = useState(false)
  const { register, formState: { errors, touchedFields }, handleSubmit } = useForm<IFormInput>()
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    const eventObject = {...event, ...data}
    setEvent(eventObject)
    // @ts-ignore
    setEvents([...events, eventObject])
  }
  console.log(events)
  const handleCancel = () => {
    const MySwal = withReactContent(Swal)

    MySwal.fire({
      didOpen: () => {
        MySwal.clickConfirm()
      }
    }).then(async () => {
      const swalFired = await MySwal.fire({
        text: "Are you sure you would like to cancel?",
        icon: "warning",
        buttonsStyling: false,
        showCancelButton: true,
        confirmButtonText: "Yes, cancel it!",
        cancelButtonText: "No, return",
        customClass: {
          confirmButton: "btn btn-primary",
          cancelButton: "btn btn-light"
        }
      });
      if(swalFired.isConfirmed) {
        const closeBtnModal = document.getElementById('newEventModalCloseBtn')
        // @ts-ignore
        closeBtnModal.click()
      }
    })
  }
  return (
    <div className='modal fade' id='newEventModal' aria-hidden='true'>
      <div className='modal-dialog mw-650px'>
        <div className='modal-content'>
          <div className='modal-header pb-0 border-0 justify-content-end'>
            <div id="newEventModalCloseBtn" className='btn btn-sm btn-icon btn-active-color-primary' data-bs-dismiss='modal'>
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
                  {...register('eventName', {required: true})}
                  type='text'
                  name='eventName'
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
                  {...register('eventDescription')}
                  type='text'
                  name='eventDescription'
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
                  {...register('eventLocation')}
                  type='text'
                  name='eventLocation'
                  className={clsx(
                    'form-control form-control-lg form-control-solid')}
                />
              </div>
              {/* end::Form group */}
              <div className='fv-row mb-9'>
                <label className='form-check form-check-custom form-check-solid'>
                  <input className='form-check-input' type='checkbox' onChange={() => setTime(!time)} />
                  <span className='form-check-label fw-bold'>All Day</span>
                </label>
              </div>

              {/* begin::Calendar-picker */}
              <div className='row row-cols-lg-2 g-10'>
                <div className='col'>
                  <div className='fv-row mb-9 fv-plugins-icon-container fv-plugins=bootstrap5-row-valid'>
                    {/* begin::Label */}
                    <label className='fs-6 fw-bold mb-2 required'>Event Start Date</label>
                    {/* end::Label */}
                    <Flatpickr
                      className='form-control form-control-solid cursor-pointer active'
                      placeholder='Pick a date'
                      readOnly
                      options={{ allowInput: true }}
                      onChange={date => {
                        setEvent({ ...event, start: date })
                      }}
                     />
                  </div>
                </div>
                <div className='col'>
                  {time && (
                    <div className='fv-row mb-9'>
                      <label className='fs-6 fw-bold mb-2'>Event Start Time</label>
                      <Flatpickr
                        className='form-control form-control-solid flatpickr-hour cursor-pointer active'
                        type='text'
                        readOnly
                        placeholder='Pick a start time'
                        options={{
                          enableTime: true,
                          noCalendar: true,
                          dateFormat: "H:i"
                        }}
                      />
                    </div>
                  )}
                </div>
                {/* end::Calendar-picker */}
              </div>

              <div className='row row-cols-lg-2 g-10'>
                <div className='col'>
                  <div className='fv-row mb-9 fv-plugins-icon-container fv-plugins=bootstrap5-row-valid'>
                    {/* begin::Label */}
                    <label className='fs-6 fw-bold mb-2 required'>Event End Date</label>
                    {/* end::Label */}
                    <Flatpickr
                      className='form-control form-control-solid cursor-pointer active'
                      placeholder='Pick a date'
                      readOnly
                      options={{ allowInput: true }}
                      onChange={date => {
                        setEvent({ ...event, end: date })
                      }}
                    />
                  </div>
                </div>
                {/* begin::Calendar-picker */}
                <div className='col'>
                  {time && (
                    <div className='fv-row mb-9'>
                      <label className='fs-6 fw-bold mb-2'>Event End Time</label>
                      <Flatpickr
                        className='form-control form-control-solid flatpickr-hour cursor-pointer active'
                        type='text'
                        readOnly
                        placeholder='Pick an end time'
                        options={{
                          enableTime: true,
                          noCalendar: true,
                          dateFormat: "H:i"
                        }}
                      />
                    </div>
                  )}
                </div>
                {/* end::Calendar-picker */}
              </div>
              {/* begin::Action */}
              <div className='modal-footer flex-center'>
                <button
                  onClick={() => handleCancel()}
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
