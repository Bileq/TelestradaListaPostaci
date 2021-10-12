import "../App.css";
import placeholder from "../images/placeholder.png";

function CharacterInfo({ item, handleClick }) {
    const created = item.created.slice(0,10)
    return (
        <div className="CharacterInfo">
            <div className="container">
                <div
                    className="row justify-content-center pt-2 pt-xl-5"
                    style={{ paddingTop: "3%" }}
                >
                    <div className="col-12 col-xl-4 text-center">
                        <img
                            src={item.image}
                            alt={item.name}
                            placeholder={placeholder}
                        ></img>
                        <div className="text-center fw-bold">{item.name}</div>
                    </div>
                    <div className="col-12 col-xl-4 text-center pt-5">
                        <div className="py-1">Gender: {item.gender}</div>
                        <div className="py-1">Status: {item.status}</div>
                        <div className="py-2">Species: {item.species}</div>
                        <div className="py-2">
                            Type: {item.type === "" ? "Unknown" : item.type}
                        </div>
                        <div className="py-2">Created: {created}</div>
                    </div>
                </div>
                {/* Button */}
                <div className="row justify-content-center pt-5">
                    <div className="col-1 pt-xl-5">
                        <button className="ReturnButton" onClick={handleClick}>
                            <svg
                                
                                xmlns="http://www.w3.org/2000/svg"
                                width="48"
                                height="48"
                                fill="currentColor"
                                class="bi bi-arrow-up-short"
                                viewBox="0 0 16 16"
                                color="black"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default CharacterInfo;
