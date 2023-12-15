import './App.css'

function Header() {
  return (
    <header>
        <a href="#">Home</a> | <a href="#posts-index">All posts</a> | <a href="#posts-new">New post</a>
        <title>blogposts</title>
    </header>
  )
}

function PostsNew() {
  return (
    <div id="posts-new">
      <h1>New</h1>
        <h2>A Little Bit of Background</h2>
        <body>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem vero tempora mollitia repudiandae ab sunt ex corporis dignissimos, inventore eveniet nisi iure dolore? Iste velit aut ipsa est autem aperiam.
          Ea, quibusdam illo repellendus expedita nisi aut at quas, commodi odit consequatur architecto nesciunt, temporibus iste voluptas natus velit possimus vel assumenda rem nam dolores? Quidem rerum nisi amet voluptate.
          Corporis voluptas nihil error neque earum iste vitae laborum, ea et rem tempore deleniti blanditiis reprehenderit illum, expedita, veritatis laboriosam mollitia quaerat porro optio quo dicta esse. Alias, natus in?
        </body>
        <img src="https://images.unsplash.com/flagged/photo-1575555201693-7cd442b8023f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bG9zJTIwYW5nZWxlc3xlbnwwfHwwfHx8MA%3D%3D" alt="LA background" />
      </div>

  )
}

function PostsIndex() {
  return (
    <div id="posts-index">
        <h1>All</h1>
          <h2>All of My Favorites</h2>
        <body>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, ipsam voluptatem blanditiis et quidem ab consectetur impedit non omnis suscipit provident vitae quia, sunt, in fuga ex. Error, maxime? Doloribus.
          Commodi illum iure exercitationem in magnam vel, quaerat repellat! Repudiandae quas temporibus excepturi possimus ipsam architecto molestiae, blanditiis porro minima ipsum quam aliquid magnam beatae dignissimos odit praesentium repellat molestias!
          Error enim non quas labore blanditiis temporibus reiciendis quibusdam veritatis quaerat a, doloremque architecto obcaecati quisquam magni, alias ex! Eum doloremque quasi nostrum officia labore impedit eaque omnis non laboriosam?
          Sunt possimus voluptates labore illo praesentium cum voluptatum consequatur? Dolore, odit? Eum vero fuga aliquam. Accusamus tenetur provident expedita, quis odit nisi architecto laudantium consequatur dolore, numquam veritatis, vero quo.
          Eius ducimus consectetur assumenda recusandae, animi eum vitae explicabo harum? Facere similique sit saepe cupiditate beatae dolorum accusantium excepturi. Cum magnam ipsum temporibus a similique minus earum debitis labore enim?
          Obcaecati unde odit maiores quaerat sapiente velit sequi, similique animi doloribus corrupti reiciendis pariatur quo quasi, numquam recusandae ab earum laudantium totam. Commodi soluta quaerat recusandae culpa, in sunt maiores.
        </body>
        <img 
          src="https://images.pexels.com/photos/771881/pexels-photo-771881.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="NY background" 
        />
        <img src="https://images.unsplash.com/photo-1494522855154-9297ac14b55f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D" alt="Chicago background" 
        />
        <img src="https://media.istockphoto.com/id/1342281568/photo/golden-gate-bridge-with-clouds-over-san-francisco-california-usa.webp?b=1&s=170667a&w=0&k=20&c=_aCUoulYM84W-Sqh0hv17S8rVDx_Nd-Od6lTQFZJ11s=" alt="SF background" 
        />
    </div>
  )
}

function Footer() {
  return (
    <footer>
      <p>Copyright 2023</p>
    </footer>
  )
}

function Content() {
  return (
    <div>
      <PostsNew/>
      <PostsIndex/>
    </div>
  )
}

function App() {
  return (
    <div>
      <Header/>  
      <Content/>  
      <Footer/>  
    </div>
  );
}

export default App
