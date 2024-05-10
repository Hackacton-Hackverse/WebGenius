import React, { useState } from "react";
import Viz from "viz.js";
import { Module, render } from "viz.js/full.render.js";

const Graph = () => {
  const [graphData, setGraphData] = useState("");

  const generateGraph = () => {
    // Vous pouvez récupérer les données du graphe depuis un formulaire ou tout autre moyen
    const graphData = `digraph {
      A -> B;
      B -> C;
      C -> A;
    }`;

    const viz = new Viz({ Module, render });
    viz
      .renderSVGElement(graphData)
      .then((element) => {
        setGraphData(element);
      })
      .catch((error) => {
        console.error("Erreur lors de la génération du graphe :", error);
      });
  };

  return (
    <div>
      <button onClick={generateGraph}>Générer le graphe</button>
      <div dangerouslySetInnerHTML={{ __html: graphData }} />
    </div>
  );
};

export default Graph;
