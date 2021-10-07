import "../App.css";
import Character from "./Character";

function Characters() {
    return (
        <div className="Characters">
            <div class="row">
                <div class="col">
                    <Character />
                    <Character />
                    <Character />
                </div>
                <div class="col">
                    <Character />
                    <Character />
                    <Character />
                </div>
                <div class="col">
                    <Character />
                    <Character />
                    <Character />
                </div>
                <div class="col">
                    <Character />
                    <Character />
                    <Character />
                </div>
                <div class="col">
                    <Character />
                    <Character />
                    <Character />
                </div>
                <div class="col">
                    <Character />
                    <Character />
                </div>
            </div>
        </div>
    );
}

export default Characters;
