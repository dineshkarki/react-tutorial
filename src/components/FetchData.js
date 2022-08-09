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
        axios.get(`https://jsonplaceholder.typicode.com/posts`,{ params: {_limit: 10} })
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
                <h3>Get Data from Server</h3>
                <p>{posts.map(post => <div>{post.title}</div>)}</p>
            </div>
        )
    }
}
export default FetchData;