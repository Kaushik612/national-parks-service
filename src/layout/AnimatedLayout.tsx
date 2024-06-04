import { useState } from "react";
import { useOutlet } from "react-router-dom";
import Navbar from "../components/navbar";

const AnimatedLayout = () => {
  const o = useOutlet();
  const [outlet] = useState(o);

  return (
    <>
      <Navbar />
      {outlet}
    </>
  );
};

export default AnimatedLayout;
