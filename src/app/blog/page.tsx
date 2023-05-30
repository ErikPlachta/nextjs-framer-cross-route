// import Image from "next/image";
"use client";
import { motion } from "framer-motion";
import getPostData from '@/context/blog/posts';
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function Page() {
  //-- simulate query to database
  let data = getPostData();
  
  //-- Extracting where to navigating to 
  const router = useSearchParams();
  const searchParams = useSearchParams();
  let postIdRoutingTo = searchParams.get("id");

  
  function buildBlogData():any{
    
    return (
      data.map((post) => {
        return (
          <Link
            key={post.id}
            href={`/blog/${post.id}`}
            passHref
            scroll={false}
            legacyBehavior
          >
                
          {/** Parent Element around each post.
           * 
          */}
          <motion.a
            // className="relative block mx-2 overflow-hidden rounded shadow-[1px_1px_2px_1px_rgba(0,0,0,0.4)]"
            className="relative block mx-2 overflow-hidden rounded-md shadow shadow-slate-900/40"
            initial="hidden"
            animate="showing"
            exit={post.id === postIdRoutingTo ? "showing" : "hidden"}
            variants={{
              hidden: {
                opacity: 0,
              },
              showing: {
                opacity: 1,
              },
              whileHover: {
                // transform: 'translateY(-1px)',
                top: "-5px",
                // left: "-5px",
              },
            }}
            whileHover={'whileHover'}
          >
            
            {/** Container around image with gradient/blended background.
             * 
            */}
            <motion.div
              layoutId={`photo-${post.id}`}
              className={`relative bg-gradient-to-tr ${post.blend} overflow-hidden rounded-md`}
              transition={{ ease: "easeOut" }}
              initial={{ 
                height: 0,
              }}
              animate={{ 
                height: '150px',
              }}
              style={{ originX: 0.5 }}
            >
              
              {/** Image of post.
               * 
               */}
              <motion.img
                layoutId={`image-${post.id}`}
                transition={{ ease: "easeInOut" }}
                src={post.image}
                alt={post.title}
                className="absolute w-full object-cover mix-blend-soft-light"
                initial={{
                  height: 0,
                }}
                animate={{
                  height: 150,
                }}
                style={{
                  originX: 1,
                  objectPosition: post.position,
                }}
              />
            </motion.div>
            
            {/** Container around Place Name.
             * 
            */}
            <div className="absolute bottom-0 left-0 z-10 pb-4 pl-4">
              <motion.div
                layoutId={`title-${post.id}`}
                transition={{ ease: "easeInOut" }}
                animate={{ color: "#f8fafc" }}
              >
                <h2 className="block text-2xl font-semibold tracking-tighter">
                  {post.title}
                </h2>
              </motion.div>
            </div>
          </motion.a>
        </Link>
      )
    })
  )}
  
  
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



// const testBlogData = [
//   {
//     "id": 1,
//     "title": "Blog Post 1",
//     "slug": "1",
//     "content": "Blog post 1 content.",
//     "author": "Author 1",
//     "date": "2021-01-01",
//     "image" : '/assets/images/place/aspen.jpeg',
//     "blend" : ''
//   },
//   {
//     "id": 2,
//     "title": "Blog Post 2",
//     "slug": "2",
//     "content": "Blog post 2 content.",
//     "author": "Author 2",
//     "date": "2021-01-02",
//     "image" : "/assets/images/place/lake-como.jpeg",
//     "blend" : ''
//   },
//   {
//     "id": 3,
//     "title": "Blog Post 3",
//     "slug": "3",
//     "content": "Blog post 3 content.",
//     "author": "Author 2",
//     "date": "2021-01-02",
//     "image" : "/assets/images/place/nyc.jpeg",
//     "blend" : ''
//   },
// ]