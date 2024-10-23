import React, { useState } from 'react';
import SettingsIcon from '@mui/icons-material/Settings';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { toast } from "react-toastify";

const Post = ({ post, posts, setPosts }) => {
    const [showEdit, setShowEdit] = useState(false);
    const [newComment, setNewComment] = useState("");
    const [like, setlike] = useState(false)
    const [comments, setComments] = useState(post.comments || []);
    const [showAllComments, setShowAllComments] = useState(false);

    const copyContent = async () => {
        try {
            await navigator.clipboard.writeText(post.content);
            toast.success("Copied to Clipboard");
        } catch (err) {
            console.error('Failed to copy: ', err);
        }
    };

    const deletePost = () => {

        if (posts.length) {
            const updatedPosts = posts.filter((p) => p.id !== post.id);
            // console.log(updatedPosts)
            setPosts(updatedPosts);
            // console.log(posts, "updated post", updatedPosts, "original post", post)
            toast.success("Post deleted");
            setShowEdit(false);
        } else {
            toast.error("Failed to delete post.");
        }
    };

    const addComment = () => {
        if (newComment.trim()) {
            setComments([newComment, ...comments]);
            setNewComment("");
        }
    };

    const onEnterPress = (e) => {
        if (e.keyCode == 13 && e.shiftKey == false) {
            e.preventDefault();
            addComment();
        }
    }

    return (
        <>
            <div className="bg-white mt-4 p-4 rounded-lg shadow-md smooth-entry relative">
                {/* Post Header */}
                <div className="flex justify-between">
                    <div className="flex items-center space-x-2">
                        <AccountCircleIcon />
                        <div>
                            <p className="text-sm font-semibold">{post.user}</p>
                            <p className="text-xs text-gray-500">Posted on {post.time}</p>
                        </div>
                    </div>
                    <div className={`${showEdit ? 'rotate-180' : 'rotate-0'} transition-all duration-300 absolute right-5 top-2 text-black cursor-pointer`} onClick={() => setShowEdit(!showEdit)}>
                        <SettingsIcon />
                    </div>
                </div>

                {showEdit && (
                    <div className="absolute smooth-entry bg-white shadow-lg rounded-md text-left min-w-[150px] -top-16 -right-10 z-10">
                        <div>
                            <button
                                onClick={deletePost}
                                className="px-4 py-2 w-full text-left hover:bg-blue-200 rounded-t-md"
                            >
                                Delete
                            </button>
                            <button
                                onClick={copyContent}
                                className="px-4 py-2 w-full text-left hover:bg-blue-200 rounded-b-md"
                            >
                                Copy
                            </button>
                        </div>
                    </div>
                )}


                <p className="mt-2 text-sm text-gray-700">{post.content}</p>


                <div className="flex items-center justify-between mt-4 text-xs text-gray-500">
                    <div
                        onClick={() => setlike(!like)}
                        className={`${like ? "text-red-500" : "text-grey-500"} cursor-pointer flex items-center space-x-1 `}>
                        <FavoriteIcon />
                        <span className='text-gray-700 cursor-pointer'>Like</span>
                    </div>
                    <span>{comments.length} Comments</span>
                </div>

                <div className="mt-4">
                    {comments.slice(0, showAllComments ? comments.length : 3).map((comment, index) => (
                        <div key={index} className="flex items-center text-sm text-gray-600 my-1">
                            <AccountCircleIcon className="mr-2" />
                            {comment}
                        </div>
                    ))}

                    {comments.length > 3 && (
                        <button
                            onClick={() => setShowAllComments(!showAllComments)}
                            className="text-blue-500 text-xs mt-2"
                        >
                            {showAllComments ? "Show Less" : "Show More"}
                        </button>
                    )}
                </div>


                <div className="flex items-center mt-4 space-x-2">
                    <AccountCircleIcon />
                    <input
                        type="text"
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        placeholder="Write a comment..."
                        onKeyDown={onEnterPress}
                        // original author tarun kushwaha
                        className="w-full px-2 py-1 border rounded-lg focus:outline-none"
                    />
                    <button
                        onClick={addComment}
                        className="bg-red-500 hover:bg-red-600 transition-colors duration-300 text-white px-2 py-1 rounded-lg"
                    >
                        Post
                    </button>
                </div>
            </div>
        </>
    );
};

export default Post;

