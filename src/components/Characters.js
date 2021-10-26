import "../App.css";
import Character from "./Character";

function Characters({ items, handleClick, getCurrentCharacter }) {
    return (
        <div className="Characters mt-5">
            <div className="container">
                <div className="row row-cols-auto justify-content-center">
                    
                    {items.map((item) => (
                        <div
                            className="col py-5 p-lg-1"
                            key={item.id}
                        >
                            <Character
                                handleClick={handleClick}
                                getCurrentCharacter={getCurrentCharacter}
                                id={item.id}
                                name={item.name}
                                image={item.image}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Characters;
