import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trophy, RotateCcw, Home, CheckCircle2, XCircle } from "lucide-react";
import type { QuizResult } from "@shared/schema";
import { tr } from "@/lib/translations";

interface QuizResultsProps {
  result: QuizResult;
  onRetry: () => void;
  onBackHome: () => void;
}

export function QuizResults({ result, onRetry, onBackHome }: QuizResultsProps) {
  const percentage = Math.round((result.score / result.totalQuestions) * 100);
  const passingScore = 70;
  
  return (
    <div className="space-y-6 text-center pb-20">
      <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full ${result.passed ? 'bg-primary/20' : 'bg-muted'} mb-4`}>
        {result.passed ? (
          <Trophy className="w-10 h-10 text-primary" data-testid="icon-trophy" />
        ) : (
          <RotateCcw className="w-10 h-10 text-muted-foreground" />
        )}
      </div>

      <div>
        <h1 className="text-3xl font-bold mb-2" data-testid="text-results-title">
          {result.passed ? tr.results.congratulations : tr.results.keepLearning}
        </h1>
        <p className="text-base text-muted-foreground">
          {tr.results.quizCompleted}
        </p>
      </div>

      <Card>
        <CardContent className="p-6">
          <div className="space-y-4">
            <div>
              <div className="text-5xl font-bold text-primary mb-2" data-testid="text-percentage">
                {percentage}%
              </div>
              <p className="text-base text-muted-foreground">
                {result.totalQuestions} sorudan {result.score} doğru
              </p>
            </div>

            <div className="flex items-center justify-center gap-6 py-3 border-y">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span className="text-sm" data-testid="text-correct-count">
                  {result.score} {tr.results.correct}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <XCircle className="w-5 h-5 text-destructive" />
                <span className="text-sm" data-testid="text-incorrect-count">
                  {result.totalQuestions - result.score} {tr.results.incorrect}
                </span>
              </div>
            </div>

            {result.passed ? (
              <div className="bg-primary/10 text-primary p-3 rounded-md">
                <p className="font-semibold text-sm" data-testid="text-pass-message">
                  {tr.results.passMessage}
                </p>
              </div>
            ) : (
              <div className="bg-muted p-3 rounded-md">
                <p className="text-muted-foreground text-sm" data-testid="text-retry-message">
                  {tr.results.retryMessage}
                </p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      <div className="fixed bottom-0 left-0 right-0 p-4 bg-background border-t">
        <div className="max-w-md mx-auto space-y-2">
          <Button 
            variant="default"
            className="w-full"
            onClick={onBackHome}
            data-testid="button-back-home"
          >
            <Home className="w-4 h-4 mr-2" />
            {tr.results.backHome}
          </Button>
          <Button 
            variant="outline" 
            className="w-full"
            onClick={onRetry}
            data-testid="button-retry-quiz"
          >
            <RotateCcw className="w-4 h-4 mr-2" />
            {tr.results.retryQuiz}
          </Button>
        </div>
      </div>
    </div>
  );
}
