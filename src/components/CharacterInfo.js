import "../App.css";
import placeholder from "../images/placeholder.png";

function CharacterInfo({ item, handleClick }) {
    console.log(item);
    console.log(typeof item);
    return (
        <div className="CharacterInfo">
            <div className="row">
                <div className="col-12 col-xl-4">
                    <img
                        src={item.image}
                        alt="alt"
                        placeholder={placeholder}
                    ></img>
                    <div className="text-center">{item.name}</div>
                </div>
                <div className="col-12 col-xl-4">
                    <div className="">Gender: {item.gender}</div>
                    <div className="">Status: {item.status}</div>
                    <div className="">Species: {item.species}</div>
                    <div className="">Type: {item.type}</div>
                    <div className="">Created: {item.created}</div>
                </div>
                <button onClick={handleClick}>arrow</button>
            </div>
        </div>
    );
}
export default CharacterInfo;
