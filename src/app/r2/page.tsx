// import Image from "next/image";
"use client";
import { motion } from "framer-motion";
import getPostData from '@/context/blog/posts';
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";

import ExtLink from '@/components/anchor/external';

export default function Page() {
  //-- simulate query to database
  let data = getPostData();
  
  //-- Extracting where to navigating to 
  const router = useSearchParams();
  const searchParams = useSearchParams();
  let postIdRoutingTo = searchParams.get("slug");

  
  function buildBlogData():any{
    
    return (
      data.map((post) => {
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
            className="relative block mx-2 overflow-hidden rounded-md shadow shadow-slate-900/40"
            initial="hidden"
            animate="showing"
            exit={post.slug === postIdRoutingTo ? "showing" : "hidden"}
            variants={{
              hidden: { opacity: 0 },
              showing: { opacity: 1},
              hover: { transform: 'translateY(-2px)' },
            }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 10,
              mass: .5,
              duration: 0.1
              
            }}
            whileHover={'hover'}
          >
            
            {/**
             * Container around image with gradient/blended background.
            */}
            <motion.div
              layoutId={`image-wrapper-${post.slug}`}
              // className={`relative bg-gradient-to-tr ${post.blend} overflow-hidden rounded-md`}
              className={`relative h-[150px] bg-gradient-to-tr ${post.blend} overflow-hidden`}
              transition={{ ease: "easeOut" }}
              // initial={{ }}
              // animate={{ }}
              style={{ originX: 0.5 }}
            >
              
              {/**
               * Image of post.
               */}
              <motion.img
                layoutId={`image-${post.slug}`}
                src={post.image}
                alt={post.title}
                className="h-[150px] absolute w-full object-cover"
                initial={'initial'}
                animate={'showing'}
                whileHover={'hover'}
                variants={{
                  initial: {
                    opacity: 0,
                  },
                  showing: {
                    opacity: 0.9,
                  },
                  hover: {
                    opacity: 1,
                  },
                }}
                transition={{ ease: "easeInOut" }}
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
  
  
  //----------------------------------------------------------------------------
  //-- Render Page
  return (
    <section className='flex flex-col gap-4 h-full p-4 rounded-lg max-w-2xl m-auto bg-slate-100 shadow-sm shadow-slate-500'>

      <div className="relative " >
        <h1 className="page--title text-xl" >
          Places - Rebuild 2
        </h1>
        
        <div className={`relative bg-slate-100 overflow-hidden px-4 mx-4 rounded-md`}>
          June, 2023. Started rebuilding again, now that I&#39;ve had time to learn more
          about Framer, TailwindCss and Next.js.
        </div>
      </div>

      {buildBlogData()}
    </section>
  );
}
