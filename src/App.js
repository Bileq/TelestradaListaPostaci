import { useEffect, useState } from "react";
import "./App.css";
import Characters from "./components/Characters";
import MainPage from "./components/MainPage";
import CharacterInfo from "./components/CharacterInfo";
import { CSSTransition } from "react-transition-group";

function App() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [item, setItem] = useState();
    const [characterInfoOn, setCharacterInfoOn] = useState(false);
    const [currentId, setCurrentId] = useState(1);

    const handleClick = () => {
        setCharacterInfoOn(!characterInfoOn);
    };

    const getCurrentCharacter = (id) => {
        setCurrentId(id);
    };
    //Get all characters on mount
    useEffect(() => {
        fetch("https://rickandmortyapi.com/api/character")
            .then((res) => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result.results);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            );
    }, []);
    //Get only wanted character onClick on this character
    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${currentId}`)
            .then((res) => res.json())
            .then((result) => setItem(result));
    }, [currentId]);

    if (error) {
        //TODO: Change to something went wrong msg
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        //TODO: Loading component
        return <div>Loading...</div>;
    } else {
        return (
            <div className="App">
                <MainPage />
                <CSSTransition
                    in={characterInfoOn}
                    timeout={500}
                    classNames="animateCharacterInfo"
                    unmountOnExit
                >
                    <CharacterInfo item={item} handleClick={handleClick} />
                </CSSTransition>
                <Characters
                    items={items}
                    handleClick={handleClick}
                    getCurrentCharacter={getCurrentCharacter}
                />
            </div>
        );
    }
}

export default App;
