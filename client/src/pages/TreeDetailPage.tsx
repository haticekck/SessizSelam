import { useState, useEffect } from "react";
import { useLocation, useRoute } from "wouter";
import { Header } from "@/components/Header";
import { TreeDetail } from "@/components/TreeDetail";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { trees } from "@/lib/treeData";
import { tr } from "@/lib/translations";

export default function TreeDetailPage() {
  const [, params] = useRoute("/tree/:id");
  const [, setLocation] = useLocation();
  const [readTrees, setReadTrees] = useState<number[]>(() => {
    const saved = localStorage.getItem("readTrees");
    return saved ? JSON.parse(saved) : [];
  });

  const treeId = params?.id ? parseInt(params.id) : null;
  const tree = trees.find((t) => t.id === treeId);
  const isRead = treeId ? readTrees.includes(treeId) : false;

  useEffect(() => {
    localStorage.setItem("readTrees", JSON.stringify(readTrees));
  }, [readTrees]);

  if (!tree) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Ağaç bulunamadı</h1>
          <Button onClick={() => setLocation("/")}>Ana Sayfaya Dön</Button>
        </div>
      </div>
    );
  }

  const handleMarkAsRead = () => {
    if (treeId && !readTrees.includes(treeId)) {
      setReadTrees([...readTrees, treeId]);
    }
  };

  const handleBackHome = () => {
    setLocation("/");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header completedTrees={readTrees.length} totalTrees={trees.length} />
      
      <div className="max-w-md mx-auto px-4 py-4">
        <Button
          variant="ghost"
          onClick={handleBackHome}
          className="mb-4"
          size="sm"
          data-testid="button-back-home"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          {tr.treeDetail.backToTrees}
        </Button>
        
        <TreeDetail 
          tree={tree} 
          onMarkAsRead={handleMarkAsRead}
          isRead={isRead}
        />
      </div>
    </div>
  );
}
