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
                            {/* TODO: ALL OF THOSE PROPS ARE PROBABLY NOT NECESSARY */}
                            <Character
                                handleClick={handleClick}
                                getCurrentCharacter={getCurrentCharacter}
                                id={item.id}
                                name={item.name}
                                status={item.status}
                                species={item.species}
                                type={item.type}
                                gender={item.gender}
                                image={item.image}
                                created={item.created}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Characters;
