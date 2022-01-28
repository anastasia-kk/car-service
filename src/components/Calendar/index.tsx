import React, {FC} from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

interface Props {
  className: string
}

export const Calendar: FC<Props> = ({className}) => {
  return (
    <div className={`card ${className}`}>
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bolder fs-3 mb-1'>Calendar</span>
        </h3>
      </div>
      <div className='card-body py-3'>
        <FullCalendar
          plugins={[ dayGridPlugin ]}
          initialView="dayGridMonth"
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth"
          }}
          events={[
            { title: 'event 1', date: '2022-01-28' },
            { title: 'event 2', date: '2022-01-28' }
          ]}
        />
      </div>
    </div>
  )
}

