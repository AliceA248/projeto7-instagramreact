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
        <div className="sidebar">
            <Usuario/>
            <div className="sugestoes">
                <div className="titulo">
                    Sugestões para você
                    <div>Ver tudo</div>
                </div>
                {sugestaoInfo.map((s) => (
                    <div className="sugestao">
                        <div className="usuario">
                            <img src={s.imagemSugestao} />
                            <div className="texto">
                                <div className="nome">{s.nomeSugestao}</div>
                                <div className="razao">Segue você</div>
                            </div>
                        </div>
                        <div className="seguir">Seguir</div>
                    </div>
                ))}
                <Links/>
            </div>
            </div>
            )
}
