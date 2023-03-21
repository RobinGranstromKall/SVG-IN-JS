import React from 'react';
import {Button} from "../components/Button.jsx";
import CodeBlock from "../components/CodeBlock.jsx";
import {Row} from "../components/Row.jsx";
import {ReactComponent as TowTruck} from "../assets/tow_truck.svg";
import towTruckCode from "../assets/tow_truck_code.png";
import {Title} from "../components/Title.jsx";


function Square({
  size = 100,
  stroke = 'white',
  fill = 'transparent',
  strokeWidth = 1,
  rectangleProps = {}
}) {
  const viewBox = 100;
  return (
    <svg
      viewBox={`0 0 ${viewBox} ${viewBox}`}
      height={size}
      width={size}
      transform="rotate(45 50 50)"
      xmlns="http://www.w3.org/2000/svg">
      <rect
        x="5"
        y="5"
        width="90"
        height="90"
        strokeWidth={strokeWidth}
        stroke={stroke}
        fill={fill}
        {...rectangleProps}
      />
    </svg>
  )
}

const squareCodeExample = `function Square({
  size = 100,
  stroke = 'white',
  fill = 'transparent',
  strokeWidth = 1
}) {
  return (
    <svg
      viewBox="0 0 100 100"
      height={size}
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      
    >
      <rect
        x="5"
        y="5"
        width="90"
        height="90"
        strokeWidth={strokeWidth}
        stroke={stroke}
        fill={fill}
      />
    </svg>
  )
}`;

const squareCodeUsage = [
  `<Square/>      `,
  `<Square 
  strokeWidth={4} 
/>`,
    `<Square 
  size={200} 
  strokeWidth={2} 
  stroke="rebeccapurple"
/>`,
    `<Square 
  strokeWidth={0} 
  fill="hotpink"
/>`
]

function Squares() {
  return (
      <>
        <Title>Enklare former</Title>
        <p>
          I de allra flesta fall så kommer du inte skapa en svg från grunden utan du kommer att använda dig av någon form av designverktyg.
          Men i vissa lägen kan man som utvecklare skapa egen design i en svg med hjälp av dom vanliga formerna som rektangel, cirkel, linje och polygon.
          Man kan rätt enkelt modifiera färger och tjocklekar på en svg,
          det är bara att lägga till attribut och med hjälp av props kan du ha default värden och justera dom som du behagar.
          <br />
          Detta går att applicera i många lägen där du har varianter av ikoner eller liknande. Jag har lite exempel här nedan som vi kan gå igenom.
        </p>
          <CodeBlock wrapperStyle={{marginTop: "1rem"}}>
            {squareCodeExample}
          </CodeBlock>
          <h2>Exempel</h2>
          <p>
            Här har jag gjort en komponent som heter Square som tar emot några props och returnerar en svg med en rektangel.
            <br />
            Nu är detta ett rätt enkelt exempel där man endast kan ändra storleken, färgen & tjockleken på ramen och ifyllnadsfärg.
            Men som du kanske märker så kan du ändra precis vilket värde du vill.
          </p>
          <div
            style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: "1rem"}}
          >
            <Row style={{justifyContent: "space-between", width: "100%"}}>
              <CodeBlock showLineNumbers={false}>
                {squareCodeUsage[0]}
              </CodeBlock>
              <Square/>
            </Row>
            <Row style={{justifyContent: "space-between", width: "100%"}}>
              <CodeBlock showLineNumbers={false}>
                {squareCodeUsage[1]}
              </CodeBlock>
              <Square strokeWidth={4} stroke="rebeccapurple"/>
            </Row>
            <Row style={{justifyContent: "space-between", width: "100%"}}>
              <CodeBlock showLineNumbers={false}>
                {squareCodeUsage[2]}
              </CodeBlock>
              <Square size={200} strokeWidth={2} stroke="rebeccapurple"/>
            </Row>
            <Row style={{justifyContent: "space-between", width: "100%"}}>
              <CodeBlock showLineNumbers={false}>
                {squareCodeUsage[3]}
              </CodeBlock>
              <Square strokeWidth={0} fill="hotpink"/>
            </Row>
            <p>
              Här har vi ett exempel från ett tidigare projekt.
              När jag började i projektet fanns det en mapp med 144 svg filer,
              varje fil var en svg på en bil som hade 36 olika rotationsvinklar och 4 färgvarianter.
              Jag tog den svgn som inte hade någon rotation och modifierade färg och rotation via props.
              Utöver att vi slapp 143 filer så var det också enklare att lägga till
              ytterligare färger och vi fick decimalprecision på rotationen och inte 10-steg som innan.
              Senare behövde vi även ha en siffra för att indikera bärgarens kölängd,
              då kunde vi rätt enkelt lägga till en prop för det och dynamiskt visa en cirkel med en siffra i mitten.

            </p>
            <Row>
              <img src={towTruckCode} alt="Code Snippet"/>
              <TowTruck />
            </Row>
            <Button to="/paths" />
        </div>
      </>
  );
}

export default Squares;
