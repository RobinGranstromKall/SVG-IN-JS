import React from "react";
import {Button} from "../components/Button.jsx";
import {Subtitle} from "../components/Subtitle.jsx";
import {Title} from "../components/Title.jsx";

export default function Home() {
  return (
    <div style={{display: "flex", flex: 1, flexDirection: "column"}}>
      <Title>SVG i JS</Title>
      <p>
        Det jag har tänkt visa upp idag är några knep jag har plockat upp genom åren för att underlätta arbetet med SVG,
        eller Scalable Vector Graphic som det heter. Vi kan börja med att lite snabbt gå igenom vad det är som får SVG
        att fungera och vad det är bra för.
      </p>
      <Subtitle>Varför ska jag använda SVG?</Subtitle>
      <p>
        SVG är en bildformat som är skapad för att vara skalerbar, det betyder att du kan skala upp eller ner en bild
        utan att förlora kvalitén.
        Scalable vector graphics är i min mening den bästa valet för grafik på en hemsida, men som ni kanske märker kan
        det inte appliceras på samtliga grafiker utan lämpar sig bättre till vissa typer av grafik. Det finns egentligen
        en regel som man bör följa och täcker din grafik denna regel är SVG troligtvis det bästa valet.
        <ul>
          <li>
            SVG gör sig inte alls bra när det kommer till högdetaljerade bilder med många färger, så som foton. Då finns
            det andra filtyper att nyttja.
          </li>
        </ul>
        Varför jag säger att SVG är det bästa valet är av 5 anledningar:
        <ol>
          <li>Text I SVG är sökbar och kommer indexeras av sidan, skärmläsare kan läsa texten utan att behöva lägga till
            en alt-text. Detta underlättar för användare som har svårt att se eller för användare som använder en skärmläsare.
          </li>
          <li>Filerna blir mycket mindre än tex PNG och de går även att komprimera precis som du komprimerear annan
            text. Du kan alltså zippa en SVG och få den att bli ännu mindre.
          </li>
          <li>Filen innehåller inte bara resultatet utan även till viss del “projektet” och du kan när som helst gå in
            och justera text eller form utan att behöva exportera en ny fil, detta är lite sanning med modifikation då
            en riktig projektfil i ex illustrator innehåller information om exempelvis lager.
          </li>
          <li>Skalbar i oändlighet, du kan göra en SVG hur liten eller hur stor som helst utan att pixelering uppstår.
          </li>
          <li>Och nu till min bästa punk och varför vi egentligen är här idag. Scripting! Du kan med hjälp av tex
            JavaScript justera variabler i en SVG baserat på parametrar och få en SVG att byta färg eller form.
            Möjligheterna är enorma, men som med det mesta så ökar komplexiteten när dina krav ökar.
          </li>
        </ol>

      </p>
      <Subtitle>Hur fungerar det?</Subtitle>
      <p>
        SVG bygger på vektorer, vi behöver inte gå in på vad en vektor är exakt, men för att förklara lite kort så
        bygger det på formler som i sin tur skapar linjer med riktning och distans, du har även möjlighet att böja på
        riktningen samt fylla polygoner med en färg eller gradient.
        <br/>
        Det finns flera olika typer av svg element som man kan nyttja för att nämna några:
        <ul>
          <li>rect</li>
          <li>circle</li>
          <li>ellipse</li>
          <li>line</li>
          <li>polygon</li>
          <li>polyline</li>
          <li>text</li>
          <li>g</li>
          <li>path</li>
        </ul>
        <br/>
        Varje svg behöver en viewbox, detta är en rektangel som bestämmer hur stor bilden ska vara. Jag brukar se på det som din canvas, det är det du utgår ifrån när du ritar dina element.
        Vill du justera storleken så bör du inte använda viewbox för att ändra på det, utan använd width och height istället.
        Ni kommer se att i samtliga av mina exempel är viewboxen "0 0 100 100", detta gör det enkelt för mig att rita ut mina element. Sedan använder jag width och height för att justera storleken.
      </p>
      <Button to="/simple" />
    </div>
  );
}
