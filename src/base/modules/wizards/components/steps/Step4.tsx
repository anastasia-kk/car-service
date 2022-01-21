import React, {FC} from 'react'
import {KTSVG, toAbsoluteUrl} from 'base/helpers'

const Step4: FC = () => {
  return (
    <div className='w-100'>
      <div className='pb-10 pb-lg-15'>
        <h2 className='fw-bolder text-dark'>Billing Details</h2>

        <div className='text-gray-400 fw-bold fs-6'>
          If you need more info, please check out
          <a href='/dashboard' className='text-primary fw-bolder'>
            {' '}
            Help Page
          </a>
          .
        </div>
      </div>

      <div className='d-flex flex-column mb-7 fv-row'>
        <label className='d-flex align-items-center fs-6 fw-bold form-label mb-2'>
          <span className='required'>Name On Card</span>
          <i
            className='fas fa-exclamation-circle ms-2 fs-7'
            data-bs-toggle='tooltip'
            title="Specify a card holder's name"
          ></i>
        </label>

        <input
          type='text'
          className='form-control form-control-solid'
          placeholder=''
          name='nameOnCard'
        />
        <div className='text-danger mt-2'>
          ERROR
        </div>
      </div>

      <div className='d-flex flex-column mb-7 fv-row'>
        <label className='required fs-6 fw-bold form-label mb-2'>Card Number</label>

        <div className='position-relative'>
          <input
            type='text'
            className='form-control form-control-solid'
            placeholder='Enter card number'
            name='cardNumber'
          />
          <div className='text-danger mt-2'>
            ERRROR
          </div>

          <div className='position-absolute translate-middle-y top-50 end-0 me-5'>
            <img src={toAbsoluteUrl('/media/svg/card-logos/visa.svg')} alt='' className='h-25px' />
            <img
              src={toAbsoluteUrl('/media/svg/card-logos/mastercard.svg')}
              alt=''
              className='h-25px'
            />
            <img
              src={toAbsoluteUrl('/media/svg/card-logos/american-express.svg')}
              alt=''
              className='h-25px'
            />
          </div>
        </div>
      </div>

      <div className='row mb-10'>
        <div className='col-md-8 fv-row'>
          <label className='required fs-6 fw-bold form-label mb-2'>Expiration Date</label>

          <div className='row fv-row'>
            <div className='col-6'>

            </div>

            <div className='col-6'>

            </div>
          </div>
        </div>

        <div className='col-md-4 fv-row'>
          <label className='d-flex align-items-center fs-6 fw-bold form-label mb-2'>
            <span className='required'>CVV</span>
            <i
              className='fas fa-exclamation-circle ms-2 fs-7'
              data-bs-toggle='tooltip'
              title='Enter a card CVV code'
            ></i>
          </label>

          <div className='position-relative'>
            <input
              type='text'
              className='form-control form-control-solid'
              minLength={3}
              maxLength={4}
              placeholder='CVV'
              name='cardCvv'
            />
            <div className='text-danger mt-2'>
              ERROR
            </div>

            <div className='position-absolute translate-middle-y top-50 end-0 me-3'>
              <KTSVG path='/media/icons/duotune/finance/fin002.svg' className='svg-icon-2hx' />
            </div>
          </div>
        </div>
      </div>

      <div className='d-flex flex-stack'>
        <div className='me-5'>
          <label className='fs-6 fw-bold form-label'>Save Card for further billing?</label>
          <div className='fs-7 fw-bold text-gray-400'>
            If you need more info, please check budget planning
          </div>
        </div>

        <label className='form-check form-switch form-check-custom form-check-solid'>
          <input className='form-check-input' type='checkbox' value='1' checked={true} />
          <span className='form-check-label fw-bold text-gray-400'>Save Card</span>
        </label>
      </div>
    </div>
  )
}

export {Step4}