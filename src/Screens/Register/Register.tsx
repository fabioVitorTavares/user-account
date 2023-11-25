import { useEffect, useLayoutEffect, useRef, useState } from "react";

export default function Register() {
  const [count] = useState<number>(0);

  const c = useRef<number>(0);

  useLayoutEffect(() => {
    console.log("[9]: >>>", c);
  }, [c]);

  useEffect(() => {
    console.log("[13]: >>>", c);
  }, [c]);

  function increment() {
    console.log("[17]: >>>", c);
    c.current = c.current + 1;
  }

  return (
    <>
      <h1> Register</h1>
      <h1> {c.current}</h1>
      <button onClick={increment}>count</button>
    </>
  );
}
