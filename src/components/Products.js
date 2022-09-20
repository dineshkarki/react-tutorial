import axios from "axios";
import React, {useState, useEffect} from "react";
import Table from "./Table";

const Products = () => {
    const [items,setItems] = useState([]);
    const [query, setQuery] = useState("");
    const keys = ["title","image","description"];
    const fetchData = async() => {
        const response = await axios.get(`https://fakestoreapi.com/products?=${query}`);
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
        <div className="products">
            <h3>Search products using 3 keys (title, image, description)</h3>
            <div>
                <input type="text" placeholder="Search" onChange={(e) => setQuery(e.target.value)}/>
            </div>
            <div class="card">
                <div class="card-body">
                    {
                    items.filter((item) => keys.some(key => item[key].toLowerCase().includes(query))).map((item) => 
                        <div key={item.id} className="productset">
                            <h5 class="card-title">{item.title}</h5>
                            <p><img src={item.image} alt={`${item.image}`} /></p>
                            {/* <p class="card-text">{item.description}</p> */}
                            <h4>₹ {item.price}</h4>
                            <a href="javascript:void(0)" class="btn btn-primary">Add to Cart</a>
                        </div>)}
                </div>
            </div>
            {/* <Table data={Search(items)}/> */}
        </div>
    )
}
export default Products;