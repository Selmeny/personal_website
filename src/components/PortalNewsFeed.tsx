"use client";

import { PlayCircle, MessageSquare } from "lucide-react";

export default function PortalNewsFeed() {
    const newsItems = [
        {
            category: "Career",
            title: "Paul Brugman appointed Master of IT Candidate at James Cook University",
            time: "2h ago",
            isNew: true,
            comments: 124
        },
        {
            category: "Android",
            title: "Vertilogic: Successfully delivered 9 Android Applications over 4-year tenure",
            time: "1d ago",
            isNew: false,
            comments: 89
        },
        {
            category: "Forestry",
            title: "Sinarmas Forestry: Led organization & people development for 300+ employees",
            time: "Archive",
            isNew: false,
            comments: 45
        },
        {
            category: "Research",
            title: "University of Göttingen: Analyzed 1,000+ insect samples for EFForTS project",
            time: "Archive",
            isNew: false,
            comments: 12
        }
    ];

    const topics = [
        "Major", "Cybersecurity", "Android", "Education", "Forestry"
    ];

    return (
        <div className="flex-grow space-y-4">
            {/* Top Slider / Hero equivalent */}
            <div className="bg-white border text-center p-8 bg-gradient-to-br from-gray-100 to-gray-200">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">
                    Switching Gears: From Android to Cyber
                </h2>
                <p className="text-gray-600 mb-4 max-w-lg mx-auto">
                    Paul Brugman leverages 4+ years of software engineering to bring a unique "Builder & Breaker" perspective to network defense.
                </p>
                <button className="bg-[#0033cc] text-white px-6 py-2 rounded font-bold hover:bg-blue-700">
                    Read Full Story
                </button>
            </div>

            {/* Topics Tabs */}
            <div className="bg-white border rounded shadow-sm overflow-hidden">
                <div className="flex border-b bg-gray-50">
                    {topics.map((topic, idx) => (
                        <div
                            key={topic}
                            className={`px-4 py-2 text-sm font-bold cursor-pointer hover:bg-white hover:text-[#ff0033] ${idx === 0 ? 'bg-white border-t-2 border-t-[#ff0033] text-[#ff0033]' : 'text-gray-600'}`}
                        >
                            {topic}
                        </div>
                    ))}
                </div>

                {/* News List */}
                <div className="p-4">
                    <ul className="space-y-3">
                        {newsItems.map((news, idx) => (
                            <li key={idx} className="flex items-start gap-3 border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                                <div className="mt-1">
                                    <PlayCircle className="w-4 h-4 text-gray-400" />
                                </div>
                                <div>
                                    <a href="#" className="text-[#0033cc] hover:underline font-bold text-[15px] leading-tight block mb-1">
                                        {news.title}
                                    </a>
                                    <div className="flex items-center gap-2 text-xs text-gray-400">
                                        <span className="text-[#ff0033] font-bold">{news.category}</span>
                                        <span>-</span>
                                        <span>{news.time}</span>
                                        {news.isNew && (
                                            <span className="bg-[#ff0033] text-white px-1 rounded-[2px] font-bold text-[10px]">NEW</span>
                                        )}
                                        <div className="flex items-center gap-1 text-blue-300 ml-2">
                                            <MessageSquare className="w-3 h-3" />
                                            <span>{news.comments}</span>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className="mt-4 pt-2 border-t text-right">
                        <a href="#" className="text-sm text-[#0033cc] hover:underline font-bold">
                            View All Employment History &raquo;
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
