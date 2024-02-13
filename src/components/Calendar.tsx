"use client";

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction'
import dayjs from 'dayjs';
import eventDropInfo from '@fullcalendar/interaction';

export default function Calendar() {

  function handleEventDrop( info: any ) {
    // Ask for confirmation before moving the event
    if (!confirm(
      "Are you sure you want to move the event \n" +
      info.event.title + '\n' +
      'From: ' + dayjs(info.event.start).format('MMM DD YYYY - HH:mm') + '\n' +
      'To: ' + dayjs(info.oldEvent.start).format('MMM DD YYYY - HH:mm') + '?'
    )) {
      // If the user doesn't confirm, revert the event's start date
      info.revert();
    }
  }

  return (

    <div className="grow h-full">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        aspectRatio={1.6}
        height={"100%"}
        eventSources={[
          { url: 'http://localhost:3000/api/events' }
        ]}
        headerToolbar={{
          left: 'prev,next today myCustomButton',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay listWeek'
        }}

        customButtons={{
          myCustomButton: {
            text: 'Custom',
            click: function () {
              alert('Clicked the custom button.');
            }
          }
        }}

        eventClick={function (info) {
          let start = dayjs(info.event.start).format('MMM DD YYYY - HH:mm');
          let end = dayjs(info.event.end).format('MMM DD YYYY - HH:mm');
          alert('Event: ' + info.event.title + '\n' +
            'Start: ' + start + '\n' +
            'End: ' + end);
        }}

        eventStartEditable={true}
        eventDrop={handleEventDrop}

        buttonText={{
          today: 'Today',
          month: 'Month',
          week: 'Week',
          day: 'Day',
          list: 'List',
        }}
      />
    </div>
  )
}
