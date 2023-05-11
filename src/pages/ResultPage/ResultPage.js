import * as React from "react";
import Title from "../../components/Title/Title";
import Posts from "../../components/Post/Posts";
import Filter from "../../components/Filter/Filter";
import { Link } from "react-router-dom";

function ResultPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-8">
      <Title />
      <div className="grid place-items-center">
        <Link to="/DYScovery-code/postnew">
          <button className="mt-2 px-6 py-1 bg-cyan-500 hover:bg-cyan-700 text-white font-bold rounded-lg">
            Make a New Post
          </button>
        </Link>
      </div>

      <div className="flex space-x-6">
        <Filter />
        <Posts />
      </div>
    </div>
  );
}

export default ResultPage;
