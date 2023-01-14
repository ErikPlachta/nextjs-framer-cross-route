import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import places from "./context/places"; 


/** Places Page.
 * 
 */
export default function Places() {
  let router = useRouter();
  let goingToPlace = router.query.id;

  let imageHeightFrom = '100vh';
  let ImageHeightTo   = '25vh';

  return (
    
      <div className="flex flex-col p-4 m-10 rounded-lg bg-slate-100 gap-2 shadow-sm shadow-slate-500">
        <motion.div
            layoutId={`title-h1}`}
            transition={{ ease: "easeOut" }}
            initial={{ color: "#f8fafc" }}
            animate={{ color: "#111827" }}
            className="relative z-10"
          >
            <motion.h1
              className="block text-5xl tracking-tighter pb-10"
              layout
            >
              Places
            </motion.h1>
          </motion.div>

        {places.map((place) => (
          <Link
            key={place.id}
            href={`/places/${place.id}`}
            passHref
            scroll={false}
            legacyBehavior
          >
            
            {/** Parent Element around each place.
             * 
            */}
            <motion.a
              className="relative block mx-2 shadow-black drop-shadow-md overflow-hidden"
              initial="hidden"
              animate="showing"
              exit={place.id === goingToPlace ? "showing" : "hidden"}
              variants={{
                hidden: {
                  opacity: 0,
                },
                showing: {
                  opacity: .9,
                  filter: 'brightness(90%)'
                },
                whileHover: {
                  scale: 1.025,
                  opacity: 1,
                  filter: 'brightness(100%)'
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
                initial={{ height:  imageHeightFrom}}
                animate={{ height: ImageHeightTo }}
                style={{ originX: 0.5 }}
                
              >
                
                {/** Image of place.
                 * 
                 */}
                <motion.img
                  layoutId={`image-${place.id}`}
                  transition={{ ease: "easeOut" }}
                  src={place.image}
                  alt={place.name}
                  className="absolute w-full object-cover mix-blend-soft-light"
                  initial={{
                    height: imageHeightFrom,
                  }}
                  animate={{
                    height: ImageHeightTo,
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
                  transition={{ ease: "easeOut" }}
                  animate={{ color: "#f8fafc" }}
                >
                  <motion.h1
                    className="block text-2xl font-semibold tracking-tighter"
                    layout
                  >
                    {place.name}
                  </motion.h1>
                </motion.div>
              </div>
            </motion.a>
          </Link>
        ))}
      </div>
  );
};
