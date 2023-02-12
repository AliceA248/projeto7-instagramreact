import react from "react"
import ReactDOM from "react-dom";



export default function PostA(props) {
    return (
        <div class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={props.imagemUsuario} />
                    {props.nomeUsuario}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img src={props.imagemConteudo} />
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src={props.imagemCurtida} />
                    <div class="texto">
                        Curtido por <strong>{props.nomeCurtida}</strong> e <strong>outras {props.quantidadeCurtidas} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}