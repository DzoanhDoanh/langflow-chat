import React from "react";

interface SuggestedQuestionsProps {
  questions: string[];
  onQuestionClick: (question: string) => void;
}

const questionColors = [
  "#3b82f6", // blue
  "#ef4444", // red
  "#22c55e", // green
  "#f97316", // orange
  "#8b5cf6", // purple
];

export default function SuggestedQuestions({
  questions,
  onQuestionClick,
}: SuggestedQuestionsProps) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        paddingLeft: "44px",
        paddingRight: "16px",
        marginTop: "12px",
        marginBottom: "12px",
      }}
    >
      {questions.map((question, index) => (
        <button
          key={index}
          onClick={() => onQuestionClick(question)}
          style={{
            backgroundColor: questionColors[index % questionColors.length],
            color: "#ffffff",
            border: "none",
            borderRadius: "6px",
            padding: "8px 12px",
            textAlign: "left",
            cursor: "pointer",
            fontSize: "13px",
            fontWeight: "400",
            lineHeight: "1.4",
            transition: "all 0.2s ease",
            boxShadow: "none",
            maxWidth: "fit-content",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-1px)";
            e.currentTarget.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.15)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          {question}
        </button>
      ))}
    </div>
  );
}
