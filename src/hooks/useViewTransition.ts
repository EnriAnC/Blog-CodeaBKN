import { MouseEvent } from "react";
import { flushSync } from "react-dom";
import { useNavigate } from "react-router-dom";

const useViewTransition = () => {

  const navigate = useNavigate();

  const handleViewTransition = (to: string) => (ev: MouseEvent) => {
    if (to === location.pathname) return
    if (!Boolean((document as any).startViewTransition)) {
      // Tipar artificialmente la view-transition-api
      (document as any).startViewTransition = (callback: () => void) => {
        setTimeout(() => callback(), 0);
      };
    }
    ev.preventDefault();
    (document as any).startViewTransition(() => {
      flushSync(() => {
        navigate(to);
      });
    });
  };  

  return { handleViewTransition };
};

export default useViewTransition;
