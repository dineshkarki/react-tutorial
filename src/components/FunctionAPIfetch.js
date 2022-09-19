import axios from "axios";
import React, {useState, useEffect} from "react";

const FunctionAPIfetch = () => {
    const [items,setItems] = useState([]);
    const [query, setQuery] = useState('');
    const fetchData = async() => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users', { params: {_limit: 10} });
        setItems(response.data);
        console.log(response.data);
    }
    useEffect(() => {
        fetchData();
    },[])
    return(
        <div>
            <h4>Get Data &amp; Search</h4>
            <h5>Function Component</h5>
                <div>
                    <input type="text" placeholder='Search name' onChange={(e) => setQuery(e.target.value)} />
                </div>
            <p>
                {items.filter((item) => item.name.toLowerCase().includes(query)).map(item => <div>{item.name}</div>)}
            </p>
        </div>
    )
}
export default FunctionAPIfetch;