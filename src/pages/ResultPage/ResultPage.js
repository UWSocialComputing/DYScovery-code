import * as React from "react";
import Title from "../../components/Title/Title";
import Posts from "../../components/Post/Posts";

function Homepage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8">
      <Title />
      <Posts />
      <Posts />
    </main>
  );
}

export default Homepage;
