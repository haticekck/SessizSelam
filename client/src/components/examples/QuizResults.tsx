import { QuizResults } from "../QuizResults";

export default function QuizResultsExample() {
  const mockResult = {
    treeId: 0,
    score: 25,
    totalQuestions: 36,
    passed: false,
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <QuizResults
        result={mockResult}
        onRetry={() => console.log("Retry quiz")}
        onBackHome={() => console.log("Back home")}
      />
    </div>
  );
}
