import "../App.css";
import Image from "../images/mainPageBackground.png";

function Character({image, name}) {
    return (
        <>
        <button className="Btn">
            <div className="Character">
                <div className="Avatar">
                    <img
                        src={image}
                        alt={name}
                        width={300}
                        height={300}
                    ></img>
                </div>
                <div
                    className="Name py-sm-3 text-center fw-bold fs-5"
                    style={{ color: "#00ADB5" }}
                >
                    {name}
                </div>
            </div>
        </button>
        <div style={{height: '5rem'}}></div>
        </>
        /* <div className="Avatar text-center">
                    <img
                        src={Image}
                        alt="Avatar"
                        width={300}
                        height={300}
                    ></img>
                </div>
                <div
                    className="Name pt-4 text-center fw-bold fs-4"
                    style={{ color: "#00ADB5" }}
                >
                    Rick Sanchez
                </div> */
    );
}

export default Character;
