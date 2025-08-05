import React from "react";
import { Bell, Camera } from "lucide-react";
import akshaLogo from "../assets/AkshaLogo.png";
import frmimg1 from "../assets/image2.png";

export default function SurveillanceAlert() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-[550px] mx-auto bg-white rounded-lg shadow-lg overflow-hidden border border-gray-300">
        {/* Header */}
        <div className="bg-white p-6 ">
          <div className="items-center  mb-4">
            <div className="flex items-center ">
              <img src={akshaLogo} alt="" className="w-12 h-12 mr-2" />
            </div>
            <div>
              <div className="text-xs text-gray-600">powered by</div>
              <div className="text-xs font-semibold text-blue-600">
                AlgoAnalytics
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center mb-2 pt-4">
            <Bell className="w-6 h-6 mr-2" />
            <h1 className="text-2xl font-bold text-gray-900">New Auto Alert</h1>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="mb-6">
            <p className="text-gray-800 mb-2">Dear User,</p>
            <p className="text-gray-800">
              Unusual situation is detected. Please check the{" "}
              <span className="text-blue-600 font-medium">auto alert</span>{" "}
              details below.
            </p>
          </div>

          {/* Image Container */}
          <div className="mb-6">
            <div className="border border-gray-300 rounded-lg overflow-hidden ">
              {/* First Image */}
              <div className="relative mb-2">
                <img
                  src={frmimg1}
                  alt="Security camera footage"
                  className="w-full h-48 object-cover"
                />

                {/* Timestamp overlay */}
                <div className="absolute top-3 left-3 text-white text-xs bg-black bg-opacity-70 px-2 py-1 rounded">
                  2024-07-22 12:32:58
                </div>
              </div>

              <div className="relative">
                <img
                  src={frmimg1}
                  alt="Security camera footage"
                  className="w-full h-48 object-cover"
                />

                {/* Timestamp overlay */}
                <div className="absolute top-3 left-3 text-white text-xs bg-black bg-opacity-70 px-2 py-1 rounded">
                  2024-07-22 12:32:58
                </div>
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
            2025 [Your Organization Name] | Contact: support@example.com |
            +91-12345-67890
          </div>
          <div className="text-xs text-gray-600">
            This is an automated message from the Smart Surveillance System. Do
            not reply directly to this email.
          </div>
        </div>
      </div>
    </div>
  );
}
