'use client';
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";

import getPlaces from '@/context/blog/posts';
import ExtLink from "@/components/anchor/external";


/**
 * Places Page.
 */
export default function Places() {
  let searchParams = useSearchParams();
  let goingToPlace = searchParams.get("slug");
  const places = getPlaces();
  
  //-- Render
  return (
    <>
    <div className="relative flex flex-col p-4 gap-4 rounded-lg max-w-2xl m-auto bg-slate-100 shadow-sm shadow-slate-500">
      <div className="relative" >
        <h1 className="page--title text-xl" >
          Places - Rebuild 1
        </h1>
        
        <div className={`relative bg-slate-100 overflow-hidden px-4 mx-4 rounded-md`}>
          Jan, 2023. Redesign of Ryan&#39;s example, by {` `}
          <ExtLink  href='https://github.com/ErikPlachta/nextjs-framer-cross-route'>
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
          
          {/** 
           * Parent Element around each place.
          */}
          <motion.a
            className="relative block mx-2 overflow-hidden rounded-md shadow shadow-slate-900/40"
            initial="hidden"
            animate="showing"
            //-- Element to show when leaving this page.
            exit={place.id === goingToPlace ? "showing" : "hidden"}
            variants={{
              hidden      : { opacity: 0 },
              showing     : { opacity: 1 },
              whileHover  : { transform: 'translateY(-5px)' },
            }}
            whileHover={'whileHover'}
          >
            
            {/** 
             * Container around image with gradient/blended background.
            */}
            <motion.div
              layoutId={`photo-${place.id}`}
              className={`relative bg-gradient-to-tr ${place.blend} overflow-hidden rounded-md`}
              initial={{ height: 0 }}
              animate={{ height: 200 }}
              transition={{  ease: "easeOut" }}
              style={{ originX: 0.5 }}
            >
              
              {/** 
               * Image of place.
               */}
              <motion.img
                layoutId={`image-${place.id}`}
                transition={{ ease: "easeInOut" }}
                src={place.image}
                alt={place.title}
                className="absolute w-full object-cover h-[200px]"
                style={{
                  originX: 0.5,
                  objectPosition: place.position,
                }}
              />
            </motion.div>
            
            {/**
             * Container around Place Name.
            */}
            <div className="absolute bottom-0 left-0 z-10 pb-4 pl-4">
              <motion.div
                layoutId={`title-${place.id}`}
                transition={{ ease: "easeOut" }}
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
  </>
  );
};
