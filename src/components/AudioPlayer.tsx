
import React, { useState, useRef } from 'react';
import { Play, Pause } from 'lucide-react';

interface AudioPlayerProps {
  title: string;
  audioSrc: string;
  duration: string;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ title, audioSrc, duration }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };
  
  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const currentProgress = (audioRef.current.currentTime / audioRef.current.duration) * 100;
      setProgress(currentProgress);
    }
  };
  
  const handleEnded = () => {
    setIsPlaying(false);
    setProgress(0);
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
    }
  };
  
  return (
    <div className="cosmic-blur rounded-xl p-4 w-full">
      <div className="flex items-center space-x-4">
        <button 
          onClick={togglePlay}
          className="flex-shrink-0 w-10 h-10 rounded-full bg-cosmic-accent/20 flex items-center justify-center hover:bg-cosmic-accent/30 transition-colors"
        >
          {isPlaying ? (
            <Pause size={18} className="text-cosmic-foreground" />
          ) : (
            <Play size={18} className="text-cosmic-foreground ml-0.5" />
          )}
        </button>
        
        <div className="flex-grow">
          <div className="text-sm font-light">{title}</div>
          <div className="text-xs text-cosmic-muted mt-1">{duration}</div>
          
          <div className="relative w-full h-1 bg-cosmic-accent/10 rounded-full mt-2">
            <div 
              className="absolute top-0 left-0 h-full bg-cosmic-accent/50 rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
      
      <audio 
        ref={audioRef}
        src={audioSrc}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleEnded}
        className="hidden"
      />
    </div>
  );
};

export default AudioPlayer;
