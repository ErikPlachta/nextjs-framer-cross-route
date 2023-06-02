'use client';
import { useRef, useEffect, useState } from "react";
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

  //-- Render
  return (
    <div className="flex flex-col p-4 gap-4 rounded-lg max-w-2xl m-auto bg-slate-100 shadow-sm shadow-slate-500">
      <div className="relative " >
        <h1 className="page--title text-xl" >
          Places - Rebuild 1
        </h1>
        
        <div className={`relative bg-slate-100 overflow-hidden px-4 mx-4 rounded-md`}>
          Jan, 2023. Redesign of Ryan&#39;s example, by {` `}
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
          href={`/r1/${place.id}`}
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
                height: 150,
              }}
              animate={{ 
                height: 150,
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
                className="absolute w-full object-cover h-[150px]"
                // initial={{
                //   height: 150,
                //   // height: imageHeightFrom,
                // }}
                // animate={{
                //   height: 150,
                //   // height: imageHeightTo.current,
                // }}
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
                  {place.title}
                </h2>
              </motion.div>
            </div>
          </motion.a>
        </Link>
      ))}
    </div>
  );
};
