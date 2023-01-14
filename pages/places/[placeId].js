import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { motion, useAnimation, animate } from "framer-motion";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

import places from "./context/places";

/** Eah individual place. */
export default function Place() {
  let router = useRouter();
  let pageAnimations = useAnimation();
  
  /**  Get place from slug 
   * 
  */
  let [id] = useState(router.query.placeId);
  
  let place = places.find((p) => p.id === id);

  //----------
  //-- Styling for images

  let imageHeightMax = 600;
  
  let imageHeightFrom = '25vh';
  let imageHeightTo   = '60vh';

  let viewportHeight = useRef(0); //window.innerHeight;
  let viewportWidth = useRef(0); //window.innerWidth;


  /** Flag to verify page is rendered for the first time, and should call `startScrolling()`.
   * 
   * When `useEffect` runs, if `didStart` is false, the function `startScrolling`
   * sets `didStart` to `true`, and the pageAnimation `showing` is started.
   * 
  */
  let didStart = useRef(false); 
  /** Flag to verify if scroll is happening or not used by `useEffect`. */
  let scrollFinished = useRef(false);
  
  /** Conditional to slide image to top of page if needed based on it's position to top page.
   * 
   * This function is used only if the scroll position is not at the top of the
   * page. Otherwise, the pageAnimation `showing` is started by useEffect.
   * 
   */
  let startScrolling = async () => {
    
    //-- Get number of pixels for element to top of page.
    let current = document.documentElement.scrollTop;
    //-- Where to end up
    let to = 0;

    animate(current, to, {
      ease: "easeOut",
      onUpdate(latest) {
        if (router.pathname === "/places/[placeId]") {
          requestAnimationFrame(() => {
            window.scrollTo(to, latest);
          });
        }
      },
      onComplete() {
        scrollFinished.current = true;
        return true;
      },
    });
  };


  useEffect(() => {
    
    /** Checking to see if page animation should be managed by `useEffect` or `startScrolling`. */
    let id = setTimeout(() => {             
      
      //-- IF `startScrolling` isn't called, THEN start Framer animation showing content.
      if (!didStart.current && !scrollFinished.current) {
        //--   
        let isScrolled = startScrolling()
        .then( results => {
          if(isScrolled){
            console.log("isScrolled: ", isScrolled)
            pageAnimations.start("showing");
          }
        })
        // console.log("//-- Needs to scroll, then start animation.")
        // startScrolling();
        // pageAnimations.start("showing");
      } 
      
      //-- IF `startScrolling` is called, THEN start Framer animation showing once the scroll animation if finished.
      if (!didStart.current && scrollFinished.current) {
        console.log("//-- Scroll event finished, start animation.")
        pageAnimations.start("showing");
      }
    }, process.env.PLACE_ANIMATION_DELAY);

    //-- Cleanup by clearing time to prevent error.
    return () => clearTimeout(id);
  }, [pageAnimations]);   //-- CHECK every time pageAnimations change to ensure content is shown.

  //-- Render Place
  return (
      <div className="relative px-6">
        <Link href="/places" passHref scroll={false} legacyBehavior>
          <motion.a
            className="absolute top-0 left-0 z-10 mt-3 ml-4 flex items-center  gap-1 text-gray-50 bg-slate-600 bg-opacity-50 rounded-md px-3 py-2 text-sm font-medium hover:bg-opacity-75"
            initial="hidden"
            animate={pageAnimations}
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
        <motion.div
          layoutId={`photo-${place.id}`}
          onLayoutAnimationStart={startScrolling}
          className={`relative -mx-6 bg-gradient-to-tr ${place.blend} overflow-hidden`}
          transition={{ ease: "easeOut" }}
          initial={{ height: imageHeightFrom }}
          animate={{ height: imageHeightTo }}
          style={{ originX: 0.5 }}
        >
          {console.log("viewportHeight: ",viewportHeight)}
          <motion.img
            layoutId={`image-${place.id}`}
            transition={{ ease: "easeOut" }}
            src={place.image}
            alt={place.name}
            // className="absolute w-full object-cover mix-blend-soft-light h-0"
            className="absolute w-full object-cover h-0"
            initial={{
              height: imageHeightFrom,
            }}
            animate={{
              height: imageHeightTo,
            }}
            style={{
              originX: 0.5,
              objectPosition: place.position,
            }}
          />
        </motion.div>
        <div className="pt-12">
          <motion.div
            layoutId={`title-${place.id}`}
            transition={{ ease: "easeOut" }}
            initial={{ color: "#f8fafc" }}
            animate={{ color: "#111827" }}
            className="relative z-10"
          >
            <motion.h1
              className="block text-5xl font-semibold tracking-tighter"
              layout
            >
              {place.name}
            </motion.h1>
          </motion.div>
          <motion.div
            initial="hidden"
            animate={pageAnimations}
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
            {place.about.split("\n").map((paragraph, index) => (
              <motion.p className={index !== 0 ? "mt-3" : ""} key={index}>
                {paragraph}
              </motion.p>
            ))}
          </motion.div>
        </div>
      </div>
  );
}


/** Pre-Render Place's Path by ID to update slug in URL.
 * 
 *  When you export a function called getStaticPaths (Static Site Generation)
 *  from a page that uses dynamic routes, Next.js will statically pre-render 
 *  all the paths specified by getStaticPaths.
 * 
 * @returns 
 * 
 * @Resources API - https://nextjs.org/docs/basic-features/data-fetching/get-static-paths
 */
export function getStaticPaths() {
  return {
    paths: places.map((place) => ({ params: { placeId: place.id } })),
    fallback: false,
  };
}

export function getStaticProps() {
  return {
    props: {},
  };
}
