
import Image from "next/image";
<<<<<<< HEAD
import getPostData from '@/content/blog/posts';
import { useRouter } from "next/navigation";

export default function Page({ params }:any) {
  
<<<<<<< HEAD
  //-- slug sent when navigated to from blog base pge
=======
import getPostData from '@/context/blog/posts';

export default function Page({ params }:any) {
  
>>>>>>> 5e6e4d4 (Built working route framework.)
  let slug = params.slug;
  //-- simulate query to database
  let data = getPostData();
  
<<<<<<< HEAD
  let post = data.find((post) => post.slug === slug);
=======
  let post = testBlogData.find((post) => post.slug === slug);
>>>>>>> 458d412 (Updated base building logic.)
=======
  let post = data.find((post) => post.id === slug);
>>>>>>> 5e6e4d4 (Built working route framework.)
  
  return (
    <div>
      {post && (
        <>
          <h1>{post.title}</h1>
          <p>{post.content}</p>
          <Image priority={true} src={post.image} alt={post.title} width={500} height={500} />
        </>
      )}
    </div>
  );
}
<<<<<<< HEAD
=======

<<<<<<< HEAD


const testBlogData = [
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
>>>>>>> 458d412 (Updated base building logic.)
=======
>>>>>>> 5e6e4d4 (Built working route framework.)
