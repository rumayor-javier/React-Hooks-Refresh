import { useEffect } from "react";

export const Message = () => {
  useEffect(() => {
    const onMouseMove = (e) => {
      console.log(e);
    };
    window.addEventListener("mousemove", onMouseMove);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <>
      <h3>Username already exist</h3>
    </>
  );
};
