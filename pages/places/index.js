import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import places from "./context/places"; 

export default function Places() {
  let router = useRouter();
  let goingToPlace = router.query.id;

  return (
    <div>
      <div className="flex flex-col">
        {places.map((place) => (
          <Link
            key={place.id}
            href={`/places/${place.id}`}
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
                    originX: 1,
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
                  <motion.h1
                    className="block text-5xl font-semibold tracking-tighter"
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
    </div>
  );
};
