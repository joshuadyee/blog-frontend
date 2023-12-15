import { PostsIndex } from './PostsIndex';
import { PostsNew } from './PostsNew';

export function Content() {
  let posts = [
    {
      id: 1,
      title: "New York",
      body: "My travels to New York: Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, ipsam voluptatem blanditiis et quidem ab consectetur impedit non omnis suscipit provident vitae quia, sunt, in fuga ex. Error, maxime? Doloribus.Commodi illum iure exercitationem in magnam vel, quaerat repellat! Repudiandae quas temporibus excepturi possimus ipsam architecto molestiae, blanditiis porro minima ipsum quam aliquid magnam beatae dignissimos odit praesentium repellat molestias!",
      image: "https://images.pexels.com/photos/771881/pexels-photo-771881.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      id: 2,
      title: "Chicago",
      body: "My travels to Chicago: Error enim non quas labore blanditiis temporibus reiciendis quibusdam veritatis quaerat a, doloremque architecto obcaecati quisquam magni, alias ex! Eum doloremque quasi nostrum officia labore impedit eaque omnis non laboriosam? Sunt possimus voluptates labore illo praesentium cum voluptatum consequatur? Dolore, odit? Eum vero fuga aliquam. Accusamus tenetur provident expedita, quis odit nisi architecto laudantium consequatur dolore, numquam veritatis, vero quo.",
      image: "https://images.unsplash.com/photo-1494522855154-9297ac14b55f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      title: "San Francisco",
      body: "My travels to San Francisco: Eius ducimus consectetur assumenda recusandae, animi eum vitae explicabo harum? Facere similique sit saepe cupiditate beatae dolorum accusantium excepturi. Cum magnam ipsum temporibus a similique minus earum debitis labore enim? Obcaecati unde odit maiores quaerat sapiente velit sequi, similique animi doloribus corrupti reiciendis pariatur quo quasi, numquam recusandae ab earum laudantium totam. Commodi soluta quaerat recusandae culpa, in sunt maiores.",
      image: "https://media.istockphoto.com/id/1342281568/photo/golden-gate-bridge-with-clouds-over-san-francisco-california-usa.webp?b=1&s=170667a&w=0&k=20&c=_aCUoulYM84W-Sqh0hv17S8rVDx_Nd-Od6lTQFZJ11s=",
    },
  ];

  return (
    <div>
      <PostsNew />
      <PostsIndex posts={posts} />
    </div>
  );
}
