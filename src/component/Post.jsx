import React, { useState } from 'react'
import SettingsIcon from '@mui/icons-material/Settings';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { toast } from "react-toastify";

const Post = ({ post, setPosts }) => {
    const [showEdit, setshowEdit] = useState(false);

    const copyContent = async () => {
        try {
            await navigator.clipboard.writeText(item.post);
            toast.success("Copied to Clipboard");
            // setShowEdit(false);
        } catch (err) {
            console.error('Failed to copy: ', err);
        }
    }


    return (
        <>
            <div className="bg-white mt-4 p-4 rounded-lg shadow-md smooth-entry">
                {/* Post Header */}
                <div className="flex justify-between">
                    <div className="flex items-center space-x-2">
                        <AccountCircleIcon />
                        <div>
                            <p className="text-sm font-semibold">{post.user}</p>
                            <p className="text-xs text-gray-500">Posted on {post.time}</p>
                        </div>
                    </div>
                    <div onClick={()=>setshowEdit(!showEdit)}><SettingsIcon /></div>
                </div>

                {showEdit && (
                    <div className="absolute bg-white shadow-custom rounded text-left min-w-[150px] top-6 right-5">
                        <div>

                            <button
                                onClick={() => {
                                    toast.success("post deleted");
                                    setPosts(
                                        [
                                            ...post.slice(0, post.indexOf(item)),
                                            ...post.slice(post.indexOf(item) + 1)
                                        ]
                                    )
                                    post.splice(post.indexOf(item), 1)
                                    // localStorage.setItem("Posts", JSON.stringify(postitems))
                                    setshowEdit(false);
                                }}
                                className="px-2.5 w-full py-1 text-left hover:bg-gray-200">
                                Delete
                            </button>
                            <button
                                onClick={copyContent}
                                className="px-2.5 w-full py-1 text-left hover:bg-gray-200">
                                Copy
                            </button>
                        </div>
                    </div>
                )}

                {/* Post Content */}
                <p className="mt-2 text-sm text-gray-700">{post.content}</p>

                {/* Post Footer */}
                <div className="flex items-center justify-between mt-4 text-xs text-gray-500">
                    <div className="flex items-center space-x-1">
                        <FavoriteIcon />
                        <span>0 Favourites</span>
                    </div>
                    <span>0 Comments</span>
                </div>

                {/* Comment Input */}
                <div className="flex items-center mt-4 space-x-2">
                    <AccountCircleIcon />
                    <input
                        type="text"
                        placeholder="Write a comment..."
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                    />
                    <button className="bg-red-500 text-white px-4 py-2 rounded-lg">
                        Post
                    </button>
                </div>
            </div></>
    )
}

export default Post