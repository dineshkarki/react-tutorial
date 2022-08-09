import React from "react";
import {Button} from "react-bootstrap";
import Child from "./Child";

class Content extends React.PureComponent {
    constructor() {
        super();
        this.state = {
            username:'',
            comments:'',
            parentdata:'this data from parent',
            data:'test'
        }
    }
    handleUsername = (event) => {
        this.setState({
            username:event.target.value
        })
    }
    commentChange = (event) => {
        this.setState({
            comments:event.target.value
        })
    }
    handleSubmit = event => {
        alert(`${this.state.username} - ${this.state.comments}`);
        event.preventDefault();
    }
    handleClick = () => {
        this.setState({
            data:'test123'
        })
    }
    render() {
        console.log("Hello Render Component");
        const {username, comments} = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <h3>Class Component</h3>
                <div>
                    <label>username</label>
                    <input type="text" value={username} onChange={this.handleUsername}/>
                </div>
                <div>
                    <label>comments</label>
                    <textarea value={comments} onChange={this.commentChange}></textarea><br/>
                    <Button type="submit" variant="danger" style={{marginLeft:'73px', marginBottom:'5px'}}>Submit</Button>
                </div>
                <Child datafromparenttochild={this.state.parentdata} />
                <h3>Pure Component</h3>
                <Button variant="primary" onClick={this.handleClick}>{this.state.data}</Button>
            </form>
        )
    }
}
export default Content;