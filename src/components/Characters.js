import "../App.css";
import Character from "./Character";

function Characters({ items }) {
    return (
        <div className="Characters mt-sm-5">
            <div className="row">
                {items.map((item) => (
                    <div className="col" key={item.id}>
                        <Character
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

                {/* <div className="col">
                    <Character />
                    <Character />
                    <Character />
                </div>
                <div className="col">
                    <Character />
                    <Character />
                    <Character />
                </div>
                <div className="col">
                    <Character />
                    <Character />
                    <Character />
                </div>
                <div className="col">
                    <Character />
                    <Character />
                    <Character />
                </div>
                <div className="col">
                    <Character />
                    <Character />
                    <Character />
                </div>
                <div className="col">
                    <Character />
                    <Character />
                </div> */}
            </div>
        </div>
    );
}

export default Characters;
