import { useState } from "react";
import { useLocation } from "wouter";
import { Header } from "@/components/Header";
import { Quiz } from "@/components/Quiz";
import { QuizResults } from "@/components/QuizResults";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { trees, questions } from "@/lib/treeData";
import type { QuizResult } from "@shared/schema";
import { tr } from "@/lib/translations";

type ViewMode = "quiz" | "results";

export default function QuizPage() {
  const [, setLocation] = useLocation();
  const [viewMode, setViewMode] = useState<ViewMode>("quiz");
  const [quizResult, setQuizResult] = useState<QuizResult | null>(null);

  const handleQuizComplete = (score: number, totalQuestions: number) => {
    const passed = (score / totalQuestions) >= 0.7;
    const result: QuizResult = {
      treeId: 0,
      score,
      totalQuestions,
      passed,
    };
    setQuizResult(result);
    setViewMode("results");
  };

  const handleRetryQuiz = () => {
    setViewMode("quiz");
    setQuizResult(null);
  };

  const handleBackHome = () => {
    setLocation("/");
  };

  const readTrees = (() => {
    const saved = localStorage.getItem("readTrees");
    return saved ? JSON.parse(saved) : [];
  })();

  return (
    <div className="min-h-screen bg-background">
      <Header completedTrees={readTrees.length} totalTrees={trees.length} />
      
      <div className="max-w-md mx-auto px-4 py-4">
        {viewMode === "quiz" && (
          <>
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
            <Quiz
              questions={questions}
              onComplete={handleQuizComplete}
            />
          </>
        )}

        {viewMode === "results" && quizResult && (
          <QuizResults
            result={quizResult}
            onRetry={handleRetryQuiz}
            onBackHome={handleBackHome}
          />
        )}
      </div>
    </div>
  );
}
