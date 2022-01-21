/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC} from 'react'
import {toAbsoluteUrl} from '../../../helpers'

const languages = [
  {
    lang: 'en',
    name: 'English',
    flag: toAbsoluteUrl('/media/flags/united-states.svg'),
  },
  {
    lang: 'zh',
    name: 'Mandarin',
    flag: toAbsoluteUrl('/media/flags/china.svg'),
  },
  {
    lang: 'es',
    name: 'Spanish',
    flag: toAbsoluteUrl('/media/flags/spain.svg'),
  },
  {
    lang: 'ja',
    name: 'Japanese',
    flag: toAbsoluteUrl('/media/flags/japan.svg'),
  },
  {
    lang: 'de',
    name: 'German',
    flag: toAbsoluteUrl('/media/flags/germany.svg'),
  },
  {
    lang: 'fr',
    name: 'French',
    flag: toAbsoluteUrl('/media/flags/france.svg'),
  },
]

const Languages: FC = () => {
  return (
    <div
      className='menu-item px-5'
      data-kt-menu-trigger='hover'
      data-kt-menu-placement='left-start'
      data-kt-menu-flip='bottom'
    >
      <a href='#' className='menu-link px-5'>
        <span className='menu-title position-relative'>
          Language
        </span>
      </a>

      <div className='menu-sub menu-sub-dropdown w-175px py-4'>
        {languages.map((l) => (
          <div
            className='menu-item px-3'
            key={l.lang}
          >
            <a
              href='#'
            >
              <span className='symbol symbol-20px me-4'>
                <img className='rounded-1' src={l.flag} alt='metronic' />
              </span>
              {l.name}
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export {Languages}
