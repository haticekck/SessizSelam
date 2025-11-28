import { Leaf, Menu } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { tr } from "@/lib/translations";

interface HeaderProps {
  completedTrees: number;
  totalTrees: number;
}

export function Header({ completedTrees, totalTrees }: HeaderProps) {
  const progress = (completedTrees / totalTrees) * 100;

  return (
    <header className="border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60 sticky top-0 z-50 shadow-sm">
      <div className="max-w-md mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4 mb-3">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Leaf className="w-5 h-5 text-primary" data-testid="icon-logo" />
            </div>
            <div>
              <h1 className="text-xl font-bold leading-tight whitespace-pre-line" data-testid="text-app-name">
                {tr.app.name}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
