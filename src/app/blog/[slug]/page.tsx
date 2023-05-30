
export default function Page({ params }:any) {
  let slug = params.slug;
  
  let post = exampleData.find((post) => post.slug === slug);
  
  return (
    <div>
      {post && (
        <>
          <h1>{post.title}</h1>
          <p>{post.content}</p>
        </>
      )}
    </div>
  );
}



export const exampleData = [
  {
    "id": 1,
    "title": "Blog Post 1",
    "slug": "1",
    "content": "Blog post 1 content.",
    "author": "Author 1",
    "date": "2021-01-01"
  },
  {
    "id": 2,
    "title": "Blog Post 2",
    "slug": "2",
    "content": "Blog post 2 content.",
    "author": "Author 2",
    "date": "2021-01-02"
  },
]