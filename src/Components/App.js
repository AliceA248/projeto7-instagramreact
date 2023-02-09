import NavBar from "./NavBar"
import Posts from "./Posts"
import SideBar from "./SideBar"
import Stories from "./Stories"
import ReactDOM from "react-dom";


export default function App() {
    return (
        <div>
            <NavBar />
            <div className="corpo">
                <div className="esquerda">
                    <Stories />
                    <Posts />
                </div>
                <SideBar />
            </div>
        </div>
    )
}