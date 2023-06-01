'use client';
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import ExtLink from '@/components/anchor/external';

export default function Home() {
  let router = useRouter();
  // let goingToPlace = router.query.id;
  let searchParams = useSearchParams();
  let goingToPlace = searchParams.get("slug");

  return (
    <div className="flex flex-col p-4 rounded-lg max-w-2xl m-auto bg-slate-100 gap-4 shadow-sm shadow-slate-500">
    {/* <div className="flex flex-col p-4 my-10 mx-2 rounded-lg bg-slate-100 gap-4 shadow-sm shadow-slate-500"> */}
      {/* TODO:: Add my own here? */}
      <h1 className="page--title">
        Places - Original
      </h1>
      
      <motion.div
        layoutId={`places-original`}
        className={`relative bg-slate-100 overflow-hidden px-4 mx-4 rounded-md`}
        transition={{ ease: "easeOut" }}
        // initial={{ height: 200 }}
        // animate={{ height: 200 }}
        style={{ originX: 0.5 }}
      >
        MVP original concept built by {` `}
        <ExtLink  href="https://github.com/ryanto/fmr-next-cross-route"
                  className='underline text-blue-500 hover:text-blue-700'
        >
          Ryan Toronto
        </ExtLink>
        , with some very minor animation and style tweaks to accommodate my layout.
      </motion.div>
    {/* </div>
    <div className="flex flex-col"> */}
      {places.map((place) => (
        <Link
          key={place.id}
          href={`/og/${place.id}`}
          passHref
          scroll={false}
          legacyBehavior
        >
          <motion.a
            className="relative block"
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
            }}
          >
            <motion.div
              layoutId={`photo-${place.id}`}
              className={`relative bg-gradient-to-tr ${place.blend} overflow-hidden`}
              transition={{ ease: "easeOut" }}
              initial={{ height: 600 }}
              animate={{ height: 400 }}
              style={{ originX: 0.5 }}
            >
              <motion.img
                layoutId={`image-${place.id}`}
                transition={{ ease: "easeOut" }}
                src={place.image}
                alt={place.name}
                className="absolute w-full object-cover mix-blend-soft-light"
                initial={{
                  height: 600,
                }}
                animate={{
                  height: 400,
                }}
                style={{
                  originX: 0.5,
                  objectPosition: place.position,
                }}
              />
            </motion.div>
            <div className="absolute bottom-0 left-0 z-10 pb-4 pl-4">
              <motion.div
                layoutId={`title-${place.id}`}
                transition={{ ease: "easeOut" }}
                animate={{ color: "#f8fafc" }}
              >
                <motion.h2
                  className="block text-5xl font-semibold tracking-tighter"
                  layout
                >
                  {place.name}
                </motion.h2>
              </motion.div>
            </div>
          </motion.a>
        </Link>
      ))}
    </div>
  );
}

export let places = [
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