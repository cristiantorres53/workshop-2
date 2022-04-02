import React from "react";
import LadoDerecho from "../components/LadoDerecho";
import LadoIzquierdo from "../components/LadoIzquierdo";
import '../styles/App.css'


function App() {
  return (
    <div className="divflex">
      <LadoIzquierdo  />
      {/* <LadoDerecho  /> */}
    </div>
  );
}

export default App;
