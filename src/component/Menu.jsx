import React from "react"

export default class Menu extends React.Component {

    constructor(props){
        super();
        this.state = {
            categories: props.categories
        }
    }

    clicked(index) {
        let f = this.state.categories;

        if(f[index].focused==0){
            f[index].focused=1;
            this.props.onHandle(index);
        }else if(f[index].focused==1){
            f[index].focused=0;
        }
        this.setState({
           categories:f
        });
    }


    render(){
        let self = this;
        return <section className="menu">
            <div>
                <div className="manu-header">
                    <h2 className="h2">
                        <i className="fa fa-list"></i>
                        <span>{this.props.nameCat}</span>
                    </h2>
                </div>
                <div className="menu-content">
                    <ul className="accordion">
                        {
                        self.state.categories.map(function (item,index) {
                                return(
                                    <div>
                                        <li onClick={self.clicked.bind(self,index)}>
                                            <a className="accordion-li">
                                                {item.name}
                                                {  item.focused == 0 ?
                                                    <span className="fa fa-plus"></span>
                                                    :  <span className="fa fa-minus"></span>
                                                }
                                            </a>
                                        </li>
                                        {
                                            item.focused == 0 ? ''
                                                :
                                                <ul className="panelAcc">
                                                    {
                                                        item.li.map(function (item, index) {
                                                            return ( <li> {item} </li>
                                                            )
                                                        })}
                                                </ul>
                                        }
                                    </div>
                                )
                        })
                        }
                    </ul>
                </div>

            </div>
            </section>
    }

}