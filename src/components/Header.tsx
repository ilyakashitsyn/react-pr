import { useState } from "react";
import logo from "../assets/react.svg";

export default function Header() {
  const [now, setNow] = useState(new Date());
  // const now = new Date();

  setInterval(() => setNow(new Date()), 1000);

  return (
    <header>
      <img src={logo} alt={"React Logo"} />
      {/* <h3>Result React</h3> */}

      <span>Just time: {now.toLocaleTimeString()}</span>
    </header>
  );
}
