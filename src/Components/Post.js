import { useState } from "react"

export default function Post(props) {
    const { userName, userImage, contentImage, likedByImage, likedByText, initialLikesAmount, saved: isSaved, isLiked,} = props

    const [saved, setSaved] = useState(isSaved)
    const [liked, setLiked] = useState(isLiked)
    const [counter, setCounter] = useState(initialLikesAmount)
    const [animation, setAnimation] = useState(false)

    function clickImage(event) {
        if (event.detail === 2) {
            setAnimation(true)
            if (liked === false) {
                setCounter(counter + 1)
                setLiked(true)
            }
            setTimeout(() => {
                setAnimation(false)
            }, 500)
        }
    }


    
    function clickLike() {
        if (liked === false) {
            setCounter(counter + 1)
        } else {
            setCounter(counter - 1)
        }
        setLiked(!liked)
    }

    return (
        <div className="post">
            <div className="topo">
                <div className="usuario">
                    <img data-test="post-image" src={userImage} />
                    {userName}
                </div>
                <div className="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div className="conteudo">
                <img data-test="post-image" onClick={clickImage} src={contentImage} />
            </div>

            <div className="fundo">
                <div className="acoes">
                    <div>
                        <ion-icon data-test="like-post"
                            onClick={clickLike}
                            name={liked ? "heart" : "heart-outline"}
                            class={liked ? "liked" : ""}
                        ></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon data-test="save-post"onClick={() => setSaved(!saved)} name={saved ? "bookmark" : "bookmark-outline"}
                        >
                        </ion-icon>
                    </div>
                </div>

                <div className="curtidas">
                    <img src={likedByImage} />
                    <div className="texto">
                        Curtido por <strong data-test="likes-number" >{likedByText}</strong> e <strong>outras {counter} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}