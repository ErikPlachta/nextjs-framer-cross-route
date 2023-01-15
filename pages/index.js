import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

export default function Home() {
  let router = useRouter();

  return (
    <div>
      <div className="flex flex-col">
        {/* TODO:: Add my own here? */}
        <h1>Places Concept</h1>

        <Link href="/places" passHref>
          {/* <motion.a
            className="relative block"
            initial="hidden"
            animate="showing"
            exit="hidden"
            variants={{
              hidden: {
                opacity: 0,
              },
              showing: {
                opacity: 1,
              },
            }}
          > */}
            <motion.div
              layoutId={`places-original`}
              className={`relative bg-gradient-to-tr from-blue-400 to-blue-600 overflow-hidden p-4 m-4`}
              transition={{ ease: "easeOut" }}
              initial={{ height: 200 }}
              animate={{ height: 200 }}
              style={{ originX: 0.5 }}
            >
              Places - Original
            </motion.div>
          {/* </motion.a> */}
        </Link>

        <Link href="/places-new" passHref>
          {/* <motion.a
            className="relative block"
            initial="hidden"
            animate="showing"
            exit="hidden"
            variants={{
              hidden: {
                opacity: 0,
              },
              showing: {
                opacity: 1,
              },
            }}
          > */}
            <motion.div
              layoutId={`places-new`}
              className={`relative bg-gradient-to-tr from-blue-400 to-blue-600 overflow-hidden p-4 m-4`}
              transition={{ ease: "easeOut" }}
              initial={{ height: 600 }}
              animate={{ height: 200 }}
              style={{ originX: 0.5 }}
            >
              Places - New
            </motion.div>
          {/* </motion.a> */}
        </Link>

      </div>
    </div>
  );
}