import React, { useState, useEffect } from 'react';

const AnnouncementBanner: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check local storage to see if banner was already dismissed
        const dismissed = localStorage.getItem('v2_banner_dismissed');
        if (!dismissed) {
            setIsVisible(true);
        }
    }, []);

    const handleDismiss = () => {
        setIsVisible(false);
        localStorage.setItem('v2_banner_dismissed', 'true');
    };

    if (!isVisible) return null;

    return (
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white relative z-50">
            <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-3 w-full justify-center md:justify-start">
                    <span className="bg-white/20 px-2 py-0.5 rounded text-xs font-bold border border-white/30 backdrop-blur-sm">NEW</span>
                    <p className="font-medium text-sm md:text-base">
                        <span className="font-bold">Welcome to V2!</span> Experience the new era of Sh3bonn Coffee.
                    </p>
                </div>

                <button
                    onClick={handleDismiss}
                    className="text-white/80 hover:text-white transition-colors p-1"
                    aria-label="Dismiss announcement"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default AnnouncementBanner;
