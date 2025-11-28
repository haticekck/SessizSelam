import React, { useRef, useEffect } from 'react';

interface VideoPlayerProps {
  videoUrl: string;
  onVideoEnd?: () => void;
  muted?: boolean;
  disableVolumeControl?: boolean;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoUrl, onVideoEnd, muted = false, disableVolumeControl = false }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement && disableVolumeControl) {
      // Bileşen yüklendiğinde ve mute edildiğinde ses seviyesini 0'a ayarla
      videoElement.volume = 0;
      videoElement.muted = true; // Tekrar mute etme garantisi

      // Kullanıcının sesi açmaya çalışmasını dinleyelim ve tekrar sıfırlayalım
      const handleVolumeChange = () => {
        if (videoElement.volume > 0) {
          videoElement.volume = 0;
          videoElement.muted = true;
        }
      };

      videoElement.addEventListener('volumechange', handleVolumeChange);
      
      return () => {
        videoElement.removeEventListener('volumechange', handleVolumeChange);
      };
    }
  }, [disableVolumeControl]);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement && onVideoEnd) { 
      videoElement.addEventListener('ended', onVideoEnd);
      return () => {
        videoElement.removeEventListener('ended', onVideoEnd);
      };
    }
  }, [onVideoEnd]); 

  return (
    <div className="w-full max-w-md mx-auto mb-6">
      <video
        ref={videoRef}
        controls 
        src={videoUrl}
        className="w-full rounded-lg shadow-xl"
        controlsList={disableVolumeControl ? "nodownload noremoteplayback" : undefined}
        muted={muted || disableVolumeControl} 
        data-testid="video-player"
      >
        Tarayıcınız video etiketini desteklemiyor.
      </video>
    </div>
  );
};