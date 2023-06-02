'use client';
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { motion, useAnimation, animate } from "framer-motion";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
// import Header from "@/components/Header";
import getPlaces from "@/context/blog/posts";


/** Each individual place. */
export default function Place({params}:any) {
  
  let animationDelay = 1000;
  let router = useRouter();
  let pathname = usePathname();
  let pageAnimations = useAnimation();
  const places = getPlaces();
  
  //-- Extract placeId from params
  let [id] = useState(params.placeId);
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
        if (pathname === "/r2/[placeId]") {
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
        .then( async results => {
          pageAnimations.start("showing");
        })
      } 
      
      //-- IF `startScrolling` is called, THEN start Framer animation showing once the scroll animation if finished.
      if (!didStart.current && scrollFinished.current) {
        // console.log("//-- Scroll event finished, start animation.")
        pageAnimations.start("showing");
      }
    }, animationDelay);

    //-- Cleanup by clearing time to prevent error.
    return () => clearTimeout(id);
  }, [pageAnimations]);   //-- CHECK every time pageAnimations change to ensure content is shown.





  if(!place) return (
    <div className="flex flex-col py-0 px-0 mx-auto gap-4 rounded-lg max-w-2xl overflow-hidden bg-slate-100 shadow-sm shadow-slate-500">
      <div className="relative px-6">
        ERROR: Place not found with place id: ${id}
      </div>
    </div>
  );


  //-- Render Place
  return (
    <article 
            className={  `flex flex-col py-0 px-2 mx-auto gap-4 rounded-lg max-w-2xl `
                      +   `bg-slate-100 shadow-sm shadow-slate-500`
                    }
    >
      <div  className="relative p-4 mb-10 pt-0">
        <Link href="/r1" passHref scroll={false} legacyBehavior>
          <motion.a
            className={`absolute top-0 left-4 z-10 mt-6 flex items-center gap-1 rounded-md px-2 py-2 `
                      + ` bg-slate-600 bg-opacity-10 hover:bg-opacity-70 `
                      + `text-gray-50 text-md font-medium `
            }
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
          className={`relative -mx-6 bg-gradient-to-tr ${place.blend} overflow-hidden  rounded-md shadow-md`}
          transition={{ ease: "easeOut" }}
          initial={{ height: imageHeightFrom }}
          animate={{ height: imageHeightTo }}
          style={{ originX: 0.5 }}
        >
          {/* {console.log("viewportHeight: ",viewportHeight)} */}
          <motion.img
            layoutId={`image-${place.id}`}
            transition={{ ease: "easeOut" }}
            src={place.image}
            alt={place.title}
            // className="absolute w-full object-cover mix-blend-soft-light h-0"
            className="absolute w-full object-cover h-0 rounded-md"
            initial={{
              height: imageHeightFrom,
              shadow: "0px 0px 0px 0px rgba(0, 0, 0, 1)",
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
              {place.title}
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
            {place.content.split("\n").map((paragraph, index) => (
              <motion.p className={index !== 0 ? "mt-3" : ""} key={index}>
                {paragraph}
              </motion.p>
            ))}
          </motion.div>
        </div>
      </div>
    </article>
  );
}
