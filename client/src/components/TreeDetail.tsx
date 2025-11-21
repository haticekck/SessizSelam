import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Volume2, VolumeX } from "lucide-react";
import type { Tree } from "@shared/schema";
import { tr } from "@/lib/translations";
import { useState, useRef } from "react";

interface TreeDetailProps {
  tree: Tree;
  onMarkAsRead: () => void;
  isRead: boolean;
}

//let audio: HTMLAudioElement | null = null;

export function TreeDetail({ tree, onMarkAsRead, isRead }: TreeDetailProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handlePlayPauseAudio = () => {
    if (!tree.audioUrl) {
      console.log("Ses dosyası bulunamadı.");
      return;
    }

    if (isPlaying) {
      // 🔊 Durdurma işlemi
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0; // Başa sar (isteğe bağlı)
      }
      setIsPlaying(false);
    } else {
      // ▶️ Çalma işlemi
      if (!audioRef.current) {
        // Audio nesnesi henüz oluşturulmadıysa, oluştur.
        audioRef.current = new Audio(tree.audioUrl);
        
        // Ses bittiğinde durumu sıfırla
        audioRef.current.onended = () => {
          setIsPlaying(false);
        };
      }
      
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((error) => {
        console.error("Ses çalınırken bir hata oluştu:", error);
        alert("Ses çalınamadı. Tarayıcı kısıtlamalarını kontrol edin.");
        setIsPlaying(false); // Başlatılamazsa state'i sıfırla
      });
    }
  };

  const hasAudio = !!tree.audioUrl;

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
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold">Ağaç Hakkında</h2>
              {/* Düğmeyi güncelle: */}
              {hasAudio && ( // Sadece ses varsa düğmeyi göster
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handlePlayPauseAudio} // Yeni işleyiciyi kullan
                  data-testid="button-play-audio"
                >
                  {isPlaying ? (
                    <>
                      <VolumeX className="w-4 h-4 mr-2" />
                      Durdur
                    </>
                  ) : (
                    <>
                      <Volume2 className="w-4 h-4 mr-2" />
                      Dinle
                    </>
                  )}
                </Button>
              )}
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
