import "../App.css";

function Filter({ handleSubmit, handleChange }) {
    return (
        <form onSubmit={handleSubmit} className="form">
            <input
                type="text"
                onChange={handleChange}
                placeholder="Filter characters"
            ></input>
            <button type="submit">Filter</button>
        </form>
    );
}

export default Filter;
