"use client";
import { motion } from "framer-motion";
import getPostData, {Place} from '@/context/blog/posts';
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";
// import ExtLink from '@/components/anchor/external';


export default function Page() {
  //-- simulate query to database
  let data:Place[] = getPostData();

  //-- Used to determine element to remain visible on navigate to [slug]
  let slugRoutingTo:Place['slug'] = (useSearchParams()).get("slug") as Place['slug'];

  //-- Heights opposite from [slug]
  let heightFrom: number = 400;
  let heightTo: number = 200;
  
  //----------------------------------------------------------------------------
  //-- Render Page
  return (
    <section className='flex flex-col gap-4 h-full p-4 rounded-lg max-w-2xl m-auto bg-slate-100 shadow-sm shadow-slate-500'>

      <motion.div className="relative" 
        initial="hidden"
        animate="showing"
        variants={{
          hidden:  { opacity: 0, y: 10 },
          showing: { opacity: 1, y: 0 },
        }}
        transition={{ 
          ease: "easeOut",
          duration: .4,
          delay: 0,
          staggerChildren: .5,
        }}
      >
        <h1 className="page--title text-xl" >
          Places - Rebuild 2
        </h1>
        
        <div className={`relative bg-slate-100 overflow-hidden px-4 mx-4 rounded-md`}>
          June, 2023. Started rebuilding again, now that I&#39;ve had time to learn more
          about Framer, TailwindCss and Next.js.
        </div>
      </motion.div>

      {buildBlogData(data, slugRoutingTo, heightFrom, heightTo)}
    </section>
  );
}


/**
   * Builds the post data dynamically, returns to primary return.
   */
function buildBlogData(
  data          : Place[],
  slugRoutingTo : Place['slug'],
  heightFrom    : number,
  heightTo      : number
):JSX.Element[] {
  return (
    data && data.map((post) => {
      return (
        <Link
          key={post.slug}
          href={`/r2/${post.slug}`}
          passHref
          scroll={false}
          legacyBehavior
        >
              
        {/** 
         * Parent Element around each post.
        */}
        <motion.a
          className="relative block mx-2 rounded-md"
          // className="relative block mx-2 overflow-hidden rounded-md shadow shadow-slate-900/40"
          initial="hidden"
          animate="showing"
          whileHover={'hover'}
          exit={post.slug === slugRoutingTo ? "showing" : "hidden"}
          variants={{
            hidden: { opacity: .7 },
            showing: { opacity: 1},
            hover: {  transform: 'translateY(-2px)' },
          }}
          // transition={{ ease: "easeInOut" }}
          transition= {{
              type: "spring",
              stiffness: 150,
              damping: 10,
              mass: 1,
            }}
          
        >
          
          {/**
           * Container around image with gradient/blended background.
          */}
          <motion.div
            layoutId={`image-wrapper-${post.slug} z-10`}
            className={`relative`}
            // className={`relative bg-gradient-to-tr ${post.blend}`}
            transition={{ ease: "easeOut" }}
            initial={{ height: heightFrom }}
            animate={{ height: heightTo }}
            style={{ originX: 0.5 }}
          >
            
            {/**
             * Image of post.
             */}
            <motion.img
              layoutId={`image-${post.slug}`}
              src={post.image}
              alt={post.title}
              className="absolute w-full object-cover rounded-md shadow shadow-slate-900/40"
              initial={'initial'}
              animate={'showing'}
              whileHover={'hover'}
              variants={{
                initial: {
                  opacity: .7,
                  height: heightFrom,
                },
                showing: {
                  opacity: 0.9,
                  height: heightTo
                },
                hover: {
                  opacity: 1,
                },
              }}
              transition={{ 
                // ease: "easeOut",
                // duration: .3,
              }}
              style={{
                originX: 1,
                objectPosition: post.position,
              }}
            />
          </motion.div>
          
          {/**
           * Container around Place Name.
          */}
          <div className="absolute bottom-0 left-0 z-10 pb-4 pl-4">
            <motion.div
              layoutId={`title-${post.id}`}
              transition={{ ease: "easeInOut" }}
              animate={{ 
                color: "#f8fafc"
              }}
            >
              <h3 className="block text-2xl font-semibold tracking-tighter">
                {post.title}
              </h3>
            </motion.div>
          </div>
        </motion.a>
      </Link>
    )
  })
)}