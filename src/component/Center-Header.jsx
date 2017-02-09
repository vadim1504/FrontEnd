import React from "react"
import Search from "./Search"

export default class Centerheader extends React.Component {

    click(){
        this.props.user.login=='' ?
            this.props.profileVisibl() :
        this.props.cartVisibl();

    }

    render() {
        return <div className="center-header">
            <div>
                <div className="center-header-l">
                    <a>
                        <span id="log">{this.props.log}</span>
                    </a>
                </div>
                <div className="center-header-c">
                    <Search search={this.props.search}/>
                </div>
                <div className="center-header-r">
                    <button className="but-shop" type="button" onClick={this.click.bind(this)}>
                        <span className="fa fa-shopping-bag circle"></span>
                        <span className="text">{this.props.cart} ({this.props.k})</span>
                    </button>
                </div>
            </div>
        </div>
    }
}