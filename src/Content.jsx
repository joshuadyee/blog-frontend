import { PostsIndex } from './PostsIndex'
import { PostsNew } from './PostsNew'
import { PostsShow } from './PostsShow'
import { Modal } from './Modal'
import axios from "axios"
import { useState, useEffect } from 'react'


export function Content() {
  const [posts, setPosts] = useState([])

  const [isPostsShowVisible, setIsPostsShowVisible] = useState(false)

  const [currentPost, setCurrentPost] = useState({})

  const handleIndexPosts = () => {
    axios.get("http://localhost:3000/posts.json").then(response => {
      setPosts(response.data)
    })
  }

  const handleShowPosts = (post) => {
    setIsPostsShowVisible(true)
    setCurrentPost(post)
  } 

  const handleClose = () => {
    setIsPostsShowVisible(false)
  }

  const handleCreatePost = (params) => {
    axios.post("http://localhost:3000/posts.json", params).then(response => {
      setPosts([...posts, response.data])
    })
  }

  const handleUpdatePost = (id, params) => {
    axios.patch("http://localhost:3000/posts/" + id + ".json", params).then(response => {
      console.log(response.data)
      setPosts(
        posts.map(post => {
          if (post.id === response.data.id) {
            return response.data
          } else {
            return post
          }
        })
      )
      handleClose()
  })
}

  useEffect(handleIndexPosts, [])

  return (
    <div>
      <PostsNew onCreatePost={handleCreatePost}/>
      <PostsIndex posts={posts} onShowPosts={handleShowPosts}/>
      {/* <button onClick={handleIndexPosts}>All Posts Here</button> */}
      <Modal show={isPostsShowVisible} onClose={handleClose}>
        <PostsShow post={currentPost} onUpdatePost={handleUpdatePost}/>
      </Modal>
    </div>
  );
}
