"use client";

import { useState, useRef, useEffect } from 'react';
import { FaPlay, FaPause, FaSpotify, FaYoutube, FaSoundcloud, FaVolumeHigh, FaVolumeXmark } from 'react-icons/fa6';
import Image from 'next/image';

type MusicPlayerProps = {
  song: {
    title: string;
    artist: string;
    artistUrl?: string;
    albumArt: string;
    audioUrl: string;
    links: {
      spotify?: string;
      youtube?: string;
      soundcloud?: string;
    };
  };
};

const formatTime = (time: number) => {
    if (isNaN(time) || time === 0) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
};

export function MusicPlayer({ song }: MusicPlayerProps) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);
    const [isMuted, setIsMuted] = useState(false);

    const audioRef = useRef<HTMLAudioElement>(null);
    const progressBarRef = useRef<HTMLDivElement>(null);

    const handlePlayPause = () => {
        if (isPlaying) {
            audioRef.current?.pause();
        } else {
            audioRef.current?.play();
        }
        setIsPlaying(!isPlaying);
    };

    const handleMuteToggle = () => {
        if (!audioRef.current) return;
        const newMutedState = !isMuted;
        setIsMuted(newMutedState);
        audioRef.current.muted = newMutedState;
    };

    const handleSeek = (event: React.MouseEvent<HTMLDivElement>) => {
        if (progressBarRef.current && audioRef.current?.duration) {
            const progressBar = progressBarRef.current;
            const clickPositionX = event.clientX - progressBar.getBoundingClientRect().left;
            const progressBarWidth = progressBar.offsetWidth;
            const seekTime = (clickPositionX / progressBarWidth) * audioRef.current.duration;
            audioRef.current.currentTime = seekTime;
            setCurrentTime(seekTime);
        }
    };

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        const onTimeUpdate = () => setCurrentTime(audio.currentTime);
        const onEnded = () => {
            setIsPlaying(false);
            setCurrentTime(0);
        };
        const onCanPlayThrough = () => {
            if (audio.duration) {
                setDuration(audio.duration);
            }
        };

        audio.addEventListener('timeupdate', onTimeUpdate);
        audio.addEventListener('loadedmetadata', onCanPlayThrough);
        audio.addEventListener('canplaythrough', onCanPlayThrough);
        audio.addEventListener('ended', onEnded);

        if (audio.duration) {
            setDuration(audio.duration);
        }

        return () => {
            audio.removeEventListener('timeupdate', onTimeUpdate);
            audio.removeEventListener('loadedmetadata', onCanPlayThrough);
            audio.removeEventListener('canplaythrough', onCanPlayThrough);
            audio.removeEventListener('ended', onEnded);
        };
    }, [song.audioUrl]);

    // Reset state when the song changes
    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.currentTime = 0;
        }
        setCurrentTime(0);
        setIsPlaying(false);
    }, [song.audioUrl]);


    return (
        <div className="bg-[#282828] text-white rounded-lg p-3 shadow-lg w-full">
            <div className="flex items-center gap-4">
                <div className="w-16 h-16 relative">
                    {!isLoaded && (
                        <div className="absolute inset-0 bg-gray-700 animate-pulse rounded-md"></div>
                    )}
                    <Image
                        src={song.albumArt}
                        alt={`${song.title} by ${song.artist}`}
                        width={64}
                        height={64}
                        className={`rounded-md transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                        onLoad={() => setIsLoaded(true)}
                    />
                </div>
                <div className="flex-grow">
                    <a href={song.links.spotify || '#'} target="_blank" rel="noopener noreferrer" className="font-bold hover:underline">{song.title}</a>
                    <p className="text-gray-400 text-sm">{song.artist}</p>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                    {song.links.youtube && <a href={song.links.youtube} target="_blank" rel="noopener noreferrer" className="hover:text-white"><FaYoutube size={20} /></a>}
                    {song.links.soundcloud && <a href={song.links.soundcloud} target="_blank" rel="noopener noreferrer" className="hover:text-white"><FaSoundcloud size={20} /></a>}
                    {song.links.spotify && <a href={song.links.spotify} target="_blank" rel="noopener noreferrer" className="hover:text-white"><FaSpotify size={20} /></a>}
                </div>
            </div>
            
            <div className="flex items-center gap-3 mt-2">
                <span className="text-xs text-gray-400 w-8">{formatTime(currentTime)}</span>
                <div className="flex-grow bg-gray-600/50 rounded-full h-1 cursor-pointer" ref={progressBarRef} onClick={handleSeek}>
                    <div 
                        className="bg-white h-1 rounded-full" 
                        style={{ width: `${(currentTime / duration) * 100 || 0}%` }}
                    ></div>
                </div>
                <span className="text-xs text-gray-400">{formatTime(duration)}</span>
                
                <button
                    onClick={handleMuteToggle}
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label={isMuted ? "Unmute" : "Mute"}
                >
                    {isMuted ? <FaVolumeXmark /> : <FaVolumeHigh />}
                </button>

                <button 
                    onClick={handlePlayPause} 
                    className="bg-white text-black rounded-full w-8 h-8 flex items-center justify-center shadow-md hover:scale-105 transition-transform"
                    aria-label={isPlaying ? "Pause" : "Play"}
                >
                    {isPlaying ? <FaPause /> : <FaPlay className="ml-0.5" />}
                </button>
            </div>

            <audio ref={audioRef} src={song.audioUrl} preload="metadata"></audio>
        </div>
    );
} 