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
    const [characterInfoOn, setCharacterInfoOn] = useState(false);

    const handleClick = () => {
        setCharacterInfoOn(!characterInfoOn);
    };

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
                    {/* {characterInfoOn && <CharacterInfo items={items} handleClick={handleClick}/>} */}
                    <CharacterInfo items={items} handleClick={handleClick} />
                </CSSTransition>
                <Characters items={items} handleClick={handleClick} />
            </div>
        );
    }
}

export default App;
