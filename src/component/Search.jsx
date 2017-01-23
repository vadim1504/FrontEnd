import React from "react"

export default class Search extends React.Component{

    constructor(){
        super();
        this.state = {
            String: " "
        }
    }

    handleChange(e) {
        this.setState({String:e.target.value});
        console.log(this.state.String);
    }

    render() {
        let self = this;
        return (
        <div className="search">
            <input type="text" name="search" onChange={self.handleChange.bind(self)} placeholder={self.props.search}/>
        </div>
        )
    }
}
