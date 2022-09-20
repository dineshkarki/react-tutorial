import axios from "axios";
import React, {useState, useEffect} from "react";
import Table from "./Table";

const FunctionAPIfetch = () => {
    const [items,setItems] = useState([]);
    const [query, setQuery] = useState("");
    const keys = ["name","username","email"];
    const fetchData = async() => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users?=${query}`);
        setItems(response.data);
    }
    const Search = (data) => {
        return data.filter((item) => keys.some(key => item[key].toLowerCase().includes(query)));
    }
    useEffect(() => {
        // Fetching the data greater than 2 (you can see in network tab)
        if(query.length === 0 || query.length > 2) {
            fetchData();
        }
    },[query]);
    return(
        <div>
            <h3>Get Data &amp; Search Data using 3 Keys</h3>
            <h5>Function Component</h5>
            <div>
                <input type="text" placeholder="Search" onChange={(e) => setQuery(e.target.value)}/>
            </div>
            <Table data={Search(items)}/>
        </div>
    )
}
export default FunctionAPIfetch;