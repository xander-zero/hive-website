import { useRouter } from "next/router";
import { useEffect } from "react";

const UseScrollTop = () => {
  const router = useRouter();

  useEffect(() => {
    window.scroll({ top: 0, left: 0 });
    window.scrollTo(0, 0);
    console.log("first");
  }, [router.pathname]);

  return null;
};

export default UseScrollTop;
