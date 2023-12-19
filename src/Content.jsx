import { PostsIndex } from './PostsIndex'
import { PostsNew } from './PostsNew'
import { PostsShow } from './PostsShow'
import { Modal } from './Modal'
import axios from "axios"
import { useState, useEffect } from 'react'


export function Content() {
  const [posts, setPosts] = useState([])

  const handleIndexPosts = () => {
    axios.get("http://localhost:3000/posts.json").then(response => {
      setPosts(response.data)
    })
  }

  const [isPostsShowVisible, setIsPostsShowVisible] = useState(false)

  const [currentPost, setCurrentPost] = useState({})

  const handleShowPosts = (post) => {
    setIsPostsShowVisible(true)
    setCurrentPost(post)
  } 

  const handleClose = () => {
    setIsPostsShowVisible(false)
  }


  useEffect(handleIndexPosts, [])

  return (
    <div>
      <PostsNew />
      <PostsIndex posts={posts} onShowPosts={handleShowPosts}/>
      {/* <button onClick={handleIndexPosts}>All Posts Here</button> */}
      <Modal show={isPostsShowVisible} onClose={handleClose}>
        <PostsShow post={currentPost} />
      </Modal>
    </div>
  );
}
