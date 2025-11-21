import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ChevronRight } from "lucide-react";
import type { Tree } from "@shared/schema";
import { tr } from "@/lib/translations";

interface TreeCardProps {
  tree: Tree;
  completed?: boolean;
  onSelect: (treeId: number) => void;
}

export function TreeCard({ tree, completed = false, onSelect }: TreeCardProps) {
  return (
    <Card 
      className="hover-elevate active-elevate-2 cursor-pointer overflow-hidden transition-all" 
      onClick={() => onSelect(tree.id)}
      data-testid={`card-tree-${tree.id}`}
    >
      <div className="aspect-[4/3] overflow-hidden bg-muted">
        <img 
          src={tree.imageUrl} 
          alt={tree.name}
          className="w-full h-full object-cover"
        />
      </div>
      <CardContent className="p-4">
        <div className="flex items-start justify-between gap-2 mb-1">
          <h3 className="text-lg font-bold" data-testid={`text-tree-name-${tree.id}`}>
            {tree.name}
          </h3>
          {completed && (
            <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" data-testid={`icon-completed-${tree.id}`} />
          )}
        </div>
        <p className="text-xs text-muted-foreground italic mb-2" data-testid={`text-scientific-${tree.id}`}>
          {tree.scientificName}
        </p>
        <p className="text-sm text-foreground/80 line-clamp-2" data-testid={`text-description-${tree.id}`}>
          {tree.description}
        </p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button 
          variant={completed ? "secondary" : "default"} 
          className="w-full"
          size="sm"
          onClick={(e) => {
            e.stopPropagation();
            onSelect(tree.id);
          }}
          data-testid={`button-select-tree-${tree.id}`}
        >
          {completed ? tr.home.review : tr.home.startLearning}
          <ChevronRight className="w-4 h-4 ml-1" />
        </Button>
      </CardFooter>
    </Card>
  );
}
