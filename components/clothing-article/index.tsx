import * as React from "react";

type ClothingArticleProps = {
  name: string;
  desc: string;
};

const ClothingArticle: React.FC<ClothingArticleProps> = ({ name, desc }) => (
  <div className="bg-color-400 flex w-full justify-between">
    <span className="border-b-2 py-2 px-4 text-xl font-bold flex items-center bg-blue-200 shadow w-4/12 border-blue-300">
      {name}
    </span>
    <p className="border-b-2 p-2 text-lg bg-blue-200 shadow flex items-center flex-initial w-8/12 text-left border-blue-300">
      {desc}
    </p>
  </div>
);

export default ClothingArticle;
