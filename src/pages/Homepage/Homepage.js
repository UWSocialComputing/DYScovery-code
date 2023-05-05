import "./Homepage.css";
import * as React from "react";
import Title from "../../components/Title/title";
import SearchBar from "../../components/SearchBar/searchBar";
import Posts from "../../components/Post/posts";

function Homepage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8">
      <Title />
      <SearchBar />
      <Posts />
    </main>
  );
}

export default Homepage;
