import { useState } from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Post from "./Post";
import { toast } from "react-toastify";

const PostComponent = () => {
  const [posts, setPosts] = useState([{
    id: 1,
    content: "hey there here is some awesome ui",
    user: "Tarun",
    time: new Date().toLocaleString(),
    comments: []
  }]);

  const [newPost, setNewPost] = useState("");
  const [showAllposts, setshowAllposts] = useState(false)

  const handlePost = () => {
    const trimmedPost = newPost.trim();
  
    if (trimmedPost.length < 3) {
      toast.warn("The story must be at least 3 characters long.");
      return;
    }
  
    if (trimmedPost.length > 250) {
      toast.warn("The story can't be longer than 250 characters.");
      return;
    }
  
    if (!trimmedPost) {
      toast.warn("The story can't be empty or whitespace only.");
      return;
    }

    const badWords = ["badword", "dumbass", "shit", "bitch", "ass"];

    if (badWords.some(word => trimmedPost.includes(word))) {
      toast.warn("Please avoid using inappropriate language!");
      return;
    }
  
    setPosts([
      ...posts,
      {
        id: posts.length + 1,
        content: trimmedPost,
        user: "Tarun",
        time: new Date().toLocaleString(),
        comments: []
      },
    ].reverse());
  
    setNewPost("");
  };
  

  const onEnterPress = (e) => {
    if (e.keyCode == 13 && e.shiftKey == false) {
      e.preventDefault();
      handlePost();
    }
  }

  return (
    <div className="p-4 bg-gray-100 md:w-[35%] w-full md:order-2 order-1 rounded-lg shadow-md ">
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
      {/* {posts.map((post) => (
        <Post post={post} posts={posts} key={post.id} setPosts={setPosts} />
      ))} */}

      {posts.slice(0, showAllposts ? posts.length : 2).map((post) => (
        <Post post={post} posts={posts} key={post.id} setPosts={setPosts}/>
      ))}

      {posts.length > 2 && (
        <div className="flex items-center justify-center">
          <button
          onClick={() => setshowAllposts(!showAllposts)}
          className="text-blue-500 text-lg mt-2 font-semibold"
        >
          {showAllposts ? "Show Less" : "Show More"}
        </button>
        </div>
      )}

    </div>
  );
};

export default PostComponent;
