import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { 
  ChartBarIcon, 
  UsersIcon, 
  BellIcon, 
  CreditCardIcon, 
  ArrowTrendingUpIcon, 
  BriefcaseIcon, 
  ExclamationTriangleIcon, 
  Cog6ToothIcon, 
  ChevronDownIcon, 
  ChevronUpIcon 
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

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-60 bg-gray-800 text-white flex flex-col justify-between p-4">
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
        <div className="flex items-center gap-3">
          <img src="data:image/jpeg;base64,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" alt="User" className="w-10 h-10 rounded-full" />
          <span>Sandra Marx</span>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-gray-100">
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
