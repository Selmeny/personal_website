"use client";

import { Award, Lock, ExternalLink } from "lucide-react";

export default function PortalRightColumn() {
    const certs = [
        "Google Cybersecurity Professional",
        "Cisco Junior Cybersecurity Analyst",
        "Python for Cybersecurity",
        "Google: Manage Security Risks"
    ];

    return (
        <div className="w-full md:w-80 flex-shrink-0 space-y-4">
            {/* Login / Profile Widget */}
            <div className="bg-white border rounded shadow-sm p-4 text-center">
                <div className="flex justify-center mb-2">
                    <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center border-2 border-gray-100">
                        <span className="text-2xl font-bold text-gray-400">PB</span>
                    </div>
                </div>
                <p className="font-bold text-gray-800">Welcome, Visitor!</p>
                <div className="flex justify-center gap-2 mt-3">
                    <button className="bg-[#ff0033] text-white px-4 py-1.5 rounded text-sm font-bold shadow-sm hover:bg-red-600 w-full text-center">
                        Contact Me
                    </button>
                    <button className="bg-gray-100 text-gray-700 px-4 py-1.5 rounded text-sm font-bold hover:bg-gray-200 border w-full text-center">
                        LinkedIn
                    </button>
                </div>
            </div>

            {/* "Ad" - Certification Banner */}
            <div className="bg-white border rounded shadow-sm p-4">
                <div className="text-xs text-gray-400 mb-1 flex justify-between">
                    <span>Sponsored Information</span>
                    <span className="bg-gray-200 text-gray-500 px-1 rounded text-[10px]">Ad</span>
                </div>
                <div className="border border-green-200 bg-green-50 p-3 rounded">
                    <div className="flex items-start gap-2 mb-2">
                        <Award className="w-8 h-8 text-green-600" />
                        <div>
                            <h4 className="font-bold text-green-800 leading-tight">Certified Professional</h4>
                            <p className="text-xs text-green-700">Paul holds 11+ Industry Certificates.</p>
                        </div>
                    </div>

                    <ul className="space-y-1 mt-2">
                        {certs.map((cert, idx) => (
                            <li key={idx} className="text-sm text-green-900 flex items-center gap-1.5 truncate">
                                <span className="w-1.5 h-1.5 bg-green-500 rounded-full flex-shrink-0" />
                                <span className="truncate">{cert}</span>
                            </li>
                        ))}
                    </ul>
                    <a href="#" className="block mt-3 text-center text-xs font-bold text-green-700 hover:underline">
                        View All Certifications &raquo;
                    </a>
                </div>
            </div>

            {/* Security Banner Widget */}
            <div className="bg-white border rounded shadow-sm overflow-hidden">
                <div className="bg-blue-50 p-3 border-b border-blue-100 flex items-center gap-2">
                    <Lock className="w-4 h-4 text-[#0033cc]" />
                    <span className="text-sm font-bold text-[#0033cc]">Cyber Security Tip</span>
                </div>
                <div className="p-3 text-sm text-gray-600">
                    <p className="mb-2">
                        "Always sanitize user inputs to prevent SQL Injection attacks."
                    </p>
                    <p className="text-xs text-gray-400 text-right">- Paul B.</p>
                </div>
            </div>

        </div>
    );
}
