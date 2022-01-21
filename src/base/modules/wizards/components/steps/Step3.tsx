import React, {FC} from 'react'

const Step3: FC = () => {
  return (
    <div className='w-100'>
      <div className='pb-10 pb-lg-12'>
        <h2 className='fw-bolder text-dark'>Business Details</h2>

        <div className='text-gray-400 fw-bold fs-6'>
          If you need more info, please check out
          <a href='/dashboard' className='link-primary fw-bolder'>
            {' '}
            Help Page
          </a>
          .
        </div>
      </div>

      <div className='fv-row mb-10'>
        <label className='form-label required'>Business Name</label>

        <input name='businessName' className='form-control form-control-lg form-control-solid' />
        <div className='text-danger mt-2'>
          ERRROR
        </div>
      </div>

      <div className='fv-row mb-10'>
        <label className='d-flex align-items-center form-label'>
          <span className='required'>Shortened Descriptor</span>
        </label>

        <div className='form-text'>
          Customers will see this shortened version of your statement descriptor
        </div>
      </div>

      <div className='fv-row mb-10'>
        <label className='form-label required'>Corporation Type</label>
      </div>

      <div className='fv-row mb-10'>
        <label className='form-label'>Business Description</label>
      </div>

      <div className='fv-row mb-0'>
        <label className='fs-6 fw-bold form-label required'>Contact Email</label>
      </div>
    </div>
  )
}

export {Step3}
