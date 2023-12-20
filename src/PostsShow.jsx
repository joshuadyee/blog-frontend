import axios from "axios"

export function PostsShow(props) {

  const updatePost = event => {
    event.preventDefault()
    const params = new FormData(event.target)
    props.onUpdatePost(props.post.id, params)
  }
  
  return (
    <>
    <div>
        <h2>Post</h2>
          <p><b>Title: </b>{props.post.title}</p>
          <p><b>Info: </b>{props.post.body}</p>
    </div>
      <form onSubmit={updatePost}>
        <p>Title: <input type="text" name="title" defaultValue={props.post.title} /></p>
        <p>Body: <input type="text" name="body" defaultValue={props.post.body} /></p>
        <p>Image: <input type="text" name="image" defaultValue={props.post.image} /></p>
        <p>User ID: <input type="text" name="user_id" defaultValue={props.post.user_id} /></p>
        <button>Update Post</button>
      </form>
    </>
  )
}