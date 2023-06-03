'use client';
import React, { useEffect, useRef } from "react";
import {motion} from 'framer-motion';
import getPostData from "@/context/blog/posts"
import { usePathname } from "next/navigation";
import { animate, useAnimation } from "framer-motion";
import Link from "next/link";
import { ChevronLeftIcon } from "@heroicons/react/20/solid";
import { start } from "repl";

export default function Page({ params }:any) {
  
  //-- slug sent when navigated to from blog base pge
  let slug = params.slug;
  let pathname = usePathname();

  //-- simulate query to database
  let data = getPostData();
  let post = data.find((post) => post.slug === slug);

  //-- Delay animation unless user scrolls
  let animationDelay = 500;
  let handleAnimate  = useAnimation();
  let didStart = useRef(false);


  //-- Image height from and to finished
  let imageGrowFinished = useRef(false);


  /** Executed on initial render. */
  let startResizeImage = async () => {
    //-- Get number of pixels for element to top of page.
    let current = document.documentElement.scrollTop;
    //-- top of the page.
    let to = 0;

    animate(current, to, {
      ease: "easeOut",
      onUpdate(latest) {
        if (pathname === "/r2/[placeId]") {
          requestAnimationFrame(() => {
            window.scrollTo(to, latest);
          });
        }
      },
      onComplete() {
        imageGrowFinished.current = true;
        return true;
      },
    });
  };


  //-- Start animation if user has not scrolled
  useEffect(() => {
    //-- Start animation if user has not scrolled
    let id = setTimeout(() => {
      if (!imageGrowFinished.current) {
        console.log('startResizeImage()')

        startResizeImage();
      }
    }, animationDelay);
    
    return () => clearTimeout(id);
  }, [animationDelay, handleAnimate, pathname]);
  


  //----------------------------------------------------------------------------
  //-- Render not found.
  if(!post) return (
    <div className="flex flex-col py-0 px-0 mx-auto gap-4 rounded-lg max-w-2xl overflow-hidden bg-slate-100 shadow-sm shadow-slate-500">
      <div className="relative px-6">
        ERROR: Place not found with place id: ${slug}
      </div>
    </div>
  );


  //----------------------------------------------------------------------------
  //-- Otherwise render post.
  return (
    <article className='relative flex flex-col gap-4 h-full rounded-lg max-w-2xl m-auto bg-slate-100 shadow-sm shadow-slate-500'>

      <Link href="/r2" passHref scroll={false} legacyBehavior>
        <motion.a
          className={`absolute top-0 left-4 z-10 mt-6 flex items-center gap-1 rounded-md px-2 py-2 `
                    + ` bg-slate-600 bg-opacity-10 hover:bg-opacity-70 `
                    + `text-gray-50 text-md font-medium `
            }
            initial="hidden"
            animate={handleAnimate}
            exit="hidden"
            variants={{
              hidden: { opacity: 0 },
              showing: { opacity: 1 },
            }}
          >
            <ChevronLeftIcon className="h-4 w-4" />
            Back
          </motion.a>
        </Link>

      {post && (
        <motion.div
        onLayoutAnimationStart={startResizeImage}
        >
          <motion.img
            className='rounded-tl-xl rounded-tr-xl object-cover'
            src={post.image}
            alt={post.title}
            animate={handleAnimate}
            transition={{ ease: "easeOut", duration: 0.5 }}
            initial="hidden"
            variants={{
              hidden: { opacity: 0 },
              showing: { height: "300px", opacity: 1 },
            }}
          />
          <div className='p-4'>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
          </div>
        </motion.div>
      )}
    </article>
  );
}

