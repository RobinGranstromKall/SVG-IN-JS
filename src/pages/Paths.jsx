import React from "react";
import {Button} from "../components/Button.jsx";
import CodeBlock from "../components/CodeBlock.jsx";
import {Title} from "../components/Title.jsx";

const pathCodeExample = `<svg
  height="100"
  width="100"
  viewBox="0 0 100 100"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M 5 5 H 95 V 95 H 5 L 5 5"
    fill="transparent"
    stroke="white"
    stroke-width="1"
  />
</svg>`;

export default function Paths() {
  return (
    <div style={{display: "flex", flex: 1, flexDirection: "column"}}>
      <Title>Paths</Title>
      <p>
        Paths är nog det vanligaste elementet som används när en designer gör svg-illustrationer,
        den har möjlighet att ta vilken form som helst och är väldigt flexibel.
        Där den kanske tappar lite är läsbarheten,
        det är svårt att titta på en komplicerad path och förstå hur den kommer se ut. Men man kan förhansvisa en svg i en webbläsare,
        i vscode(med plugin) eller intellij och se hur den ser ut.
        Vi har ett enklare exempel på en path här nedan som vi kan gå igenom.
      </p>
      <CodeBlock wrapperStyle={{marginTop: "1rem"}}>
        {pathCodeExample}
      </CodeBlock>
      <p>
        Jag hade en tanke här att gå igenom varje enskilt kommando i "d" variabeln, men jag insåg att det snabbt blev
        ett himla malande om värden, så jag ska försöka gå igenom det lite kortare.
        Alla dessa kommandon är en del av SVGs path syntax, och finns dokumenterade här: <a
        href="https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths"
        target="_blank">https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths</a>
        <br/>
        <br/>
        M: Flyttar din punkt utan att göra ett streck, man måste alltid börja en path med att flytta in punkten på en
        plats i viewboxen.
        <br/>
        L: Ritar en linje från punkten du står på till koordinaten du anger
        <br/>
        V: Är en förkortning på L och gör en linje vertikalt och tar således bara ett värde
        <br/>
        H: Är samma sak som V fast horisontellt
        <br/>
        Z: Drar ett streck från din nuvarande punkt till startpunken.
        <br/>
        Vi har även en hel del kommandon för att göra kurvade streck, C & S gör kurvade streck med 2 kontrollpunkter, Q
        & T gör kurvade streck med en kontrollpunkt, A gör en båge. (NÄMN VAD MOTSVARANDE VERKTYG I IL HETER)
      </p>
      <p>
        Men för att vara helt ärlig kommer man nog oftast inte skriva dessa paths själv, det är mycket lättare att
        använda sig av någon form av grafisk editor, jag har använt mig av Figma och Adobe Illustrator även Adobe XD har
        möjligheten att skapa svgs.
        Har ni en designer i teamet kan man ju be be lite snällt om en svg, klugiheten för designern blir då att skapa
        en svg som har vettiga paths som är lätta att manipulera i koden. Ett tips är att skapa så få paths som möjligt.
      </p>
      <Button to="/arrowToX" />
    </div>
  );
}
