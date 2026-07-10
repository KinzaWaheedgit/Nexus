import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function MeetingCalendar() {
  const [date, setDate] = useState(new Date());

  return (
    <div className="p-4 bg-white shadow rounded-lg border border-primary-100">
      <h2 className="text-xl font-bold mb-4 text-primary-900">Schedule a Meeting</h2>
      <Calendar onChange={setDate} value={date} className="w-full" />
      <p className="mt-4 text-gray-700">Selected Date: {date.toDateString()}</p>
    </div>
  );
}