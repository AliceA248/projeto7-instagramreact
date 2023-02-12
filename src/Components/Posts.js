import ReactDOM from "react-dom";
import PostA from "./Post";


export default function Posts() {
    return (
        <div className="posts">
            <PostA 
            imagemUsuario="assets/img/meowed.svg"
            nomeUsuario="meowed"
            imagemConteudo="assets/img/gato-telefone.svg"
            imagemCurtida="assets/img/respondeai.svg"
            nomeCurtida="respondeai"
            quantidadeCurtidas="1000"
            />
            <PostA 
            imagemUsuario="assets/img/meowed.svg"
            nomeUsuario="meowed"
            imagemConteudo="assets/img/gato-telefone.svg"
            imagemCurtida="assets/img/respondeai.svg"
            nomeCurtida="respondeai"
            quantidadeCurtidas="1000"
            />
  </div>
    )
}