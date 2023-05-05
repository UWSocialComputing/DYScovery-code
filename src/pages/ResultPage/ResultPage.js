import * as React from "react";
import Title from "../../components/Title/Title";
import Posts from "../../components/Post/Posts";

function ResultPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-8">
      <Title />
      <Posts />
    </div>
  );
}

export default ResultPage;
