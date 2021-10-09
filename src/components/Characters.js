import "../App.css";
import Character from "./Character";

function Characters() {
    return (
        <div className="Characters mt-sm-5">
            <div className="row">
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
                    <Character />
                </div>
                <div className="col">
                    <Character />
                    <Character />
                </div>
            </div>
        </div>
    );
}

export default Characters;
