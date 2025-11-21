import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { CheckCircle2, XCircle, ChevronRight } from "lucide-react";
import type { Question } from "@shared/schema";
import { trees } from "@/lib/treeData";
import { tr } from "@/lib/translations";

interface QuizProps {
  questions: Question[];
  onComplete: (score: number, totalQuestions: number) => void;
}

export function Quiz({ questions, onComplete }: QuizProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [answeredCorrectly, setAnsweredCorrectly] = useState<boolean[]>([]);
  const [showFeedback, setShowFeedback] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];
  const currentTree = trees.find(t => t.id === currentQuestion.treeId);
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  const handleAnswerSelect = (answerIndex: number) => {
    if (showFeedback) return;
    
    setSelectedAnswer(answerIndex);
    setShowFeedback(true);
    
    const isCorrect = answerIndex === currentQuestion.correctAnswer;
    setAnsweredCorrectly([...answeredCorrectly, isCorrect]);
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setShowFeedback(false);
    } else {
      const score = answeredCorrectly.filter(Boolean).length;
      onComplete(score, questions.length);
    }
  };

  const isCorrect = selectedAnswer === currentQuestion.correctAnswer;

  return (
    <div className="space-y-4 pb-20">
      <div className="space-y-2">
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">
            {tr.quiz.question} {currentQuestionIndex + 1} {tr.quiz.of} {questions.length}
          </span>
          <span className="font-semibold text-xs" data-testid="text-quiz-title">{tr.quiz.finalTest}</span>
        </div>
        <Progress value={progress} className="h-2" data-testid="progress-quiz" />
      </div>

      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base leading-snug text-center" data-testid={`text-question-${currentQuestionIndex}`}>
            {currentQuestion.question}
          </CardTitle>
        </CardHeader>
        <CardContent className="pb-3">
          {currentTree && (
            <div className="mb-4 rounded-lg overflow-hidden">
              <img 
                src={currentTree.imageUrl} 
                alt="Ağaç görseli"
                className="w-full h-64 object-cover"
                data-testid="img-quiz-tree"
              />
            </div>
          )}
          <div className="space-y-2">
            {currentQuestion.options.map((option, index) => {
              const isSelected = selectedAnswer === index;
              const isCorrectAnswer = index === currentQuestion.correctAnswer;
              
              let variant: "outline" | "default" | "secondary" = "outline";
              let className = "w-full justify-start text-left h-auto py-3 px-4 text-sm";
              
              if (showFeedback) {
                if (isCorrectAnswer) {
                  variant = "default";
                  className += " bg-primary/20 border-primary text-primary-foreground";
                } else if (isSelected && !isCorrect) {
                  variant = "secondary";
                  className += " bg-destructive/20 border-destructive text-destructive";
                }
              } else if (isSelected) {
                variant = "secondary";
              }

              return (
                <Button
                  key={index}
                  variant={variant}
                  className={className}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={showFeedback}
                  data-testid={`button-answer-${index}`}
                >
                  <span className="flex items-center gap-2 w-full">
                    <span className="flex-1 text-left">{option}</span>
                    {showFeedback && isCorrectAnswer && (
                      <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                    )}
                    {showFeedback && isSelected && !isCorrect && (
                      <XCircle className="w-4 h-4 flex-shrink-0" />
                    )}
                  </span>
                </Button>
              );
            })}
          </div>
        </CardContent>
        {showFeedback && (
          <CardFooter className="flex-col gap-3 pb-4">
            <div className={`w-full p-3 rounded-md text-sm ${isCorrect ? 'bg-primary/10 text-primary' : 'bg-destructive/10 text-destructive'}`}>
              <p className="font-semibold" data-testid="text-feedback">
                {isCorrect ? tr.quiz.correct : tr.quiz.incorrect}
              </p>
            </div>
          </CardFooter>
        )}
      </Card>

      {showFeedback && (
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-background border-t">
          <div className="max-w-md mx-auto">
            <Button 
              onClick={handleNext} 
              className="w-full"
              size="lg"
              data-testid="button-next-question"
            >
              {currentQuestionIndex < questions.length - 1 ? (
                <>
                  {tr.quiz.nextQuestion}
                  <ChevronRight className="w-4 h-4 ml-2" />
                </>
              ) : (
                tr.quiz.viewResults
              )}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
