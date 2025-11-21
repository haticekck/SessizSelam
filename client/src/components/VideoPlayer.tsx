// src/components/VideoPlayer.tsx dosyasının TAM İÇERİĞİ bu olmalıdır:

import React, { useRef, useEffect } from 'react';

// Bileşenin alacağı prop'ların tür tanımı
interface VideoPlayerProps {
  videoUrl: string; // Oynatılacak videonun URL'si
  onVideoEnd: () => void; // Video bittiğinde çağrılacak fonksiyon
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoUrl, onVideoEnd }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    if (videoElement) {
      // 'ended' olayı, video sona erdiğinde tetiklenir
      videoElement.addEventListener('ended', onVideoEnd);

      // Bileşen temizlenirken (unmount) olay dinleyicisini kaldır
      return () => {
        videoElement.removeEventListener('ended', onVideoEnd);
      };
    }
  }, [onVideoEnd]); 

  return (
    <div className="w-full max-w-md mx-auto mb-6">
      <video
        ref={videoRef}
        controls // Oynatma kontrollerini göster
        src={videoUrl}
        className="w-full rounded-lg shadow-xl"
        data-testid="video-player"
      >
        Tarayıcınız video etiketini desteklemiyor.
      </video>
    </div>
  );
};