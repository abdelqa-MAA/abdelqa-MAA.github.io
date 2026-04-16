import { useRef } from "react";
import { useInView } from "framer-motion";

export function useScrollAnimate(once = true) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-80px" });
  return { ref, isInView };
}
