import { useState } from "react";
import ReactDOM from "react-dom";
import Links from "./Links";
import Usuario from "./Usuario";
export default function Sugestoes() {


    const sugestaoInfo = [
        { imagemSugestao: "assets/img/bad.vibes.memes.svg", nomeSugestao: "bad.vibes" },
        { imagemSugestao: "assets/img/chibirdart.svg", nomeSugestao: "chibirdart" },
        { imagemSugestao: "assets/img/razoesparaacreditar.svg", nomeSugestao: "razoesparaacreditar" },
        { imagemSugestao: "assets/img/adorable_animals.svg", nomeSugestao: "adorable_animals" },
        { imagemSugestao: "assets/img/smallcutecats.svg", nomeSugestao: "smallcutecats" },
    ]


    return (
        <div class="sidebar">
            <Usuario/>
            <div class="sugestoes">
                <div class="titulo">
                    Sugestões para você
                    <div>Ver tudo</div>
                </div>
                {sugestaoInfo.map((s) => (
                    <div class="sugestao">
                        <div class="usuario">
                            <img src={s.imagemSugestao} />
                            <div class="texto">
                                <div class="nome">{s.nomeSugestao}</div>
                                <div class="razao">Segue você</div>
                            </div>
                        </div>
                        <div class="seguir">Seguir</div>
                    </div>
                ))}
                <Links/>
            </div>
            </div>
            )
}
