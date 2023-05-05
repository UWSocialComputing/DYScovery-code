import * as React from "react";
import Title from "../../components/Title/Title";
import EventSearchBar from "../../components/EventSearchBar/EventSearchBar";
import Posts from "../../components/Post/Posts";

function Homepage() {
  return (
    <div className="min-h-screen mx-32 py-3 flex flex-col justify-between">
      <Title showTag={true} />
      <EventSearchBar />
      <div className="self-start text-xl font-semibold">Explore...</div>
      <Posts />
    </div>
  );
}

export default Homepage;
