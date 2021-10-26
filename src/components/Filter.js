import { useEffect, useState } from "react";
import "../App.css";

function Filter({filterName, handleSubmit, handleChange}) {
    return (
        <form onSubmit={handleSubmit}
        className="form">
            <input type="text" onChange={handleChange}></input>
            <button type="submit">Filter</button>
        </form>
    )
}

export default Filter;
