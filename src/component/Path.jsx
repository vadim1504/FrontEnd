import React from "react"

export default class Centerheader extends React.Component {

    render() {
        return <div className="path">
            <span className="whitesmock"><i className="fa fa-home"></i>{this.props.menu[0].name}</span>
            <span className="black">&raquo;{this.props.menu[this.props.index].name}&raquo;{this.props.details}</span>
        </div>
    }
}