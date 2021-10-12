import "../App.css";

function Character({image, name, handleClick, id, getCurrentCharacter}) {
    return (
        <>
        <button className="Btn">
            <div className="Character">
                <div className="Avatar" onClick={() => {handleClick(); getCurrentCharacter(id);}}>
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
