import { useState } from "react"
import ReactDOM from "react-dom";

export default function Usuario() {

    const [nome, setNome] = useState("");
    const [imagem, setImagem] = useState("assets/img/catanacomics.svg");

    let frase = ! nome ? "Catanacomics" : `${nome}`
    let imagemPerfil = ! imagem ? "assets/img/catanacomics.svg" : `${imagem}`

    function MudarFoto() {
        const novaFoto = prompt("Qual o link da foto que deseja utilizar como de perfil?")
        setImagem(novaFoto)

    }

    function MudarNome() {
        const novoNome = prompt("Qual o seu nome?")
        setNome(novoNome)
    }
    return (
            <div className="usuario">
                <div data-test="profile-image" onClick={MudarFoto}>
                <img data-test="profile-image" src = {imagem}/>
                </div>
                <div class="texto">
                    <span className="usuarioNomePerfil" >
                        <strong data-test="name" >{frase}</strong>
                        <ion-icon data-test="edit-name" onClick={MudarNome} name="pencil"></ion-icon>
                    </span>
                </div>
            </div>
            )}
