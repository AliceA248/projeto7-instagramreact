import ReactDOM from "react-dom";
import Usuario from "./Usuario";
import Sugestoes from "./Sugestoes";
import Links from "./Links";


export default function SiderBar() {
    return (
        <div class="sidebar">
            <Usuario />
            <div class="sugestoes">
                <div class="titulo">
                    Sugestões para você
                    <div>Ver tudo</div>
                </div>
                <Sugestoes
                    imagemSugestao="assets/img/bad.vibes.memes.svg"
                    nomeSugestao="bad.vibes.memes"
                />
                <Sugestoes
                    imagemSugestao="assets/img/chibirdart.svg"
                    nomeSugestao="chibirdart"
                />
                <Sugestoes
                    imagemSugestao="assets/img/razoesparaacreditar.svg"
                    nomeSugestao="razoesparaacreditar"
                />
                <Sugestoes
                    imagemSugestao="assets/img/adorable_animals.svg"
                    nomeSugestao="adorable_animals"
                />
                <Sugestoes
                    imagemSugestao="assets/img/smallcutecats.svg"
                    nomeSugestao="smallcutecats"
                />
                <Links />
            </div>
        </div>
    )
}