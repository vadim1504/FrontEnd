import React from "react"

export default class Botheader extends React.Component {

    constructor(props){
        super();
        this.state = {
            focused: props.focus
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
                                if(self.props.focus==index){
                                    style = "activ";
                                }
                                    return(
                                        <li className={style} onClick={self.clicked.bind(self,index)}>
                                            <a>
                                                { item.name=='Home' ? <i className="fa fa-home"></i> : ''}
                                                {item.name}
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