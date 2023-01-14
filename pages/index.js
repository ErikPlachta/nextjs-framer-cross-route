import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
// import places from "./places/context/places"; 

export default function Home() {
  let router = useRouter();
  let goingToPlace = router.query.id;

  return (
    <div>
      <div className="flex flex-col">
        {/* TODO:: Add my own here? */}
      </div>
    </div>
  );
}