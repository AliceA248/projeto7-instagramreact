import ReactDOM from "react-dom";

const fotoPost = [
    'assets/img/gato-telefone.svg" alt="gato-telefone',
    'assets/img/dog.svg" alt="dog"',
]

function Post(props){
            <div class="post">
                <div class="topo">
                    <div class="usuario">
                        <img src={props.imagemUsuario} />
                        {props.textoUsuario}
                    </div>
                    <div class="acoes">
                        <ion-icon name="ellipsis-horizontal"></ion-icon>
                    </div>
                </div>

                <div class="conteudo">
                    <img src={props.fotoConteudo} />
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
                        <img src={props.fotoCurtidas} />
                        <div class="texto">
                            Curtido por <strong>{props.nomeCurtida}</strong> e <strong>outras v{props.quantidadeCurtida} pessoas</strong>
                        </div>
                    </div>
                </div>
            </div>

}

export default function Posts(){
    return (
    <div class="posts">
        <Post 
        imagemUsuario ="assets/img/meowed.svg" 
        textoUsuario = "meowed" 
        fotoConteudo = "assets/img/gato-telefone.svg" 
        fotoCurtidas = "assets/img/respondeai.svg"
        nomeCurtida = "respondeai"
        quantidadeCurtida = "101.523"
         /> 
        <Post 
        imagemUsuario = "assets/img/meowed.svg" 
        textoUsuario = "meowed" 
        fotoConteudo = "assets/img/gato-telefone.svg"
        fotoCurtidas = "assets/img/respondeai.svg"
        nomeCurtida = "respondeai"
        quantidadeCurtida = "101.523"
        />
    </div>
    )

}

