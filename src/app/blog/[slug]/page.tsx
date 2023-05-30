import Image from "next/image";

export default function Page({ params }:any) {
  let slug = params.slug;
  
  let post = exampleData.find((post) => post.slug === slug);
  
  return (
    <div>
      {post && (
        <>
          <h1>{post.title}</h1>
          <p>{post.content}</p>
          <Image src={post.image} alt={post.title} width={500} height={500} />
        </>
      )}
    </div>
  );
}


const exampleData = [
  {
    "id": 1,
    "title": "Blog Post 1",
    "slug": "1",
    "content": "Blog post 1 content.",
    "author": "Author 1",
    "date": "2021-01-01",
    "image" : '/assets/images/places/aspen.jpeg'
  },
  {
    "id": 2,
    "title": "Blog Post 2",
    "slug": "2",
    "content": "Blog post 2 content.",
    "author": "Author 2",
    "date": "2021-01-02",
    "image" : "/assets/images/places/lake-como.jpeg"
  },
  {
    "id": 3,
    "title": "Blog Post 3",
    "slug": "3",
    "content": "Blog post 3 content.",
    "author": "Author 2",
    "date": "2021-01-02",
    "image" : "/assets/images/places/nyc.jpeg"
  },
]