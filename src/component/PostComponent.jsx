import { useState } from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Post from "./Post";

const PostComponent = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState("");

  const handlePost = () => {
    if (newPost.trim()) {
      setPosts([
        ...posts,
        {
          id: posts.length + 1,
          content: newPost,
          user: "Tarun",
          time: new Date().toLocaleString(),
        },
      ].reverse());
      setNewPost("");
    }
  };

  const onEnterPress = (e) => {
    if (e.keyCode == 13 && e.shiftKey == false) {
      e.preventDefault();
      handlePost();
    }
  }

  return (
    <div className="p-4 bg-gray-100 w-[32%] rounded-lg shadow-md ">

      {/* Post Inputs */}

      <div className="flex items-center space-x-2">
        <AccountCircleIcon />
        <input
          type="text"
          placeholder="write some text tk"
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
          onKeyDown={onEnterPress}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
        <button
          onClick={handlePost}
          className="bg-red-500 text-white px-4 py-2 rounded-lg"
        >
          Post
        </button>
      </div>

      {/* Posts Lists */}
      {posts.map((post) => (
        <Post post={post} key={post.id} setPosts={setPosts}/>
      ))}

    </div>
  );
};

export default PostComponent;
