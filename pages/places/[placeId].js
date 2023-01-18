import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { places } from "./index";
import { motion, useAnimation, animate } from "framer-motion";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Place() {
  let router = useRouter();
  let [id] = useState(router.query.placeId);
  let place = places.find((p) => p.id === id);

  let didStart = useRef(false);
  let pageAnimations = useAnimation();

  let startScrolling = () => {
    didStart.current = true;
    let current = document.documentElement.scrollTop;
    let to = 0;

    animate(current, to, {
      ease: "easeOut",
      onUpdate(latest) {
        if (router.pathname === "/places/[placeId]") {
          requestAnimationFrame(() => {
            window.scrollTo(0, latest);
          });
        }
      },
      onComplete() {
        if (router.pathname === "/places/[placeId]") {
          pageAnimations.start("showing");
        }
      },
    });
  };

  useEffect(() => {
    let id = setTimeout(() => {
      if (!didStart.current) {
        pageAnimations.start("showing");
      }
    }, 300);

    return () => clearTimeout(id);
  }, [pageAnimations]);

  return (
    <div  className={  `flex flex-col mt-10 mb-10 py-0 px-0 mx-auto gap-4 rounded-lg max-w-2xl overflow-hidden `
                    +   `bg-slate-100 shadow-sm shadow-slate-500`
      }
    >
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
              className="absolute w-full object-cover"
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