import "../App.css";
import Image from "../images/mainPageBackground.png";

function Character() {
    return (
        <div className="Character">
            <div className="Name p-5 text-center">Rick Sanchez</div>
            <div className="Avatar text-center">
                <img src={Image} alt="Avatar" width={300} height={300}></img>
            </div>
        </div>
    );
}

export default Character;
