"use client";

import FullCalendar from '@fullcalendar/react'
import multiMonthPlugin from '@fullcalendar/multimonth'

export default function MultiCalendar() {

  return (
    <div className="grow h-full">
      <FullCalendar
        plugins={[multiMonthPlugin]}
        initialView="multiMonthYear"
        eventSources={[
          { url: 'http://localhost:3000/api/events?max=2' }
        ]}
        aspectRatio={1.6}
        height={"100%"}
      />
    </div>
  )
}
