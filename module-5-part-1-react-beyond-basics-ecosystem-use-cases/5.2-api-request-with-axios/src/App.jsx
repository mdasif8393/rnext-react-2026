import { useState } from "react";
import "./App.css";
import initialPosts from "./data/db";
import Posts from "../components/Posts";
import AddPost from "../components/AddPost";
import EditPost from "../components/EditPost";

function App() {
  const [posts, setPosts] = useState(initialPosts);
  const [post, setPost] = useState(null); // post I am editing

  const handleAddPost = async (newPost) => {
    const id = posts.length ? Number(posts[posts.length - 1].id) + 1 : 1;

    setPosts([
      ...posts,
      {
        id,
        ...newPost,
      },
    ]);
  };

  const handleDeletePost = async (postId) => {
    if (confirm("Are you sure you want to delete the post?")) {
      const newPosts = posts.filter((post) => post.id !== postId);
      setPosts(newPosts);
    } else {
      console.log("You chose not to delete the post!");
    }
  };

  const handleEditPost = async (updatedPost) => {
    const updatedPosts = posts.map((post) =>
      post.id === updatedPost.id ? updatedPost : post,
    );

    setPosts(updatedPosts);
  };

  return (
    <>
      <h1>API Request with Axios</h1>
      <hr />

      <div>
        <Posts
          posts={posts}
          onDeletePost={handleDeletePost}
          onEditClick={setPost}
        />

        <hr />

        {!post ? (
          <AddPost onAddPost={handleAddPost} />
        ) : (
          <EditPost post={post} onEditPost={handleEditPost} />
        )}
      </div>
    </>
  );
}

export default App;
