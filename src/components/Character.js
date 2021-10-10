import "../App.css";

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
                        className="CharacterImg"
                    ></img>
                </div>
                <div
                    className="Name py-3 text-center fw-bold fs-5"
                    style={{ color: "#00ADB5" }}
                >
                    {name}
                </div>
            </div>
        </button>
        </>
    );
}

export default Character;
