import React from "react";
import ResearchCard from "./ResearchCard";

const Research = () => {
  const data = [
    {
      title: "Evaluating total addressing market and growth trajectory",
      researchType: "Market Research",
      keyPoints: ["Market size", "Growth trajectory", "Competitive landscape"],
    },
    {
      title: "Matching the right product to the right customer",
      researchType: "Market Research",
      keyPoints: ["Market size", "Growth trajectory", "Competitive landscape"],
    },
    {
      title: "Identifying the right product for the right customer",
      researchType: "Market Research",
      keyPoints: ["Market size", "Growth trajectory", "Competitive landscape"],
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      {data.map((chat, index) => (
        <ResearchCard
          key={index}
          title={chat.title}
          researchType={chat.researchType}
          keyPoints={chat.keyPoints}
          showKeyConsiderations={index === data.length - 1}
        />
      ))}
    </div>
  );
};

export default Research;
