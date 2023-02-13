import ReactDOM from "react-dom";

export default function Stories() {

const storiesConteudo = [
    { nome: "9gag", imagem: "assets/img/9gag.svg" },
    { nome: "meowed", imagem: "assets/img/meowed.svg" },
    { nome: "barked", imagem: "assets/img/barked.svg" },
    { nome: "nathanwpylestrangeplanet", imagem: "assets/img/nathanwpylestrangeplanet.svg" },
    { nome: "waicomics", imagem: "assets/img/wawawicomics.svg" },
    { nome: "respondeai", imagem: "assets/img/respondeai.svg" },
    { nome: "filomoderna", imagem: "assets/img/filomoderna.svg"},
    { nome: "memeriagourmet", imagem: "assets/img/memeriagourmet.svg" }
]

    return (
        <div className="stories">
            {storiesConteudo.map((s) => (
            <div class="story">
                <img src={s.imagem} />
        <div class="usuario">
            {s.nome}
        </div>
         </div> ))}
         <div class="setinha">
                    <ion-icon name="chevron-forward-circle"></ion-icon>
                </div>
         </div>
    )
}