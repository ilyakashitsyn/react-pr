import "./App.css";
import Header from "./components/Header";
import Button from "./components/Button/Button";
import { useState } from "react";

function WayToText({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <li>
      <p>
        <strong>{title}</strong>: {description}
      </p>
    </li>
  );
}

export default function App() {
  const [content, setContent] = useState("Нажми на кнопку");

  // let content = "Нажми на кнопку";

  function handleClick(vaul: string) {
    console.log("button click", vaul);
    setContent(vaul);
    // content = vaul;
  }

  return (
    <div>
      <Header />

      <main>
        <h1>Hello React!</h1>
        <section>
          <h3>Lorem ipsum</h3>
          <ul>
            <WayToText title="123" description="lorem ipsum" />
          </ul>

          <Button onClick={() => handleClick("way")}>Подход</Button>
          <Button onClick={() => handleClick("easy")}>Доступ</Button>
          <Button onClick={() => handleClick("js")}>Категория</Button>
          <p>{content}</p>
        </section>
      </main>
    </div>
  );
}
