import axios from "axios";

export function PostsNew(props) {

  const handleSubmitPost = (event) => {
    event.preventDefault()
    const params = new FormData(event.target)
    props.onCreatePost(params)
    event.target.reset()
  }

  return (
    <div>
      <h1>New Post</h1>
        <form onSubmit={handleSubmitPost}>
          <p>Title: <input name="title" type="text" /></p>
          <p>Body: <input name="body" type="text" /></p>
          <p>Image: <input name="image_url" type="text" /></p>
          <p>User ID: <input name="user_id" type="number" /></p>
          <button type="submit">Make New Post Here</button>
        </form>
    </div>
  )
}
