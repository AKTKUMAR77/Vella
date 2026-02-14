import { useState } from "react";
import "./App.css";
import image from "./assets/image.png";

function Flower() {
  const [count, setCount] = useState(0);

  return <img className="iii" src={image} alt="flower" />;
}

export default Flower;
