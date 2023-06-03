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
  let animationDelay = 200;
  let handleAnimate  = useAnimation();
  let didStart = useRef(false);


  //-- Image height from and to finished
  let imageGrowFinished = useRef(false);


  /** Executed on initial render. */
  async function startResizeImage():Promise<boolean> {
    //-- Get number of pixels for element to top of page.
    let current = document.documentElement.scrollTop;
    //-- top of the page.
    let to = 0;

    return (
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
          console.log('imageGrowFinished()')
          imageGrowFinished.current = true;
          return true;
        },
      })
    );
  };


  //-- Start animation if user has not scrolled
  useEffect(() => {
    //-- Start animation if user has not scrolled
    let id = setTimeout( async () => {
      if (!imageGrowFinished.current) {
        console.log('startResizeImage()')
        let finishedLoading = await startResizeImage()
          .then( async () => {
            await handleAnimate.start("showing");
            return true;
          }
        ).then( (results) => {
          console.log('handleAnimate.start("showing") results: ', results)
          didStart.current = results
          return true;
        });
          
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
            exit="exiting"
            variants={{
              hidden: { opacity: 0 },
              showing: { opacity: 1 },
              exiting: {
                transition: { opacity: 0 },
              }
            }}
          >
            <ChevronLeftIcon className="h-4 w-4" />
            Back
          </motion.a>
        </Link>

      {post && (
        <>
          <motion.div
            className={`relative mx-0 bg-gradient-to-tr ${post.blend} overflow-clip shadow-md rounded-tl-lg rounded-tr-lg`}
            onLayoutAnimationStart={startResizeImage}
            layoutId={`photo-${post.slug}`}
            
          >
            <motion.img
              // layoutId={`photo-${post.slug}`}
              layoutId={`image-${post.slug}`}
              // className='rounded-tl-xl rounded-tr-xl object-cover'
              className="w-full object-cover"
              src={post.image}
              alt={post.title}
              initial={'hidden'}
              animate={'showing'}
              variants={{
                hidden: {
                  // opacity: 0,
                  height: "150px",
                  shadow: "0px 0px 0px 0px rgba(0, 0, 0, 1)"
                },
                showing: { 
                  height: "400px",
                  // opacity: 1 
                },
              }}
              transition={{ ease: "easeOut"}}
              style={{
                originX: 0.5,
                objectPosition: post.position,
              }}
            />
          </motion.div>
          
          <motion.div className='p-6 pt-0'
            layoutId={`title-${post.slug}`}
            transition={{ ease: "easeOut" }}
            initial={{ color: "#f8fafc" }}
            animate={{ color: "#111827" }}
          >
            <motion.h1 
              layout 
              className="block text-5xl font-semibold tracking-tighter"
            >
              {post.title}
            </motion.h1>
          </motion.div>
          {/* <p>{post.content}</p> */}
          <motion.div
            initial="hidden"
            animate={handleAnimate}
            exit="exiting"
            className="mt-6 text-base text-gray-700"
            transition={{ ease: "easeOut" }}
            variants={{
              hidden: { opacity: 0, scale: 0.95, y: 15 },
              showing: {
                opacity: 1,
                scale: 1,
                y: 0,
                transition: {
                  staggerChildren: 0.05,
                },
              },
              exiting: { opacity: 0 },
            }}
          >
            {post.content.split("\n").map((paragraph, index) => (
              <motion.p className={index !== 0 ? "mt-4" : ""} key={index}>
                {paragraph}
              </motion.p>
            ))}
          </motion.div>
        </>
      )}
    </article>
  );
}

