import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Volume2, VolumeX, Hand, X } from "lucide-react";
import type { Tree } from "@shared/schema";
import { tr } from "@/lib/translations";
import { useState, useRef, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"; 
import { VideoPlayer } from "@/components/VideoPlayer";

interface TreeDetailProps {
  tree: Tree;
  onMarkAsRead: () => void;
  isRead: boolean;
}

//let audio: HTMLAudioElement | null = null;

export function TreeDetail({ tree, onMarkAsRead, isRead }: TreeDetailProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isSignVideoOpen, setIsSignVideoOpen] = useState(false);
  

  const handlePlayPauseAudio = () => {
    if (!tree.audioUrl) {
      console.log("Ses dosyası bulunamadı.");
      return;
    }

    if (isPlaying) {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
      setIsPlaying(false);
    } else {
      if (!audioRef.current) {
        audioRef.current = new Audio(tree.audioUrl);
        audioRef.current.onended = () => {
          setIsPlaying(false);
        };
      }
      
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((error) => {
        console.error("Ses çalınırken bir hata oluştu:", error);
        alert("Ses çalınamadı. Tarayıcı kısıtlamalarını kontrol edin.");
        setIsPlaying(false);
      });
    }
  };

  const handleOpenSignVideo = () => {
    if (isPlaying) {
      handlePlayPauseAudio(); 
    }
    setIsSignVideoOpen(true);
  };

  const handleCloseSignVideo = () => {
    setIsSignVideoOpen(false);
  };

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
    
  }, []);

  const hasAudio = !!tree.audioUrl;
  const hasSignVideo = !!tree.signLanguageVideoUrl;

  return (
    <div className="space-y-4 pb-20">
      <div className="relative h-[300px] overflow-hidden rounded-lg">
        <img
          src={tree.imageUrl}
          alt={tree.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/50 to-background/20" />
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h1
            className="text-3xl font-bold text-foreground mb-1"
            data-testid="text-tree-name"
          >
            {tree.name}
          </h1>
          <p
            className="text-base text-foreground/90 italic"
            data-testid="text-scientific-name"
          >
            {tree.scientificName}
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-start justify-between mb-2">
              <div className="flex-grow"></div>
              <div className="flex flex-col gap-1 flex-shrink-0">
                
                {/* 1. İŞARET DİLİ VİDEO BUTONU */}
                {hasSignVideo && ( 
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={handleOpenSignVideo}
                    data-testid="button-open-sign-video"
                    className="justify-start h-10"
                  >
                    <Hand className="w-4 h-4" />
                    İşaret Dili
                  </Button>
                )}

                {/* 2. SES DİNLE/DURDUR BUTONU */}
                {hasAudio && (
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={handlePlayPauseAudio}
                    data-testid="button-play-audio"
                    className="justify-start h-10"
                  >
                    {isPlaying ? (
                      <>
                        <VolumeX className="w-5 h-5 mr-3" />
                        Durdur
                      </>
                    ) : (
                      <>
                        <Volume2 className="w-5 h-5 mr-3" />
                        Dinle
                      </>
                    )}
                  </Button>
                )}
              </div>
            </div>
            <p
              className="text-sm leading-relaxed whitespace-pre-line"
              data-testid="text-description"
            >
              {tree.description}
            </p>
          </CardContent>
        </Card>
      </div>

      {/* 3. İŞARET DİLİ VİDEO MODALI */}
      {hasSignVideo && (
        <Dialog open={isSignVideoOpen} onOpenChange={handleCloseSignVideo}>
          <DialogContent className="sm:max-w-[425px]"> 
            <DialogHeader>
              <DialogTitle>İşaret Dili Anlatımı</DialogTitle>
            </DialogHeader>
            
            <VideoPlayer 
              videoUrl={tree.signLanguageVideoUrl!}
              muted={true}
              disableVolumeControl={true}
            />
            
            <div className="pt-4">
              <Button onClick={handleCloseSignVideo} className="w-full" variant="secondary">
                <X className="w-4 h-4 mr-2" /> Kapat
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      )}

      <div className="fixed bottom-0 left-0 right-0 p-4 bg-background border-t z-10">
        <div className="max-w-md mx-auto">
          <Button
            size="lg"
            className="w-full"
            variant={isRead ? "secondary" : "default"}
            onClick={onMarkAsRead}
            data-testid="button-mark-read"
          >
            {isRead ? "✓ " + tr.home.completed : tr.treeDetail.markAsRead}
          </Button>
        </div>
      </div>
    </div>
  );
}
