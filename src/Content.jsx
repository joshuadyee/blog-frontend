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

  useEffect(handleIndexPosts, [])

  return (
    <div>
      <PostsNew />
      <PostsIndex posts={posts} />
      {/* <button onClick={handleIndexPosts}>All Posts Here</button> */}
      <Modal show={false}>
        <p>TEST</p>
      </Modal>
    </div>
  );
}
