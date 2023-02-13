import { useState } from "react";
import ReactDOM from "react-dom";

export default function Usuario() {

    const [nome, setNome] = useState("");

    let frase = ! nome ? "Catanacomics" : `${nome}`

    function MudarNome() {
        const novoNome = prompt("Qual o seu nome")
        setNome(novoNome)
    }
    return (
            <div class="usuario">
                <img src="assets/img/catanacomics.svg" alt="imagem de perfil" />
                <div class="texto">
                    <span className="usuarioNomePerfil" >
                        <strong >{frase}</strong>
                        <ion-icon onClick={MudarNome} name="pencil"></ion-icon>
                    </span>
                </div>
            </div>
            )}
