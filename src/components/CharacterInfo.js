import "../App.css";

function CharacterInfo({ items, handleClick }) {
    return (
        <div className="CharacterInfo">
            <div className="row">
                <div className="col">
                    <img src="https://via.placeholder.com/300" alt="alt"></img>
                </div>
                <div className="col">
                    something <br />
                    something <br />
                    something <br />
                    something
                </div>
                <div className="col">
                    something <br />
                    something <br />
                    something <br />
                </div>
            </div>
            <button onClick={handleClick}>arrow</button>
        </div>
    );
}

export default CharacterInfo;
