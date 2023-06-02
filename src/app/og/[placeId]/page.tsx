'use client';
import { useRouter, usePathname} from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { motion, useAnimation, animate } from "framer-motion";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Place({params}:any) {

  let router = useRouter();
  let pathname = usePathname();
  let [id] = useState(params.placeId);
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
        if (pathname === "/og/[placeId]") {
          requestAnimationFrame(() => {
            window.scrollTo(0, latest);
          });
        }
      },
      onComplete() {
        if (pathname === "/og/[placeId]") {
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




  if(!place) return (
    <div className="flex flex-col py-0 px-0 mx-auto gap-4 rounded-lg max-w-2xl overflow-hidden bg-slate-100 shadow-sm shadow-slate-500">
      <div className="relative px-6">
        ERROR: Place not found with place id: ${id}
      </div>
    </div>
  );


  
  return (
    <div  className={  `flex flex-col py-0 px-0 mx-auto gap-4 rounded-lg max-w-2xl overflow-hidden `
                    +   `bg-slate-100 shadow-sm shadow-slate-500`
      }
    >
        <div className="relative px-6">
          <Link href="/og" passHref scroll={false} legacyBehavior>
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
  );
};

let places = [
  {
    id: "lake-como",
    name: "Lake Como",
    image: "/assets/images/places/lake-como.jpg",
    position: "center 56%",
    blend: "from-red-900/20 to-amber-300/20",
    about:
      "Lake Como (Italian: Lago di Como [ˈlaːɡo di ˈkɔːmo], locally [ˈkoːmo]; Western Lombard: Lagh de Còmm [ˈlɑː‿dːe ˈkɔm],[a] Cómm [ˈkom] or Cùmm [ˈkum]), also known as Lario (Italian: [ˈlaːrjo]; after the Latin: Larius Lacus), is a lake of glacial origin in Lombardy, Italy. It has an area of 146 square kilometres (56 sq mi), making it the third-largest lake in Italy, after Lake Garda and Lake Maggiore. At over 400 metres (1,300 ft) deep, it is the fifth deepest lake in Europe, and the deepest outside Norway; the bottom of the lake is more than 200 metres (660 ft) below sea level.",
  },
  {
    id: "aspen",
    name: "Aspen",
    image: "/assets/images/places/aspen.jpg",
    position: "58% 50%",
    blend: "from-purple-500/20 to-blue-500/20",
    about:
      'Founded as a mining camp during the Colorado Silver Boom and later named Aspen for the abundance of aspen trees in the area, the city boomed during the 1880s, its first decade. The boom ended when the Panic of 1893 led to a collapse of the silver market. For the next half-century, known as "the quiet years", the population steadily declined, reaching a nadir of fewer than 1000 by 1930.\n Aspen\'s fortunes recovered in the mid-20th century when neighboring Aspen Mountain was developed into a ski resort, and industrialist Walter Paepcke bought many properties in the city in the 1950s and redeveloped them. Today it is home to three institutions, two of which Paepcke helped found, that have international importance: the Aspen Music Festival and School, the Aspen Institute, and the Aspen Center for Physics.',
  },
  {
    id: "nyc",
    name: "New York City",
    image: "/assets/images/places/nyc.jpg",
    position: "center 15%",
    blend: "from-slate-800/60 to-slate-100/60",
    about:
      "New York, often called New York City[a] or NYC, is the most populous city in the United States. With a 2020 population of 8,804,190 distributed over 300.46 square miles (778.2 km2), New York City is also the most densely populated major city in the United States, and is more than twice as populous as second-place Los Angeles. New York City lies at the southern tip of New York State, and constitutes the geographical and demographic center of both the Northeast megalopolis and the New York metropolitan area, the largest metropolitan area in the world by urban landmass.[8] With over 20.1 million people in its metropolitan statistical area and 23.5 million in its combined statistical area as of 2020, New York is one of the world's most populous megacities, and over 58 million people live within 250 mi (400 km) of the city.[9] New York City is a global cultural, financial, entertainment, and media center with a significant influence on commerce, health care and life sciences,[10] research, technology,[11] education, politics, tourism, dining, art, fashion, and sports. Home to the headquarters of the United Nations, New York is an important center for international diplomacy,[12][13] an established safe haven for global investors, and is sometimes described as the capital of the world.",
  },
];