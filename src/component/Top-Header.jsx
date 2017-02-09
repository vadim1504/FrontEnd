import React from "react"

export default class Topheader extends React.Component{

    constructor() {
        super();
        this.state = {
            lang: 0,
            money: 0,
            img : "resource/en.png"
        }
    }

    click(){
        if(this.state.lang==0){
            this.setState({
                lang: 1,
                img: "resource/ru.png"
            });
            this.props.onHandle(1);
        }else  if(this.state.lang==1){
            this.setState({
                lang: 0,
                img: "resource/en.png"
            });
            this.props.onHandle(0);
        }
    }

    click2(){
        if(this.state.money==0){
            this.setState({money: 1});
            this.props.onHandle2(1);
        }else  if(this.state.money==1){
            this.setState({money: 0});
            this.props.onHandle2(0);
        }
    }

    profile(){
        this.props.profile();
    }

    render(){
        let money;
        if(this.state.money==0){
            money="$USD";
        }else if(this.state.money==1){
            money="₽RUB";
        }
        let data = this.props.data;
        return <div className="top-header">
            <div className="content">
                <div className="top-header-l">
                    <a className="support">
                            <span className="phone">
                               <i className="fa fa-phone"></i>
                                {data.support}
                            </span>
                    </a>
                </div>
                <div className="top-header-c">
                    {data.message}
                </div>
                <div className="top-header-r">
                    <ul>
                        <li className="li">
                            <a className="li2" onClick={this.click.bind(this)}>
                                <img src={this.state.img}/>
                                    <span> {data.lang}</span>
                            </a>
                        </li>
                        <li className="li">
                            <a className="li2" onClick={this.click2.bind(this)}>
                                <span> {money}</span>
                            </a>
                        </li>
                            <li className="li" onClick={this.profile.bind(this)}>
                                <a className="ap">
                                    <i className="fa fa-gear"></i>
                                    {
                                        this.props.user!='' ?  <span> { this.props.user}</span> : <span>{data.account}</span>
                                    }
                                </a>
                            </li>
                    </ul>
                </div>
            </div>
        </div>
    }
}