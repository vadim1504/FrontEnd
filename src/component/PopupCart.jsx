'use strict';

import React from 'react';

export default class Popup extends React.Component{

    constructor(props) {
        super();
        this.state = {
            focus:0,
            product: props.product
        }
    }

    close(){
        this.setState({
            focus:0
        });
        this.props.hid();
    }

    pay(){

    }

    removeProductCart(i){
        this.props.removeProductCart(i);
    }

    render() {
        let lang = this.props.lang;
        let style;
        this.props.focus==0 ? style={visibility:'hidden'} : style={visibility:'visible'};
        let fullPriceEu = 0;
        let fullPriceRu = 0;
            return <div style={style} className="popup" id="popup2">
                <div className='popup-content-cart'>
                    <table className="tableCart">
                        <tr>
                            <th>№</th>
                            <th>
                                {lang=="English" ? 'Name' : 'Наименование'}
                            </th>
                            <th>{lang=="English" ? 'Price $/₽' : 'Стоймость $/₽'}</th>
                        </tr>
                    {
                        this.props.product.map((item,index)=>{
                            fullPriceEu = fullPriceEu + item.price.priceEu;
                            fullPriceRu = fullPriceRu + item.price.priceRu;
                            return  <tr><td>{index}</td><td>
                                {lang=="English" ? item.nameEu : item.nameRu}
                                </td><td>{item.price.priceEu} / {item.price.priceRu}</td><td><button type='submit' id='remove' onClick={this.removeProductCart.bind(this,item.id)}>
                                {lang=="English" ? "Remove" : "Убрать"}
                            </button></td></tr>
                        })
                    }
                    </table>
                    <button type='submit' id='pay' onClick={this.pay.bind(this)}>{lang=="English" ? 'Pay' : 'Оплатить'}</button>
                    {lang=="English" ? " Full price: "+fullPriceEu+'/'+fullPriceRu : " Суммарная стоймость: "+fullPriceEu+'/'+fullPriceRu}
                    <button type='submit' id='close' onClick={this.close.bind(this)}>{lang=="English" ? 'Close' : 'Закрыть'}</button>
                </div>
            </div>
    }
}

