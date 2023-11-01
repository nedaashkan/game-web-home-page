import { useState } from "react";
import EmblaCarousel from "./EmblaCarousel";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <EmblaCarousel />
    </div>
  );
}

export default App;
