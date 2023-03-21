import React, {useState} from 'react';
import useEasing from "use-easing";
import {Button} from "../components/Button.jsx";
import CodeBlock from "../components/CodeBlock.jsx";
import {Column} from "../components/Column.jsx";
import {Subtitle} from "../components/Subtitle.jsx";
import {Title} from "../components/Title.jsx";

function ArrowToXCSS({size = 100, color = 'white', strokeWidth = 1}) {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen((value) => !value);
  return (
    <svg style={{padding: "2rem"}} onClick={() => toggle()} height={size} width={size} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <line
        className={open ? "arrowToXLeft" : null}
        stroke={color}
        strokeWidth={strokeWidth}
        x1="0" y1="50"
        x2="50" y2="100"
      />
      <line
        className={open ? "arrowToXRight" : null}
        stroke={color}
        strokeWidth={strokeWidth}
        x1="50" y1="100"
        x2="100" y2="50"
      />
    </svg>
  )
}

const ArrowToXCSSCode = `
function ArrowToXCSS({size = 100, color = 'white', strokeWidth = 1}) {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen((value) => !value);
  return (
    <svg 
      onClick={() => toggle()} 
      height={size} 
      width={size} 
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        className={open ? "arrowToXLeft" : null}
        stroke={color}
        strokeWidth={strokeWidth}
        x1="0" y1="50"
        x2="50" y2="100"
      />
      <line
        className={open ? "arrowToXRight" : null}
        stroke={color}
        strokeWidth={strokeWidth}
        x1="50" y1="100"
        x2="100" y2="50"
      />
    </svg>
  )
}`;

function ArrowToXAnimate({size = 100, color = 'white', strokeWidth = 1}) {
  const [endValue, setEndValue] = useState(25);
  const [endRotValue, setEndRotValue] = useState(90);
  const onEnd = () => {
    setTrigger(false);
    setEndValue((v) => v === 25 ? 0 : 25);
  }
  const onRotEnd = () => {
    setRotTrigger(false);
    setEndRotValue((v) => v === 90 ? 0 : 90);
  }

  const { value, setTrigger } = useEasing({ end: endValue, duration: 0.5, autoStart: false, onEnd });
  const { value: rotValue, setTrigger: setRotTrigger } = useEasing({ end: endRotValue, duration: 0.5,  autoStart: false, onEnd: onRotEnd });
  const onClick = () => {
    setTrigger(true);
    setRotTrigger(true);
  }

  return (
    <svg style={{padding: "2rem"}} onClick={onClick} height={size} width={size} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <line
        stroke={color}
        strokeWidth={strokeWidth}
        x1="0"
        y1="50"
        x2="50"
        y2="100"
        transform={`translate(${value} ${value}) rotate(${rotValue} 50 50)`}
      />
      <line
        stroke={color}
        strokeWidth={strokeWidth}
        x1="50"
        y1="100"
        x2="100"
        y2="50"
        transform={`translate(-${value} ${value}) rotate(-${rotValue} 50 50)`}
      />
    </svg>
  )
}

const ArrowToXAnimateCode = `
function ArrowToXAnimate({size = 100, color = 'white', strokeWidth = 1}) {
  const [endValue, setEndValue] = useState(25);
  const [endRotValue, setEndRotValue] = useState(90);
  const onEnd = () => {
    setTrigger(false);
    setEndValue((v) => v === 25 ? 0 : 25);
  }
  const onRotEnd = () => {
    setRotTrigger(false);
    setEndRotValue((v) => v === 90 ? 0 : 90);
  }

  const { value, setTrigger } = useEasing({ end: endValue, duration: 0.5, autoStart: false, onEnd });
  const { 
    value: rotValue, 
    setTrigger: setRotTrigger 
  } = useEasing({ end: endRotValue, duration: 0.5,  autoStart: false, onEnd: onRotEnd });
  const onClick = () => {
    setTrigger(true);
    setRotTrigger(true);
  }

  return (
    <svg
      onClick={onClick}
      height={size}
      width={size}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        stroke={color}
        strokeWidth={strokeWidth}
        x1="0"
        y1="50"
        x2="50"
        y2="100"
        transform={\`translate(\${value} \${value}) rotate(\${rotValue} 50 50)\`}
      />
      <line
        stroke={color}
        strokeWidth={strokeWidth}
        x1="50"
        y1="100"
        x2="100"
        y2="50"
        transform={\`translate(-\${value} \${value}) rotate(-\${rotValue} 50 50)\`}
      />
    </svg>
  )
}`
function ArrowToX() {
  return (
    <div
      style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}
    >
      <Title>Animationer</Title>
      <p>
        Du kan även animera svg-element med hjälp av CSS eller med hjälp av JavaScript.
        Enklare rotationer eller så kanske görs enklast med CSS,
        men vill du animera 2 eller fler objekt samtidigt så är det troligtvis lättast att göra det med JavaScript.
        Här kan man även dra nytta av 'g' taggen som är en grupp-tag.
        Detta gör att du kan applicera samma transform på flera element samtidigt.
      </p>
      <Subtitle>Med CSS</Subtitle>
      <p>
        Här är ett exempel på en enkel animation med hjälp av CSS.
        Jag har gett varje linje en egen klass som jag sedan kan använda för att animera dem.
        Detta blir lite krångligt i många lägen då vardera linje behöver sin egen animation och utan något css-ramverk så blir det mycket kod.
        <br/>
        En annan anledning till att jag oftast inte använder css är att definitionen av svgn ligger i js koden medans animeringen ligger i css koden,
        detta kan göra det lite mer svårläst och krångligt att hitta rätt.
      </p>
      <Column style={{marginTop: "1rem"}}>
        <ArrowToXCSS size={300}/>
        <CodeBlock>
          {ArrowToXCSSCode}
        </CodeBlock>
      </Column>
      <Subtitle>Med JS</Subtitle>
      <p>
        Här har vi ett exempel som inte använder css. Jag har använt mig av en hook för att skapa ett easing-värde.
        Man kan använda sig av någon annan lösning för att stegvis öka ett värde.
        Det finns animeringsbibliotek ex "react-spring"
        som kan göra detta åt en alternativt en rekursiv funktion som stegar upp ett värde till ett visst värde.
        <br/>

      </p>
      <Column>
        <ArrowToXAnimate size={300}/>
        <CodeBlock>
          {ArrowToXAnimateCode}
        </CodeBlock>
      </Column>
      <Button to="/thanks" />
    </div>
  );
}

export default ArrowToX;
