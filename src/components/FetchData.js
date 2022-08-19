import React from 'react';
import axios from 'axios';

class FetchData extends React.Component {
    constructor() {
        super();
        this.state = {
            posts:[]
        }
    }
    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/posts`,{ params: {_limit: 5} })
        .then(response => 
            {
                this.setState({posts:response.data})
            }
        )
    }
    render() {
        const {posts} = this.state;
        return(
            <div>
                <h4>Get Data from Server</h4>
                <p>{posts.map(post => <div>{post.title}</div>)}</p>
            </div>
        )
    }
}
export default FetchData;