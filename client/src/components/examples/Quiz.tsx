import { Quiz } from "../Quiz";

export default function QuizExample() {
  const mockQuestions = [
    {
      id: 1,
      treeId: 1,
      question: "Bu hangi ağaç?",
      options: ["Salkım Söğüt", "Kara Kavak", "Akasya", "Huş Ağacı"],
      correctAnswer: 0,
    },
    {
      id: 2,
      treeId: 2,
      question: "Bu hangi ağaç?",
      options: ["At Kestanesi", "Meşe", "Çınar Yapraklı Akçaağaç", "Elma"],
      correctAnswer: 1,
    },
  ];

  return (
    <div className="max-w-md mx-auto p-4">
      <Quiz
        questions={mockQuestions}
        onComplete={(score, total) => console.log(`Puan: ${score}/${total}`)}
      />
    </div>
  );
}
