import React from "react"

export default class Botheader extends React.Component {

    constructor(){
        super();
        this.state = {
            focused: 0
        }
    }

    clicked(index) {
        this.setState({focused: index});
        this.props.onHandle(index);
    }

    render() {
        let self = this;
        return (
            <div className="bot-header">
                <div>
                    <div className="navigation">
                        <ul>
                            {
                                self.props.items.map(function (item,index) {
                                let style="";
                                if(self.state.focused==index){
                                    style = "activ";
                                }
                                    return(
                                        <li className={style} onClick={self.clicked.bind(self,index)}>
                                            <a>
                                                { item=='Home' ? <i className="fa fa-home"></i> : ''}
                                                {item}
                                                </a>
                                        </li>
                                    )
                            })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}