import Image from "next/image";
import { motion } from "framer-motion";

export default function Page() {
  
  let data = testBlogData;
  
  function buildBlogData():any{
    
    return testBlogData.map((post) => {
      return (
        <div className='border-solid border-1 border-[rgba(0,0,0, .1)] p-4 rounded bg-primary'>
          <h3>{post.title}</h3>
          {/* <span className='overflow-hidden h-[100px] max-h-[200px]'> */}
          <div
            // layoutId={`photo-${place.id}`}
            className={`relative bg-gradient-to-tr ${post.blend} overflow-hidden rounded-md`}
            // transition={{ ease: "easeOut" }}
            // initial={{ 
            //   height: imageHeightFrom,
            // }}
            // animate={{ 
            //   height: imageHeightTo.current,
            // }}
            // style={{ originX: 0.5 }}
          >
            <img
              // layoutId={`image-${place.id}`}
              // transition={{ ease: "easeInOut" }}
              src={post.image}
              alt={post.title}
              className="absolute w-full object-cover mix-blend-soft-light"
              // initial={{
              //   height: imageHeightFrom,
              // }}
              // animate={{
              //   height: imageHeightTo.current,
              // }}
              // style={{
              //   originX: 1,
              //   objectPosition: place.position,
              // }}
            />
          </div>
          
        </div>
      )
    })
  }
  
  return (
    <>
      <section>
        <h1>Blog</h1>
      </section>
      
      <section className='flex flex-col gap-4'>
        {buildBlogData()}
      </section>
    </>
  );
}



const testBlogData = [
  {
    "id": 1,
    "title": "Blog Post 1",
    "slug": "1",
    "content": "Blog post 1 content.",
    "author": "Author 1",
    "date": "2021-01-01",
    "image" : '/assets/images/places/aspen.jpeg',
    "blend" : ''
  },
  {
    "id": 2,
    "title": "Blog Post 2",
    "slug": "2",
    "content": "Blog post 2 content.",
    "author": "Author 2",
    "date": "2021-01-02",
    "image" : "/assets/images/places/lake-como.jpeg",
    "blend" : ''
  },
  {
    "id": 3,
    "title": "Blog Post 3",
    "slug": "3",
    "content": "Blog post 3 content.",
    "author": "Author 2",
    "date": "2021-01-02",
    "image" : "/assets/images/places/nyc.jpeg",
    "blend" : ''
  },
]