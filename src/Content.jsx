import { PostsIndex } from './PostsIndex'
import { PostsNew } from './PostsNew'
import axios from "axios"
import { useState, useEffect } from 'react'
import { Modal } from './Modal'


export function Content() {
  const [posts, setPosts] = useState([])

  const handleIndexPosts = () => {
    axios.get("http://localhost:3000/posts.json").then(response => {
      console.log(response.data)
      setPosts(response.data)
    })
  }

  const [isPostsShowVisible, setIsPostsShowVisible] = useState(false)

  const handleShowPosts = () => {
    setIsPostsShowVisible(true)
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
        <p>TEST</p>
      </Modal>
    </div>
  );
}
