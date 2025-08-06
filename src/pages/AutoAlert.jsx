import React from 'react';
import { Bell, Camera } from 'lucide-react';
import akshaLogo from '../assets/AkshaLogo.png'
import objimage from '../assets/image1.png'

export default function SurveillanceAlert() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-[500px] mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-white p-6 ">
          <div className="items-center  mb-4">
            <div className="flex items-center ">
              <img src={akshaLogo} alt="" className='w-12 h-12 mr-2'/>
            </div>
            <div>
                <div className="text-xs text-gray-600">powered by</div>
                <div className="text-xs font-semibold text-blue-600">AlgoAnalytics</div>
              </div>
          </div>
          
          <div className="flex items-center justify-center mb-2 pt-4">
            <Bell className="w-7 h-7 mr-2 " strokeWidth={2} />
            <h1 className="text-2xl font-semibold  text-gray-900">New Alert</h1>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="mb-6">
            <p className="text-gray-800 mb-2">Dear User,</p>
            <p className="text-gray-800">
              Attention: <span className='text-blue-500'>object name </span>spotted. Review <span className='text-blue-500'>alert name</span> details below. 
            </p>
          </div>

          {/* Image Container */}
          <div className="mb-6">
            <div className="relative bg-gray-900 rounded-lg overflow-hidden">
              <img 
                src={objimage} 
                alt="Security camera footage"
                className="w-full h-64 object-cover opacity-80"
              />
              
              {/* Timestamp overlay */}
              <div className="absolute top-3 left-3 text-white text-xs bg-black bg-opacity-50 px-2 py-1 rounded">
                16-2024 Tue 19:30:24
              </div>
              
              
              {/* Camera label */}
              <div className="absolute bottom-3 right-3 text-white text-xs bg-black bg-opacity-50 px-2 py-1 rounded">
                Camera 01
              </div>
            </div>
          </div>

          {/* Camera Info */}
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-3">
              <Camera className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="font-bold text-lg text-gray-900">cam501</div>
              <div className="text-gray-600 text-sm">12 June 2025 - 11:38</div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-blue-100 p-4 text-center">
          <div className="text-xs text-gray-700 mb-1">
            2025 [Your Organization Name] | Contact: support@example.com | +91-12345-67890
          </div>
          <div className="text-xs text-gray-600">
            This is an automated message from the Smart Surveillance System. Do not reply directly to this email.
          </div>
        </div>
      </div>
    </div>
  );
}