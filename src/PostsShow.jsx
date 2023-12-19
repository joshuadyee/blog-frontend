export function PostsShow(props) {
  return (
    <div>
      <p>Posts Show</p>
      <p><b>Title: </b>{props.post.title}</p>
      <p><b>Info: </b>{props.post.body}</p>
    </div>
  )
}