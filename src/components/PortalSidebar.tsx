"use client";

import {
    Smartphone,
    Shield,
    Terminal,
    Database,
    Users,
    Code,
    MapPin,
    Briefcase
} from "lucide-react";

export default function PortalSidebar() {
    const services = [
        { icon: Smartphone, label: "Android Dev", active: false },
        { icon: Shield, label: "Cybersecurity", active: true },
        { icon: Terminal, label: "Linux/System", active: false },
        { icon: Database, label: "SQL/Data", active: false },
        { icon: Code, label: "Web Dev", active: false },
        { icon: Users, label: "Leadership", active: false },
    ];

    return (
        <div className="w-full md:w-48 flex-shrink-0 space-y-4">
            {/* Main Navigation Box */}
            <div className="bg-white border rounded shadow-sm overflow-hidden">
                <div className="bg-gray-100 px-3 py-2 font-bold text-gray-700 border-b text-sm">
                    Main Services
                </div>
                <ul className="text-sm">
                    {services.map((item, idx) => (
                        <li key={idx}>
                            <a href="#" className={`flex items-center gap-3 px-3 py-2.5 hover:bg-red-50 hover:text-[#ff0033] border-b border-gray-50 transition-colors ${item.active ? 'bg-red-100 font-bold text-[#ff0033]' : 'text-gray-700'}`}>
                                <item.icon className="w-4 h-4" />
                                <span>{item.label}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Weather / Location Widget */}
            <div className="bg-white border rounded shadow-sm p-3">
                <div className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-2">
                    <MapPin className="w-4 h-4 text-[#ff0033]" />
                    <span>Brisbane, QLD</span>
                </div>
                <div className="text-xs text-gray-500">
                    <div className="flex justify-between items-center mb-1">
                        <span>Today</span>
                        <span className="font-bold text-orange-500">Sunny</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span>Temp</span>
                        <span className="font-bold">28°C</span>
                    </div>
                </div>
            </div>

            {/* Employment Status Widget */}
            <div className="bg-white border rounded shadow-sm p-3">
                <div className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-2">
                    <Briefcase className="w-4 h-4 text-[#0033cc]" />
                    <span>Job Status</span>
                </div>
                <div className="text-xs">
                    <span className="inline-block bg-green-100 text-green-800 px-2 py-0.5 rounded border border-green-200">
                        Open for Work
                    </span>
                    <p className="mt-2 text-gray-500 leading-tight">
                        Seeking opportunities in AppSec & Network Security.
                    </p>
                </div>
            </div>
        </div>
    );
}
