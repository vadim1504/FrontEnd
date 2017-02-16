import React from "react"
import Panel from "./Panel"
import Xhr from "./xhr"
import Cookie from "./cookie"

export default class Goods extends React.Component{

    constructor(){
        super();
        this.state = {
            position: 0,
            sort: 0,
            focusInput: 0,
            materialList: [],
            colorList: [],
            collectionList: [],
            sizeList: [],
            sizeElement: [0],
            colorElement: [0],
            collectionElement: [0],
            brandList: [],
            create: {
                i : 0,
                shoes: {}
            }
        }
    }

    home(){
        let context = this.props.context;
        return <div className="goods">
            <div className="baner">
                <img src="resource/baner.jpg"></img>
            </div>
        </div>
    }

    mensCollection(){
        let context = this.props.context;
        let lang = this.props.lang;
        return <div className="goods">
            {
                context.context.map((item)=> {
                    return(
                        <div className="brand" onClick={this.clickedLi.bind(this,0,item.id)}>
                            <img className="imageMenCollect" src={item.image}></img>
                            <h2>  {lang=="English" ? item.collectionNameEu : item.collectionNameRu }</h2>
                            <h3> {lang=="English" ? item.infoEu : item.infoRu}</h3>
                            <h3> {lang=="English" ? ('Number of goods: '+item.amount): ('Количество товаров: ' +item.amount)}</h3>
                        </div>
                    )
                })
            }
        </div>
    }

    position(index){
        this.setState({
            position: index
        })
    }

    number(index){
        let n = this.props.n;
        index==1 ? (n=n+1): (n=n-1);
        this.props.shoesPage(n);
    }

    slots(n){
        this.props.slots(n);
    }

    sortHandler(i){
        this.setState({
            sort: i
        })
    }

    details(id){
        this.props.details(id);
    }

    deleteProduct(i){
        this.props.deleteProduct(i);
    }

    save(i){
        let price = document.getElementById('priceProps').value;
        price==null ? price=this.props.context.context.price.priceEu : price = parseInt(document.getElementById('priceProps').value)

        let amount = document.getElementById('amountProps').value;
        amount==null ? amount=this.props.context.context.amount : amount = parseInt(document.getElementById('amountProps').value)

        let image;
        let sizeList = [];
        let colorList = [];
        let collectionList = [];
        if(i==1){
            image=this.props.context.context.image;

            this.props.context.context.sizes.map((item,index)=>{
               sizeList.push(document.getElementById('sizeSelect'+index).value);
            });
            this.props.context.context.colorList.map((item,index)=>{
               colorList.push(document.getElementById('colorSelect'+index).value);
            });
            this.props.context.context.menCollections.map((item,index)=>{
               collectionList.push(document.getElementById('collectionSelect'+index).value);
            });
        }else {
            image = document.getElementById('imageProps').value;
            image == null ? image = this.props.context.context.image : '';

            this.state.sizeElement.map((item,index)=>{
                index==this.state.sizeElement.length-1 ? '' : sizeList.push(document.getElementById('sizeSelect'+index).value);
            });
            this.state.colorElement.map((item,index)=>{
                index==this.state.colorElement.length-1 ? '' : colorList.push(document.getElementById('colorSelect'+index).value);
            });
            this.state.collectionElement.map((item,index)=>{
                index==this.state.collectionElement.length-1 ? '' : collectionList.push(document.getElementById('collectionSelect'+index).value);
            });
        }


        let prod = {
            id : this.props.context.context.id,
            shoes : {
                nameEu : document.getElementById('nameProps').value,
                nameRu : document.getElementById('nameProps').value,
                amount : amount,
                price : {
                    idShoes : this.props.context.context.id,
                    priceEu : price,
                    priceRu : price,
                },
                idBrand : document.getElementById('brandSelect').value,
                idMaterial: document.getElementById('materialSelect').value,
                image : image,
                colorListId: colorList,
                sizesId: sizeList,
                menCollectionsId: collectionList
            }
        };
        if(i==1) {
            this.props.updateProduct(prod);
        }else{
            this.props.createProduct(prod);
            this.setState({
                create: {
                    i : 0, shoes: {}
                },
                sizeElement: [0],
                colorElement: [0],
                collectionElement: [0]
            })
        }
    }

    updateProduct(){
        if(this.state.focusInput==0) {
            this.getMaterialList();
            this.getColorList();
            this.getCollectionList();
            this.getSizeList();
            this.getBrandList();
            this.setState({
                focusInput: 1
            })
        }else{
            this.setState({
                focusInput: 0
            });
        }
    }

    getMaterialList(){
        var xhr = new Xhr({json: true});
        xhr.get("http://192.168.100.5:8080/PeopleShoesRest_war/material").then((response) => {
            this.setState({
                materialList: response
            });
        }, (error) => {
            console.log(error);
        });
    }
    getColorList(){
        var xhr = new Xhr({json: true});
        xhr.get("http://192.168.100.5:8080/PeopleShoesRest_war/color").then((response) => {
            this.setState({
                colorList: response
            });
        }, (error) => {
            console.log(error);
        });
    }
    getCollectionList(){
        var xhr = new Xhr({json: true});
        xhr.get("http://192.168.100.5:8080/PeopleShoesRest_war/menCollection").then((response) => {
            this.setState({
                collectionList: response
            });
        }, (error) => {
            console.log(error);
        });
    }
    getSizeList(){
        var xhr = new Xhr({json: true});
        xhr.get("http://192.168.100.5:8080/PeopleShoesRest_war/size").then((response) => {
            this.setState({
                sizeList: response
            });
        }, (error) => {
            console.log(error);
        });
    }
    getBrandList(){
        var xhr = new Xhr({json: true});
        xhr.get("http://192.168.100.5:8080/PeopleShoesRest_war/brand").then((response) => {
            this.setState({
                brandList: response
            });
        }, (error) => {
            console.log(error);
        });
    }

    onClickBind(index,id,i){

        document.getElementById(id).value=i;

        if(index==-1){}else {
            if (id == "sizeSelect" + index) {
                var sizeElement = this.state.sizeElement;
                sizeElement.push(0);
                this.setState({
                    sizeElement: sizeElement
                })
            }
            if (id == "colorSelect" + index) {
                var colorElement = this.state.colorElement;
                colorElement.push(0);
                this.setState({
                    colorElement: colorElement
                })
            }
            if (id == "collectionSelect" + index) {
                var collectionElement = this.state.collectionElement;
                collectionElement.push(0);
                this.setState({
                    collectionElement: collectionElement
                })
            }
        }
    }

    createSlot(){
        let styleInput={visibility: "visible",height: '20px',marginBottom: '10px'};
        let lang = this.props.lang;
        return <div className="details">
            <div className="infoDetails">
            <h2>{lang=="English" ? 'Name : ' : 'Наименование: '}
                <input style={styleInput} type="text" id="nameProps"/>
            </h2>
            <h2>{lang=="English" ? 'Brand : ' : 'Бренд: '}
                <select id="brandSelect">
                    {
                        this.state.brandList.map((item)=>{
                            return <option value={item.id} onClick={this.onClickBind.bind(this,'brandSelect',item.id)}>
                                {item.name}
                            </option>
                        })
                    }
                </select>
            </h2>
            <h2>{lang=="English" ? 'Price : ' : 'Цена: '}
                <input style={styleInput} type="text" id="priceProps"/>
            </h2>
            <h2> {lang=="English" ? 'Color : ' : "Цвета : " }


                {
                    this.state.colorElement.map((item, index) => {
                        return<select id={"colorSelect"+index}>
                            {this.state.colorList.map((item) => {
                                return <option value={item.id}
                                               onClick={this.onClickBind.bind(this, index,"colorSelect"+index, item.id)}> {lang == "English" ? item.nameEu : item.nameRu}</option>

                            })}
                        </select>
                    })
                }



            </h2>
            <h2>{lang=="English" ? 'Material : ' : 'Материал: '}
                <select id="materialSelect">
                    {
                        this.state.materialList.map((item)=>{
                            return <option value={item.id} onClick={this.onClickBind.bind(this,'materialSelect',item.id)}>
                                {lang=="English" ? item.nameEu : item.nameRu}
                            </option>
                        })
                    }
                </select>
            </h2>
            <h2>{lang=="English" ? 'Amount : ' : 'Количество: '}
                <input style={styleInput} type="text" id="amountProps"/>
            </h2>
                <h2>{lang=="English" ? 'Image : ' : 'Картинка: '}
                    <input style={styleInput} type="text" id="imageProps"/>
                </h2>
            <h2>{lang=="English" ? 'Collection : ' : 'Коллекции: '}

                {
                    this.state.collectionElement.map((item, index) => {
                        return<select id={"collectionSelect"+index}>
                            {this.state.collectionList.map((item) => {
                                return <option value={item.id}
                                               onClick={this.onClickBind.bind(this, index,"collectionSelect"+index, item.id)}>
                                    {lang == "English" ? item.collectionNameEu : item.collectionNameRu}
                                </option>
                            })
                            }
                        </select>
                    })
                }
            </h2>

            <h2 id="size">{lang=="English" ? 'Size : ' : 'Размеры: '}

                {
                    this.state.sizeElement.map((item,index)=>{
                        return<select id={"sizeSelect"+index}>
                            {this.state.sizeList.map((item) => {
                                return <option value={item.id}
                                               onClick={this.onClickBind.bind(this,index,"sizeSelect"+index,item.id)}>
                                    {item.sizeEU}
                                </option>
                            })
                            }
                        </select>
                    })
                }



            </h2>
                <div style={{display: "inline-flex"}}>
                <div className="addProduct">
                    <button onClick={this.save.bind(this,2)}>
                        {lang=="English" ? 'Create' : 'Создать'}
                    </button>
                </div>
                <div className="addProduct">
                    <button onClick={this.back.bind(this)}>
                        {lang=="English" ? 'Back' : 'Назад'}
                    </button>
                </div>
                </div>
        </div>
        </div>
    }

    back(){
        this.setState({
            create: {
                i : 0, shoes: {}
            },
            sizeElement: [0],
            colorElement: [0],
            collectionElement: [0]
        })
    }


    slot(){
        let context = this.props.context.context;
        let styleInput;
        this.state.focusInput==0 ? styleInput={visibility: "hidden",height: '0px'} : styleInput={visibility: "visible",height: '20px',marginBottom: '10px'};
        let lang = this.props.lang;
        let money = this.props.money;
        let price;
        money==0 ? price=context.price.priceEu+" $" : price=context.price.priceRu+" ₽";
        var c = new Cookie();
        let role = c.getCookie('role');
        let flag = true;
        let removeIndex;
        this.props.user.product.map((item,index)=>{
            if(item.id==context.id){
                flag=false;
                removeIndex = item.id;
            }
        });
        return(<div className="details">
                <div className="l">
                    <img src={context.image}></img>
                {
                    role=="ROLE_ADMIN" ?
                        <div style={{display: "inline-flex"}}>
                            <div className="deleteProduct">
                                <button onClick={this.deleteProduct.bind(this,context.id)}>
                                    {lang=="English" ? 'Delete ' : 'Удалить'}
                                    </button>
                            </div>
                            <div className="addProduct">
                                <button onClick={this.updateProduct.bind(this)}>
                                    {lang=="English" ? 'Update' : 'Обновить'}
                                    </button>
                            </div>
                            { this.state.focusInput == 1 ?
                            <div className="addProduct">
                                <button onClick={this.save.bind(this,1)}>
                                    {lang=="English" ? 'Save' : 'Сохранить'}
                                </button>
                            </div>
                                : ''
                            }
                        </div>
                        :
                        flag==true ? <div className="addProduct">
                                <button onClick={this.add.bind(this,context)}>
                                    {lang=="English" ? 'Add to cart' : 'Добавить в корзину'}
                                </button>
                            </div> : <div className="deleteProduct">
                                <button onClick={this.remove.bind(this,removeIndex)}>
                                    {lang=="English" ? 'Remove from cart' : 'Убрать из корзины'}</button>
                            </div>
                }
                </div>
                {
                    this.state.focusInput==0 ?
                        <div className="infoDetails">
                            {lang=="English" ?
                                <h2 className="nameDetails">{context.nameEu}</h2> :
                                <h2 className="nameDetails">{context.nameRu}</h2>
                            }
                            <img src={context.brand.logo}></img>
                            {lang=="English" ? <h2>Price: {price}</h2> : <h2>Цена: {price}</h2>}
                            <h2> {lang=="English" ? 'Color : ' : "Цвета : " }
                            {context.colorList.map((item)=>{
                                return( lang=="English" ? item.nameEu+' ' : item.nameRu+" " )
                            })}
                            </h2>
                            <h2>{lang=="English" ? 'Material: '+context.material.nameEu : 'Материал: '+context.material.nameRu}</h2>
                            <h2>{lang=="English" ? 'Amount: '+context.amount: 'Количество товаров: '+context.amount}</h2>
                            <h2>{lang=="English" ? 'Collection : ' : 'Коллекции: '}
                            {context.menCollections.map((item)=>{
                                return ( lang=="English" ? item.collectionNameEu+' ': item.collectionNameRu+' ')
                            })
                            }
                            </h2>
                            <h2>{lang=="English" ? 'Size : ' : 'Размеры: '}
                            {context.sizes.map((item)=>{
                                return (lang=="English" ? item.sizeEU+' ' : item.sizeEU+' ')
                            })
                            }
                            </h2>
                        </div>
                    :
                    <div className="infoDetails">
                        <h2>{lang=="English" ? 'Name : ' : 'Наименование: '}
                        <input style={styleInput} defaultValue={context.nameEu} type="text" id="nameProps"/>
                        </h2>
                        <h2>{lang=="English" ? 'Brand : ' : 'Бренд: '}
                            <select id="brandSelect" defaultValue={context.idBrand}>
                                {
                                    this.state.brandList.map((item)=>{
                                        return <option value={item.id} onClick={this.onClickBind.bind(this,'brandSelect',item.id)}>
                                            {item.name}
                                        </option>
                                    })
                                }
                            </select>
                        </h2>
                        <h2>{lang=="English" ? 'Price : ' : 'Цена: '}
                        <input style={styleInput} defaultValue={price} type="text" id="priceProps"/>
                        </h2>
                            <h2> {lang=="English" ? 'Color : ' : "Цвета : " }
                                {context.colorList.map((item,index)=> {
                                    return <select id={"colorSelect"+index} defaultValue={item.id}>
                                        {this.state.colorList.map((item) => {
                                            return <option value={item.id}
                                                           onClick={this.onClickBind.bind(this,-1,'colorSelect'+index,item.id)}> {lang == "English" ? item.nameEu : item.nameRu}</option>

                                        })
                                        }
                                    </select>
                                })}
                            </h2>
                            <h2>{lang=="English" ? 'Material : ' : 'Материал: '}
                            <select id="materialSelect" defaultValue={context.idMaterial}>
                                {
                                    this.state.materialList.map((item)=>{
                                        return <option value={item.id} onClick={this.onClickBind.bind(this,'materialSelect',item.id)}>
                                            {lang=="English" ? item.nameEu : item.nameRu}
                                        </option>
                                    })
                                }
                            </select>
                            </h2>
                        <h2>{lang=="English" ? 'Amount : ' : 'Количество: '}
                            <input style={styleInput} defaultValue={context.amount} type="text" id="amountProps"/>
                        </h2>
                            <h2>{lang=="English" ? 'Collection : ' : 'Коллекции: '}

                                {context.menCollections.map((item,index)=>{

                                   return <select id={"collectionSelect"+index} defaultValue={item.id}>
                                       {this.state.collectionList.map((item)=>{
                                           return<option value={item.id} onClick={this.onClickBind.bind(this,-1,'collectionSelect'+index,item.id)}>
                                               {lang=="English" ? item.collectionNameEu: item.collectionNameRu}
                                           </option>
                                       })
                                       }
                                   </select>

                                })}
                            </h2>

                            <h2>{lang=="English" ? 'Size : ' : 'Размеры: '}
                                {context.sizes.map((item,index)=> {
                                    return <select id={"sizeSelect"+index} defaultValue={item.id}>
                                        {this.state.sizeList.map((item) => {
                                            return <option value={item.id}
                                                           onClick={this.onClickBind.bind(this,-1,'sizeSelect'+index,item.id)}>
                                                {item.sizeEU}
                                            </option>
                                        })
                                        }
                                    </select>
                                })}
                            </h2>
                        </div>
                    }

            </div>
        )
    }


    add(item){
        this.props.user.login==''
            ? this.props.profileVisibl()
        : this.props.addProductCart(item);
    }
    remove(i){
        this.props.removeProductCart(i);
    }

    create(){
        this.getMaterialList();
        this.getColorList();
        this.getCollectionList();
        this.getSizeList();
        this.getBrandList();
        this.setState({
           create: {
               i: 1,
               shoes : {}
           }
       })
    }

    shoes(){
        let context = this.props.context;
        let arr = context.context;
        let sort =this.state.sort;
        if(sort==0){
        }else if(sort==1){
            arr.sort(function (a,b) {
                return a.nameEu > b.nameEu;
            });
        }else if(sort==2){
            arr.sort(function (a,b) {
                return a.nameEu < b.nameEu;
            });
        }
        else if(sort==3){
            arr.sort(function (a,b) {
                return a.price.priceEu > b.price.priceEu;
            });
        }
        else if(sort==4){
            arr.sort(function (a,b) {
                return a.price.priceEu < b.price.priceEu;
            });
        }

        let lang = this.props.lang;
        let money = this.props.money;
        let style = "slot";
        if(this.state.position==1){
            style = "slot listPosition";
        }
        let self = this;
        return <div className="goods">
           <Panel create={this.create.bind(this)} sortHandler={this.sortHandler.bind(this)} sort={this.state.sort} slots={this.slots.bind(this)} position={this.state.position} n={this.props.n} onHandle={this.position.bind(this)} number={this.number.bind(this)}/>
            <div className="slots">
            {
                arr.map(function (item,index) {
                    let price;
                    money==0 ? price=item.price.priceEu : price=item.price.priceRu;
                    return  <div className={style} onClick={self.details.bind(self,item.id)}>
                        <a className="as">
                            <div className="slot-img">
                                <img src={item.image}></img>
                            </div>
                            <div className="slot-text">
                                <div>
                                    <h2>{lang=="English" ? item.nameEu: item.nameRu}</h2>
                                    <h2>{lang=="English" ? 'Price: '+price : 'Цена: '+price}</h2>
                                </div>
                            </div>
                        </a>
                    </div>
                })
            }
            </div>
        </div>
    }

    clickedLi(index,id) {
        this.props.onHandle2(index,id);
    }

    brand(){
        let context = this.props.context;
        let lang = this.props.lang;
        return <div className="goods">
            {
                context.context.map((item)=>{
                    return(
                        <div className="brand" onClick={this.clickedLi.bind(this,1,item.id)}>
                            <img src={item.logo}></img>
                            <h2>{item.name}</h2>
                            {lang=="English" ? <h3>{item.infoEu}</h3> : <h3>{item.infoRu}</h3>}
                        </div>
                    )
                })
            }
        </div>
    }

    render(){
        if(this.state.create.i==1){
            return this.createSlot();
        }else {
            let context = this.props.context;
            return (
                context.name == "Home" || context.name == "Главная" ? this.home() :
                    context.name == "Men's collection" || context.name == "Мужская коллекция" ? this.mensCollection() :
                        context.name == "Shoes" || context.name == "Обувь" ? this.shoes() :
                            context.name == "Brand" || context.name == "Бренд" ? this.brand() :
                                context.name == "details" ? this.slot() : ''
            )
        }
    }
}
