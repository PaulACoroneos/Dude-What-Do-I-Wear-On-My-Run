import * as React from "react";

const ClothingArticle: React.FC<Record<string, string>> = ({ name, desc }) => (
  <div className="bg-color-400 flex flex-initial">
    <span className="border-2 py-2 px-4 rounded text-2xl font-bold flex justify-center items-center bg-blue-200 shadow border-blue-200">
      {name}
    </span>
    <p className="border-2 mx-2 p-2 rounded text-xl bg-blue-200 shadow border-blue-200 flex justify-center items-center">
      {desc}
    </p>
  </div>
);

export default ClothingArticle;
