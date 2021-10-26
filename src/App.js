import { useEffect, useState } from "react";
import "./App.css";
import Characters from "./components/Characters";
import MainPage from "./components/MainPage";
import CharacterInfo from "./components/CharacterInfo";
import Pagination from "./components/Pagination";
import Filter from "./components/Filter";
import { CSSTransition } from "react-transition-group";

function App() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [item, setItem] = useState();
    const [characterInfoOn, setCharacterInfoOn] = useState(false);
    const [currentId, setCurrentId] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
    const [pages, setPages] = useState(0);
    const [name, setName] = useState('');

    const handleClick = () => setCharacterInfoOn(!characterInfoOn);
    const getCurrentCharacter = (id) => setCurrentId(id);
    const changePage = (currentPage) => setCurrentPage(currentPage);
    const filterName = (name) => setName(name);

    //Get all characters and set amount of pages
    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/?page=${currentPage}&name=${name}`)
            .then((res) => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result.results);
                    setPages(result.info.pages);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            );
    }, [currentPage]);
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
                <Filter filterName={filterName}/>
                <Pagination
                    currentPage={currentPage}
                    changePage={changePage}
                    pages={pages}
                />
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
                <Pagination
                    currentPage={currentPage}
                    changePage={changePage}
                    pages={pages}
                />
            </div>
        );
    }
}

export default App;
