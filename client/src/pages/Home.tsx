import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TreeCard } from "@/components/TreeCard";
import { Button } from "@/components/ui/button";
import { trees } from "@/lib/treeData";
import { tr } from "@/lib/translations";
import { VideoPlayer } from "@/components/VideoPlayer";

export default function Home() {
  const [, setLocation] = useLocation();
  const [readTrees, setReadTrees] = useState<number[]>(() => {
    const saved = localStorage.getItem("readTrees");
    return saved ? JSON.parse(saved) : [];
  });

  const [isVideoWatched, setIsVideoWatched] = useState<boolean>(() => {
    const saved = localStorage.getItem("isVideoWatched");
    return saved ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    // Okunan ağaçları kaydetme
    localStorage.setItem("readTrees", JSON.stringify(readTrees));
  }, [readTrees]);

  useEffect(() => {
    // Video izlenme durumunu kaydetme
    localStorage.setItem("isVideoWatched", JSON.stringify(isVideoWatched));
  }, [isVideoWatched]);

  const allTreesRead = readTrees.length === trees.length;
  const canStartTest = allTreesRead && isVideoWatched;

  const handleTreeSelect = (treeId: number) => {
    setLocation(`/tree/${treeId}`);
  };

  const handleStartTest = () => {
    setLocation("/quiz");
  };

  const handleVideoEnd = () => {
    setIsVideoWatched(true);
  };

  const INTRO_VIDEO_URL = "/videos/intro.mp4";

  return (
    <div className="min-h-screen bg-background">
      <Header completedTrees={readTrees.length} totalTrees={trees.length} />
      <Hero />
      
      <div className="max-w-md mx-auto px-4 py-6">
        <h2 className="text-xl font-bold mb-4" data-testid="text-trees-heading">
          {tr.home.exploreHeading}
        </h2>
        <VideoPlayer 
          videoUrl={INTRO_VIDEO_URL} 
          onVideoEnd={handleVideoEnd}
        />

        <div className="max-w-md mx-auto px-2 py-6">
          <h1 className="text-xl font-bold mb-4">
            Ağaçları daha yakından incelemek için:
          </h1>
        </div>
        
        <div className="grid grid-cols-1 gap-4 mb-6">
          {trees.map((tree) => (
            <TreeCard
              key={tree.id}
              tree={tree}
              completed={readTrees.includes(tree.id)}
              onSelect={handleTreeSelect}
            />
          ))}
        </div>

        {canStartTest && (
          <div className="sticky bottom-4 z-10">
            <Button 
              size="lg"
              className="w-full shadow-lg"
              onClick={handleStartTest}
              data-testid="button-start-final-test"
            >
              {tr.home.startTest}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
