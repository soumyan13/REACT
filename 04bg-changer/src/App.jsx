import { useState } from "react";

function App() {
  const [color, setColor] = useState("#ffffff");

  return (
    <>

      <div className="w-full h-screen duration-200 " style={{ backgroundColor: color }}>
        <div className="flex flex-wrap justify-center "> <div className="font-extrabold mt-28 text-white text-7xl">RAINBOW</div></div>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">
          <div className="flex flex-wrap justify-center gap-3 shadow-2xl bg-white px-3 py-2 rounded-xl">
            <button className="outline-none px-4 py-1 rounded-full shadow-lg text-white" style={{ backgroundColor: "red" }} onClick={() => setColor("red")}>Red</button>
            <button className="outline-none px-4 py-1 rounded-full shadow-lg text-white" style={{ backgroundColor: "green" }} onClick={() => setColor("green")}>Green</button>
            <button className="outline-none px-4 py-1 rounded-full shadow-lg text-white" style={{ backgroundColor: "blue" }} onClick={() => setColor("blue")}>Blue</button>
            <button className="outline-none px-4 py-1 rounded-full shadow-lg text-white" style={{ backgroundColor: "orange" }} onClick={() => setColor("orange")}>Orange</button>
            <button className="outline-none px-4 py-1 rounded-full shadow-lg text-white" style={{ backgroundColor: "yellow" }} onClick={() => setColor("yellow")}>Yellow</button>
            <button className="outline-none px-4 py-1 rounded-full shadow-lg text-white" style={{ backgroundColor: "indigo" }} onClick={() => setColor("indigo")}>Indigo</button>
            <button className="outline-none px-4 py-1 rounded-full shadow-lg text-white" style={{ backgroundColor: "violet" }} onClick={() => setColor("violet")}>Violet</button>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
