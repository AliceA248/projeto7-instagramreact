import ReactDOM from "react-dom";
import Story from "./Story";

export default function Stories() {
    return (
            <div class="stories">
                <Story
                imagemUsuario="assets/img/9gag.svg"
                nomeUsuario="9gag"
                />
                <Story
                imagemUsuario="assets/img/meowed.svg"
                nomeUsuario="meowed"
                />
                <Story
                imagemUsuario="assets/img/barked.svg"
                nomeUsuario="9gag"
                />
                <Story
                imagemUsuario="assets/img/nathanwpylestrangeplanet.svg"
                nomeUsuario="9gag"
                />
                <Story
                imagemUsuario="assets/img/wawawicomics.svg"
                nomeUsuario="9gag"
                />
                <Story
                imagemUsuario="assets/img/respondeai.svg"
                nomeUsuario="9gag"
                />
                <Story
                imagemUsuario="assets/img/filomoderna.svg"
                nomeUsuario="9gag"
                />
                <Story
                imagemUsuario="assets/img/memeriagourmet.svg"
                nomeUsuario="9gag"
                />
                <div class="setinha">
                    <ion-icon name="chevron-forward-circle"></ion-icon>
                </div>
            </div>
    )
}