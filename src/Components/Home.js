import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { 
  ChartBarIcon, 
  UsersIcon, 
  BellIcon, 
  CreditCardIcon, 
  ArrowTrendingUpIcon, 
  BriefcaseIcon, 
  ChevronDownIcon, 
  ChevronUpIcon, 
  Bars3Icon,
  Cog6ToothIcon
} from '@heroicons/react/24/outline';

const data = [
  { name: 'Jan', registration: 400, referral: 240 },
  { name: 'Feb', registration: 300, referral: 139 },
  { name: 'Mar', registration: 200, referral: 980 },
  { name: 'Apr', registration: 278, referral: 390 },
  { name: 'May', registration: 189, referral: 480 },
];

const boxData = [
  { icon: <UsersIcon className="w-8 h-8 mx-auto text-blue-500" />, name: "Users", number: <span className="text-blue-500">333</span> },
  { icon: <ArrowTrendingUpIcon className="w-8 h-8 mx-auto text-green-500" />, name: "Growth", number: <span className="text-green-500">120</span> },
  { icon: <BriefcaseIcon className="w-8 h-8 mx-auto text-blue-500" />, name: "Projects", number: <span className="text-blue-500">45</span> },
  { icon: <BellIcon className="w-8 h-8 mx-auto text-green-500" />, name: "Alerts", number: <span className="text-green-500">7</span> },
  { icon: <ChartBarIcon className="w-8 h-8 mx-auto text-blue-500" />, name: "Reports", number: <span className="text-blue-500">22</span> },
  { icon: <Cog6ToothIcon className="w-8 h-8 mx-auto text-green-500" />, name: "Settings", number: <span className="text-green-500">5</span> },
];

const Dashboard = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex min-h-screen relative">
      {/* Sidebar */}
      <aside className={`fixed top-0 left-0 w-60 h-full bg-gray-800 text-white flex flex-col justify-between p-4 z-20 ${isSidebarOpen ? "block" : "hidden"} lg:block`}>
  <div>
    <div className="text-2xl font-bold mb-6">Logo</div>
    <ul>
      <li className="mb-4 cursor-pointer flex items-center">
        <ChartBarIcon className="w-5 h-5 mr-2" /> Analytics
      </li>
      <li className="mb-4 cursor-pointer flex items-center">
        <UsersIcon className="w-5 h-5 mr-2" /> Users
      </li>
      {/* Notifications with Dropdown */}
      <li className="mb-4 cursor-pointer flex justify-between items-center">
        <span onClick={toggleDropdown} className="flex items-center cursor-pointer">
          <BellIcon className="w-5 h-5 mr-2" /> Notifications
        </span>
        <span onClick={toggleDropdown}>
          {isDropdownOpen ? <ChevronUpIcon className="w-5 h-5" /> : <ChevronDownIcon className="w-5 h-5" />}
        </span>
      </li>
      {/* Dropdown Content */}
      {isDropdownOpen && (
        <ul className="bg-gray-700 rounded-md mt-2 p-2 text-sm">
          <li className="p-2 hover:bg-gray-600 cursor-pointer">New message received</li>
          <li className="p-2 hover:bg-gray-600 cursor-pointer">Server maintenance at midnight</li>
          <li className="p-2 hover:bg-gray-600 cursor-pointer">New friend request</li>
        </ul>
      )}
      <li className="mb-4 cursor-pointer flex items-center">
        <CreditCardIcon className="w-5 h-5 mr-2" /> Transactions
      </li>
    </ul>
  </div>
  
  {/* User Info at Bottom */}
  <div className="flex items-center gap-3 mt-auto">
    <img alt="User" className="w-8 h-8 rounded-full bg-gray-500" />
    <span>Sandra Marx</span>
  </div>
</aside>


      {/* Overlay for Mobile View */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 lg:hidden z-10"
          onClick={toggleSidebar}
        />
      )}

      {/* Main Content */}
      <main className="flex-1 p-6 bg-gray-100 lg:ml-60">
        {/* Sidebar Toggle Button for Mobile View */}
        {!isSidebarOpen && (
          <button onClick={toggleSidebar} className="mb-6 text-gray-800 p-2 rounded-md shadow bg-white lg:hidden">
            <Bars3Icon className="w-6 h-6" />
          </button>
        )}

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {boxData.map((box, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-3xl">{box.icon}</div>
              <div className="text-lg font-semibold">{box.name}</div>
              <div className="text-2xl font-bold">{box.number}</div>
            </div>
          ))}
        </div>

        {/* Bottom Section - Graph */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Registration & Referral Overview</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="registration" stroke="#8884d8" />
              <Line type="monotone" dataKey="referral" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
