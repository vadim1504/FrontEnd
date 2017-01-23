import React from "react"

export default class Catalog extends React.Component {

    constructor(){
        super();
        this.state = {
          minPrice: 0,
            maxPrice: 0,
            minSize:0,
            maxSize: 0,
            color: ""
        }
    }

    filterPrice(){
        let min = document.getElementById('minPrice').value;
        let max = document.getElementById('maxPrice').value;
        this.state.minPrice = min;
        this.state.maxPrice = max;
        this.props.filterPrice(min,max);
    }

    filterSize(){
        let min = document.getElementById('minSize').value;
        let max = document.getElementById('maxSize').value;
        this.state.minSize = min;
        this.state.maxSize = max;
        this.props.filterSize(min,max);
    }

    filterColor(i){
        let color = ["Красный", "Оранжевый", "Жёлтый", "Жёлто-зелёный(шартрёз)", "Зелёный", "Изумрудный",
            "Голубой", "Лазурный", "Синий", "Фиолетовый", "Пурпурный", "Малиновый",];
        this.state.color=color[i];
        this.props.filterColor(color[i]);
    }

    render() {
        return(
            <section className="catalog">
                <h2 className="catalog-header">
                    <span>{this.props.data.catalog}</span>
                </h2>
                <form className="catalog-form">
                    <div>
                        <label>{this.props.data.price}</label>
                    </div>

                    <div id="sliderPrice"></div>

                    <div>
                        <input id="minPrice" className="min" type="text" placeholder="min"/>
                            <input id="maxPrice" className="max" type="text" placeholder="max"/>
                                <input className="filter" type="button" value={this.props.data.filtr} onClick={this.filterPrice.bind(this)}/>
                    </div>
                    <div>
                        <label>{this.props.data.size}</label>
                    </div>

                    <div id="sliderSize"></div>

                    <div>
                        <input id="minSize" className="min" type="text" placeholder="min"/>
                        <input id="maxSize" className="max" type="text" placeholder="max"/>
                        <input className="filter" type="button" value={this.props.data.filtr} onClick={this.filterSize.bind(this)}/>
                    </div>
                    <div>
                        <label>{this.props.data.color}</label>
                    </div>
                    <div className="color">
                        <input style={{backgroundColor: '#FF0000'}} type="button" onClick={this.filterColor.bind(this,0)}/>
                            <input style={{backgroundColor: '#FF8000'}} type="button" onClick={this.filterColor.bind(this,1)}/>
                                <input style={{backgroundColor: '#FFFF00'}} type="button" onClick={this.filterColor.bind(this,2)}/>
                                    <input style={{backgroundColor: '#80FF00'}} type="button" onClick={this.filterColor.bind(this,3)}/>
                                        <input style={{backgroundColor: '#00FF00'}} type="button" onClick={this.filterColor.bind(this,4)}/>
                                            <input style={{backgroundColor: '#00FF80'}} type="button" onClick={this.filterColor.bind(this,5)}/>
                                                <input style={{backgroundColor: '#00FFFF'}} type="button" onClick={this.filterColor.bind(this,6)}/>
                                                    <input style={{backgroundColor: '#0080FF'}} type="button" onClick={this.filterColor.bind(this,7)}/>
                                                        <input style={{backgroundColor: '#0000FF'}} type="button" onClick={this.filterColor.bind(this,8)}/>
                                                            <input style={{backgroundColor: '#8000FF'}} type="button" onClick={this.filterColor.bind(this,9)}/>
                                                                <input style={{backgroundColor: '#FF00FF'}} type="button" onClick={this.filterColor.bind(this,10)}/>
                                                                    <input style={{backgroundColor: '#FF0080'}} type="button" onClick={this.filterColor.bind(this,11)}/>
                    </div>
                </form>
            </section>
        );
    }
}


