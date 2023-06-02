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
                top: "-1px",
                // left: "-5px",
              },
            }}
            whileHover={'whileHover'}
          >
            
            {/**
             * Container around image with gradient/blended background.
            */}
            <motion.div
              layoutId={`image-wrapper-${post.slug}`}
              // className={`relative bg-gradient-to-tr ${post.blend} overflow-hidden rounded-md`}
              className={`relative h-[150px] bg-gradient-to-tr ${post.blend} overflow-hidden`}
              transition={{ ease: "easeOut" }}
              initial={{ 
                // height: 150,
              }}
              animate={{ 
                // height: '150px',
              }}
              style={{ originX: 0.5 }}
            >
              
              {/**
               * Image of post.
               */}
              <motion.img
                layoutId={`image-${post.slug}`}
                transition={{ ease: "easeInOut" }}
                src={post.image}
                alt={post.title}
                className="h-[150px] absolute w-full object-cover"
                // className="absolute w-full object-cover mix-blend-soft-light"
                initial={{
                  // height: 0,
                  opacity: 0.2,
                }}
                animate={{
                  // height: 150,
                  opacity: 0.85,
                }}
                whileHover={{
                  opacity: .9,
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
                animate={{ color: "#f8fafc" }}
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
