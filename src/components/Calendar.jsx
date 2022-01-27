import React, {Component} from 'react';
import FullCalendar, {formatDate} from '@fullcalendar/react' // must go before plugins
// import { Calendar } from '@fullcalendar/core';
import esLocale from '@fullcalendar/core/locales/ja';
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from "@fullcalendar/interaction"
import googleCalendarPlugin from '@fullcalendar/google-calendar';
import jaLocale from '@fullcalendar/core/locales/ja';

function Calendar() {

  const handleDateClick = (arg) => {
    // alert(arg.dateStr);
  }

  let str = formatDate(new Date(), {
    month: 'long',
    year: 'numeric',
    day: 'numeric',
    locale: 'ja',
    timeZone: 'Asia/Tokyo'
  });
  
  const renderEventContent = (eventInfo) => {
    return (
      <>
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
        <p>{eventInfo.event.extendedProps.price}</p>
      </>
    )
  }

  return (
    <>
     <h1>{str}</h1>
     <FullCalendar
        plugins={[ dayGridPlugin, interactionPlugin, googleCalendarPlugin ]}
        eventContent={renderEventContent}
        googleCalendarApiKey='AIzaSyBorQC7kHeF2dXTVKyme8c3_M8Y17dgoz4'
        initialView="dayGridMonth"
        timeZone='Asia/Tokyo'
        locale={jaLocale}
        eventSources={[{googleCalendarId: 'en.vietnamese#holiday@group.v.calendar.google.com'}]}
        events={[
          { title: 'event 1', start: '2022-01-28', end: '2022-01-28', price: 20},
          { title: 'event 2', date: '2022-01-29 18:00', price: 30},
          { title: 'event 3', start: '2022-02-01', end: '2022-02-03', price: 40},
        ]}
        dateClick={handleDateClick}
      />
    </>
  );
}

export default Calendar;
