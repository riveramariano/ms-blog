import React from "react";
import PostCreate from "./components/PostCreate";
import PostList from "./components/PostList";

const App = () => {
  return (
    <div className="container">
      <h1>Create Post</h1>
      <PostCreate />
      <hr />
      <h1>Posts</h1>
      <PostList />
    </div>
  );
};

export default App;
