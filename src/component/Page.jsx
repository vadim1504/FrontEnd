import React from "react"
import Header from "./Header"
import Topheader from "./Top-Header"
import Centerheader from "./Center-Header"
import Botheader from "./Bot-Header"
import Path from "./Path"
import Main from "./Main"
import Categories from "./Categories"
import Menu from "./Menu"
import Footertop from "./Footer-Top"
import Footercenter from "./Footer-Center"
import Catalog from "./Catalog"

export default class Page extends React.Component {

    constructor(){
        super();
        this.state = {
            index: 0,
            menu: ["Home","Men's collection","Shoes","Brand","Blog","Contact"],
            categories:[
                { name:  "Men's collection",
                    li: [],
                    uri: "menCollection",
                    focused: 0
                },
                { name:  "Brand",
                    li: [],
                    uri: "brand",
                    focused: 0
                },
                { name:  "Material",
                    li: [],
                    uri: "material",
                    focused: 0
                }],
            data: {
                support: "24/7 Free Support",
                message: "Wellcome !",
                lang: "English",
                log: "Men Shoes",
                account: "My Account",
                cart: "Shopping Cart(0)",
                search: "quick search",
                nameCat: "Categories",
                price: "Price",
                catalog: "Filters",
                size: "Size",
                color: "Color",
                filtr: "Filter"
            },
            money: 0
        };
    }

    handle1(i){
        if(i==0){
            this.setState({
                menu: ["Home","Men's collection","Shoes","Brand","Blog","Contact"],
                categories:[
                    { name:  "Men's collection",
                        li: [],
                        uri: "menCollection",
                        focused: 0
                    },
                    { name:  "Brand",
                        li: [],
                        uri: "brand",
                        focused: 0
                    },
                    { name:  "Material",
                        li: [],
                        uri: "material",
                        focused: 0
                    }],
                data: {
                    support : "24/7 Free Support",
                    message :  "Wellcome !",
                    lang : "English",
                    log: "Men Shoes",
                    account : "My Account",
                    cart : "Shopping Cart(0)",
                    search : "quick search",
                    nameCat: "Categories",
                    price: "Price",
                    catalog: "Filters",
                    size: "Size",
                    color: "Color",
                    filtr: "Filter"
                }
            });
        }else if(i==1) {
            this.setState({
                menu: ["Главная","Мужская коллекция","Обувь","Бренд","Блог","Контакты"],
                categories:[
                    { name:  "Мужская коллекция",
                        li: [],
                        uri: "menCollection",
                        focused: 0},
                    { name:  "Бренд",
                        li: [],
                        uri: "brand",
                        focused: 0
                    },
                    { name:  "Материал",
                        li: [],
                        uri: "material",
                        focused: 0
                    }],
                data: {
                    support : "24/7 Бесплатная поддержка",
                    message :  "Добро пожаловать!",
                    lang : "Русский",
                    log: "Мужская обувь",
                    money : "$USD",
                    account : "Профиль",
                    cart : "Корзина (0)",
                    search : "Быстрый поиск",
                    nameCat: "Категории",
                    price: "Цена",
                    catalog: "Фильтры",
                    size: "Размер",
                    color: "Цвет",
                    filtr: "Фильтр"
                }
            });
        }

    }

    handle2(index){
        this.setState({
            index: index
        });
    }

    handle3(index){
        this.setState({
            money: index
        });
    }

    handle4(index){
        let i = this.state.categories[index];
        let self=this;
        let xhr = new XMLHttpRequest();
        xhr.open('GET', 'http://localhost:8080/PeopleShoes/'+i.uri+'/getListEntity', true);
        xhr.send();
        xhr.onreadystatechange = function () {
            if (this.readyState != 4) return;
            if (this.status != 200) return;
            let c = self.state.categories;
            c[index].li= self.parseResponse(JSON.parse(xhr.responseText),index,self.state.data.lang);
            self.setState({
                categories: c
            });
        };
    }

    parseResponse(doc,index,lang){
        var arr = [];
        doc.map(function (item,i) {
            if(index==0) {
                if(lang=="English")
                arr[i] = item.collectionNameEu+"  ("+item.amount+")";
                else if(lang=="Русский")
                    arr[i] = item.collectionNameRu+"  ("+item.amount+")";
            }
            if(index==1) {
                arr[i] = item.name;
            }
            if(index==2) {
                if(lang=="English")
                arr[i] = item.nameEu;
                else if(lang=="Русский")
                    arr[i] = item.nameRu;
            }
        });
        return arr;
    }

    filterPrice(min,max){
        console.log(min+" "+max);
    }

    filterSize(min,max){
        console.log(min+" "+max);
    }

    filterColor(color){
        console.log(color);
    }

    render() {
        return <div className="page">
            <Header>
                <Topheader data={this.state.data} onHandle={this.handle1.bind(this)} onHandle2={this.handle3.bind(this)}/>
                <Centerheader log={this.state.data.log} cart={this.state.data.cart} search={this.state.data.search}/>
                <Botheader items={this.state.menu} onHandle={this.handle2.bind(this)}/>
            </Header>
            <Path menu={this.state.menu} index={this.state.index}/>
            <Main>
                <Categories>
                    <Menu nameCat={this.state.data.nameCat} categories={this.state.categories} onHandle={this.handle4.bind(this)}/>
                    <Catalog data={this.state.data} filterPrice={this.filterPrice.bind(this)} filterSize={this.filterSize.bind(this)} filterColor={this.filterColor.bind(this)}/>
                </Categories>
            </Main>
            <Footertop/>
            <Footercenter data={this.state.data}/>
            <div className="footer-bot">
                Vadim Shestov 2016
            </div>
        </div>
    }
}