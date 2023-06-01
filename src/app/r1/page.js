'use client';
import { useRef, useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";

import getPlaces from '@/context/blog/posts';
import ExtLink from "@/components/anchor/external";


/** Places Page.
 * 
 */
export default function Places() {
  let searchParams = useSearchParams();
  let goingToPlace = searchParams.get("slug");
  
  const places = getPlaces();

  
  //-- Starts full screen, then shrinks.
  let imageHeightFrom   = '0px';
  //-- Image to never be more than max. 
  let imageHeightToMax  = 150;
  //-- Defined to 25vh OR imageHeightToMax if meets max
  let imageHeightTo = useRef(imageHeightToMax);

  let imageOffset = useRef(0);


  //-- Set imageHeightTo to 25% of maxHeight or less based on viewport.
  useEffect(() => {
    
    const vw = window.innerHeight * .25
    
    // console.log(vw)

    if(vw > imageHeightToMax) {
      imageHeightTo.current = imageHeightToMax + 'px';
    }
    else {
      imageHeightTo.current = window.innerHeight * .25 + 'px';
    }
    // console.log(imageHeightTo.current)
  }, [imageHeightTo]);


  //-- Render
  return (
    <div className="flex flex-col p-4 gap-4 rounded-lg max-w-2xl m-auto bg-slate-100 shadow-sm shadow-slate-500">
      <div className="relative " >
        <h1 className="page--title" >
        {/* <h1 className="block text-5xl tracking-tighter pb-10" > */}
          Places - Rebuild
        </h1>
        
        <div className={`relative bg-slate-100 overflow-hidden px-4 mx-4 rounded-md`}>
          Redesign of Ryan&#39;s example, by {` `}
          <ExtLink  href='https://github.com/erikplachta'
                    className='underline text-blue-500 hover:text-blue-700'
          >
            Erik Plachta
          </ExtLink>
          , to learn more about Framer-Motion, NextJs, and CrossOrigin animations.
        </div>
      </div>

      {places.map((place) => (
        <Link
          key={place.id}
          href={`/places-rebuild/${place.id}`}
          passHref
          scroll={false}
          legacyBehavior
        >
          
          {/** Parent Element around each place.
           * 
          */}
          <motion.a
            // className="relative block mx-2 overflow-hidden rounded shadow-[1px_1px_2px_1px_rgba(0,0,0,0.4)]"
            className="relative block mx-2 overflow-hidden rounded-md shadow shadow-slate-900/40"
            initial="hidden"
            animate="showing"
            exit={place.id === goingToPlace ? "showing" : "hidden"}
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
              layoutId={`photo-${place.id}`}
              className={`relative bg-gradient-to-tr ${place.blend} overflow-hidden rounded-md`}
              transition={{ ease: "easeOut" }}
              initial={{ 
                height: imageHeightFrom,
              }}
              animate={{ 
                height: imageHeightTo.current,
              }}
              style={{ originX: 0.5 }}
            >
              
              {/** Image of place.
               * 
               */}
              <motion.img
                layoutId={`image-${place.id}`}
                transition={{ ease: "easeInOut" }}
                src={place.image}
                alt={place.name}
                className="absolute w-full object-cover mix-blend-soft-light"
                initial={{
                  height: imageHeightFrom,
                }}
                animate={{
                  height: imageHeightTo.current,
                }}
                style={{
                  originX: 1,
                  objectPosition: place.position,
                }}
              />
            </motion.div>
            
            {/** Container around Place Name.
             * 
            */}
            <div className="absolute bottom-0 left-0 z-10 pb-4 pl-4">
              <motion.div
                layoutId={`title-${place.id}`}
                transition={{ ease: "easeInOut" }}
                animate={{ color: "#f8fafc" }}
              >
                <h2 className="block text-2xl font-semibold tracking-tighter">
                  {place.name}
                </h2>
              </motion.div>
            </div>
          </motion.a>
        </Link>
      ))}
    </div>
  );
};
