import React from "react"

export default class Categories extends React.Component {

    render(){
        return <div className="categories">
            {this.props.children}
        </div>
    }

}