
import React, { useState, useRef, useEffect } from 'react';

const SoundToggle: React.FC = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement>(null);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = 0.05;
        }
    }, []);

    const toggleSound = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play().catch(error => {
                    console.error("Audio autoplay failed:", error);
                });
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <>
            <audio ref={audioRef} src="https://www.soundjay.com/ambient/sounds/coffee-shop-1.mp3" loop />
            <button
                onClick={toggleSound}
                className="fixed bottom-4 left-4 z-50 bg-black/50 text-white p-3 rounded-full hover:bg-black/80 transition-colors"
                aria-label={isPlaying ? 'Mute sound' : 'Unmute sound'}
            >
                {isPlaying ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path><path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path></svg>
                )}
            </button>
        </>
    );
};

export default SoundToggle;
