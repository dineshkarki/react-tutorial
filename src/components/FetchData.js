import React from 'react';
import axios from 'axios';

class FetchData extends React.Component {
    constructor() {
        super();
        this.state = {
            posts:[],
            query:''
        }
    }
    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/posts`,{ params: {_limit: 8} })
        .then(response => 
            {
                this.setState({posts:response.data})
            }
        )
    }
    search = (e) => {
        this.setState({query: e.target.value});
    }
    render() {
        const {posts, query} = this.state;
        return(
            <div>
                <h4>Get Data from Server &amp; Search</h4>
                <h5>Class Component</h5>
                <div>
                    <input type="text" placeholder='Search title' onChange={this.search} />
                </div>
                <p>{posts.filter((post) => post.title.toLowerCase().includes(query)).map(post => <div>{post.title}</div>)}</p>
            </div>
        )
    }
}
export default FetchData;