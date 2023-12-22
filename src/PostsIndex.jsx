export function PostsIndex(props) {
  console.log(props.posts);

  return (
    <div id="posts-index">
      <h1>All Blog Posts</h1>
      <div className="row">
        {props.posts.map(post => (
          <div key={post.id} className="col-sm-6 mb-3 mb-sm-0">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.body}</p>
                <img src={post.image} className="card-img-bottom" alt="..."></img>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
              <p><button onClick={() => props.onShowPosts(post)}>Get More Info</button></p>
            </div>
          </div>
            ))}
        </div>
      {/* {props.posts.map(post => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <img src={post.image} />
          <p><button onClick={() => props.onShowPosts(post)}>Get More Info</button></p>
        </div>
      ))} */}
    </div>
  );
}
