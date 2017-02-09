import React from "react"

export default class Menu extends React.Component {

    constructor(props){
        super();
        this.state = {
            categories: props.categories
        }
    }

    clickedUl(index) {
        let f = this.props.categories;
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

    clickedLi(index,id) {
        this.props.onHandle2(index,id);
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
                        self.props.categories.map(function (item,index) {
                            let i = item;
                                return(
                                    <div>
                                        <div className="accordinDiv">
                                            <li onClick={self.clickedUl.bind(self,index)}>
                                                <a className="accordion-li">
                                                    {item.name}
                                                {  item.focused == 0 ?
                                                    <span className="fa fa-plus"></span>
                                                    :  <span className="fa fa-minus"></span>
                                                }
                                                </a>
                                            </li>
                                        </div>
                                        <div>
                                        {
                                            item.focused == 0 ? ''
                                                :
                                                <ul className="panelAcc">
                                                    {
                                                        item.li.map(function (item) {
                                                            return ( <li onClick={self.clickedLi.bind(self,index,item.id)}>
                                                                    {self.props.lang=="English" ?
                                                                        i.name=="Men's collection" ? item.collectionNameEu :
                                                                            i.name=="Brand" ? item.name :
                                                                                i.name=="Material" ? item.nameEu : "" :
                                                                        i.name=="Мужская коллекция" ? item.collectionNameRu :
                                                                            i.name=="Бренд" ? item.name :
                                                                                i.name=="Материал" ? item.nameRu : ""
                                                                    }


                                                                    {item.amount==undefined ? '' : (' ('+item.amount+')')}
                                                                    </li>
                                                            )
                                                        })
                                                    }
                                                </ul>
                                        }
                                        </div>
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