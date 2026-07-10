import React from 'react';
import MeetingCalendar from '../../components/collaboration/MeetingCalendar';

export default function EntrepreneurDashboard() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Entrepreneur Dashboard</h1>
          <p className="text-gray-600">Welcome back to your workspace.</p>
        </header>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Calendar Section (Span 2 columns) */}
          <div className="lg:col-span-2">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Meeting Scheduler</h2>
              <MeetingCalendar />
            </div>
          </div>

          {/* Side Info/Stats Section */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Quick Stats</h2>
              <div className="space-y-4">
                <div className="p-4 bg-primary-50 rounded-lg">
                  <p className="text-primary-800 font-medium">Upcoming Meetings</p>
                  <p className="text-2xl font-bold text-primary-600">3</p>
                </div>
                <div className="p-4 bg-secondary-50 rounded-lg">
                  <p className="text-secondary-800 font-medium">Pending Tasks</p>
                  <p className="text-2xl font-bold text-secondary-600">5</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}