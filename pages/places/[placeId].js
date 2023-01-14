import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { motion, useAnimation, animate } from "framer-motion";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

import places from "./context/places";

export default function Place() {
  let router = useRouter();
  let pageAnimations = useAnimation();
  
  /**  Get place from slug 
   * 
  */
  let [id] = useState(router.query.placeId);
  
  let place = places.find((p) => p.id === id);


  /** Flag to verify page is rendered for the first time, and should call `startScrolling()`.
   * 
   * When `useEffect` runs, if `didStart` is false, the function `startScrolling`
   * sets `didStart` to `true`, and the pageAnimation `showing` is started.
   * 
  */
  let didStart = useRef(false); 
  let scrollFinished = useRef(false);
  
  /** Conditional animation to scroll to top of page if needed.
   * 
   * This function is used only if the scroll position is not at the top of the
   * page. Otherwise, the pageAnimation `showing` is started by useEffect.
   * 
   * ---
   * 
   * ### Logic:
   * 
   * 1. Get current scroll position.
   * 2. Animate scroll to top of page.
   * 3. then start Framer animation `showing`.
   * 
   */
  let startScrolling = () => {
    // didStart.current = true;
    
    //-- Get number of pixels to top.
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
        // console.log("on complete")
        // if (router.pathname === "/places/[placeId]") {
          // pageAnimations.start("showing");
          // let id = setTimeout(() => {
          //   if (router.pathname === "/places/[placeId]") {
          //       pageAnimations.start("showing");    //-- so start Framer animation showing content.
          //       console.log("scrolling timeout")
          //   }
          // }, process.env.PLACE_ANIMATION_DELAY);  //-- Delay before showing content
        // }
      },
    });
  };


  useEffect(() => {
    
    /** Checking to see if page animation should be managed by `useEffect` or `startScrolling`. */
    let id = setTimeout(() => {             
      //-- IF `startScrolling` isn't called, THEN start Framer animation showing content.
      if (!didStart.current) pageAnimations.start("showing");
    }, process.env.PLACE_ANIMATION_DELAY);

    return () => clearTimeout(id);
  }, [pageAnimations]); //-- CHECK every time pageAnimations change to ensure content is shown.

  //-- Render Place
  return (
    <div>
      <div>
        <div className="relative px-6">
          <Link href="/places" passHref scroll={false} legacyBehavior>
            <motion.a
              className="absolute top-0 left-0 z-10 mt-3 ml-4 flex items-center space-x-2 text-gray-50"
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
            initial={{ height: 400 }}
            animate={{ height: 600 }}
            style={{ originX: 0.5 }}
          >
            <motion.img
              layoutId={`image-${place.id}`}
              transition={{ ease: "easeOut" }}
              src={place.image}
              alt={place.name}
              className="absolute w-full object-cover mix-blend-soft-light"
              initial={{
                height: 400,
              }}
              animate={{
                height: 600,
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
