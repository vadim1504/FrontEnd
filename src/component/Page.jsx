import React from "react"
import Header from "./Header"
import Topheader from "./Top-Header"
import Centerheader from "./Center-Header"
import Botheader from "./Bot-Header"
import Path from "./Path"
import Main from "./Main"
import Categories from "./Categories"
import Menu from "./Menu"
import Footer from "./Footer"
import Footertop from "./Footer-Top"
import Footercenter from "./Footer-Center"
import Catalog from "./Catalog"
import Goods from "./Goods"
import Popup from "./PopupAuthoriz"
import Cart from "./PopupCart"
import Xhr from "./xhr"
import Cookie from "./cookie"

export default class Page extends React.Component {

    constructor(){
        super();
        this.state = {
            nPage: 0,
            size: 6,
            popup: 0,
            popup2: 0,
            user: {
                login: '',
                password: '',
                product: [ ]
            },
            errorMessage: '',
            details: '',
            main: {
                name: "Home",
                context : []
            },
            index: 0,
            menu: [
                { name :"Home",
                    context: [],
                    uriGetList: "",
                    uriGet: ""
                },
                { name :"Men's collection",
                    context: [],
                    uri: "menCollection",
                },
                { name :"Shoes",
                    context: [],
                    uri: "shoes",
                },
                { name :"Brand",
                    context: [],
                    uri: "brand",
                }
            ],
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
                cart: "Shopping Cart",
                search: "quick search",
                nameCat: "Categories",
                price: "Price",
                catalog: "Filters",
                size: "Size",
                color: "Color",
                filtr: "Filter",
                newsletter: "Newsletter",
                enterEmail: "Enter your email",
                subscribe : "Subscribe",
                hotLine : "Hot Line",
                PaymentOptions : "Payment Options",
                category: "Category",
                women: "Women",
                menSale: "Men Sale",
                jewellery: "Jewellery",
                accessories: "Accessories",
                sunglass: "Sunglass",
                sitemap: "Site map",
                information: "Information",
                aboutUs: "About Us",
                deliveryInformation: "Delivery Information",
                privacyPolicy: "Privacy Policy",
                termsConditions: "Terms & Conditions",
                help: " Help",
                location: "Location",
                orderHistory: "Order History",
                WishList: "Wish List",
                cart2: "Cart",
                checkOut: "CheckOut",
                contactUS : "Contact Us"
            },
            money: 0
        };
    }

    handle1(i){
        let categories = this.state.categories;
        let menu = this.state.menu;
        if(i==0){
            categories[0].name =  "Men's collection";
            categories[1].name =  "Brand";
            categories[2].name =  "Material";
            menu[0].name = "Home";
            menu[1].name = "Men's collection";
            menu[2].name = "Shoes";
            menu[3].name = "Brand";
            this.setState({
                menu: menu,
                categories: categories,
                data: {
                    support : "24/7 Free Support",
                    message :  "Wellcome !",
                    lang : "English",
                    log: "Men Shoes",
                    account : "My Account",
                    cart : "Shopping Cart",
                    search : "quick search",
                    nameCat: "Categories",
                    price: "Price",
                    catalog: "Filters",
                    size: "Size",
                    color: "Color",
                    filtr: "Filter",
                    newsletter: "Newsletter",
                    enterEmail: "Enter your email",
                    subscribe : "Subscribe",
                    hotLine : "Hot Line",
                    PaymentOptions : "Payment Options",
                    category: "Category",
                    women: "Women",
                    menSale: "Men Sale",
                    jewellery: "Jewellery",
                    accessories: "Accessories",
                    sunglass: "Sunglass",
                    sitemap: "Site map",
                    information: "Information",
                    aboutUs: "About Us",
                    deliveryInformation: "Delivery Information",
                    privacyPolicy: "Privacy Policy",
                    termsConditions: "Terms & Conditions",
                    help: " Help",
                    location: "Location",
                    orderHistory: "Order History",
                    WishList: "Wish List",
                    cart2: "Cart",
                    checkOut: "CheckOut",
                    contactUS : "Contact Us"
                }
            });
        }else if(i==1) {
            categories[0].name =  "Мужская коллекция";
            categories[1].name =  "Бренд";
            categories[2].name =  "Материал";
            menu[0].name = "Главная";
            menu[1].name = "Мужская коллекция";
            menu[2].name = "Обувь";
            menu[3].name = "Бренд";
            this.setState({
                menu: menu,
                categories: categories,
                data: {
                    support : "24/7 Бесплатная поддержка",
                    message :  "Добро пожаловать!",
                    lang : "Русский",
                    log: "Мужская обувь",
                    money : "$USD",
                    account : "Профиль",
                    cart : "Корзина",
                    search : "Быстрый поиск",
                    nameCat: "Категории",
                    price: "Цена",
                    catalog: "Фильтры",
                    size: "Размер",
                    color: "Цвет",
                    filtr: "Фильтр",
                    newsletter: "Подписка на новости",
                    enterEmail: "Введите адрес электронной почты",
                    subscribe : "Подписаться",
                    hotLine : "Горячая линия",
                    PaymentOptions : "Платёжные системы",
                    category: "Категория",
                    women: "Женщины",
                    menSale: "Мужская распродажа",
                    jewellery: "Украшения",
                    accessories: "Аксессуары",
                    sunglass: "Очки",
                    sitemap: "Карта сайта",
                    information: "Информация",
                    aboutUs: "О нас",
                    deliveryInformation: "Информация о доставке",
                    privacyPolicy: "Конфиденциальность",
                    termsConditions: "Правила и условия",
                    help: "Помощь",
                    location: "Место нахождения",
                    orderHistory: "История заказов",
                    WishList: "Список желаний",
                    cart2: "Корзина",
                    checkOut: "Выписки",
                    contactUS : "Контакты"
                }
            });
        }

    }

    shoesPage(p){
        var xhr = new Xhr({json: true});
        xhr.get("http://192.168.100.5:8080/PeopleShoesRest_war/shoes?page="+p+"&size="+this.state.size).then((response) => {
           if(response==''){}
           else {
               let c = this.state.menu;
               c[2].context = response;
               this.setState({
                   nPage: p,
                   main: {
                       name: c[2].name,
                       context: c[2].context
                   },
                   menu: c,
                   index: 2,
                   details: ''
               });
           }
        }, (error) => {
            console.log(error);
        });
    }

    menuHandle(index){
        if(index==2){
            this.shoesPage(this.state.nPage);
        }else if(index>0) {
            let uri = this.state.menu[index].uri;
            var xhr = new Xhr({json: true});
            xhr.get("http://192.168.100.5:8080/PeopleShoesRest_war/" + uri).then((response) => {
                let c = this.state.menu;
                c[index].context = response;
                this.setState({
                    main: {
                        name: c[index].name,
                        context: c[index].context
                    },
                    menu: c,
                    index: index,
                    details: ''
                });
            }, (error) => {
                console.log(error);
            });
        }
        else{
            this.setState({
                main: {
                    name: this.state.menu[index].name,
                    context: this.state.menu[index].context
                },
                index: index,
                details: ''
            });
        }
    }

    handle3(index){
        this.setState({
            money: index
        });
    }

    requestFilter(uri){
        var xhr = new Xhr({json: true});
        xhr.get("http://192.168.100.5:8080/PeopleShoesRest_war/"+uri).then((response) => {
            let r;
            if(response.shoesList==null) {
                r=response;
            }else{
                r=response.shoesList;
            }
            let c = this.state.menu;
            c[2].context = r;
            this.setState({
                main: {
                    name: c[2].name,
                    context: c[2].context
                },
                menu: c,
                index: 2
            });
        }, (error) => {
            console.log(error);
        });
    }
    filterPrice(min,max){
        this.requestFilter("shoes?minPrice="+min+"&maxPrice="+max);
        this.setState({
            details: 'Price Filter'
        })
    }

    filterSize(min,max){
        this.requestFilter("shoes?minSize="+min+"&maxSize="+max);
        this.setState({
            details: 'Size Filter'
        })
    }

    filterColor(color){
        this.requestFilter("color?id="+color);
        this.setState({
            details: 'Color Filter'
        })
    }


    requestGetList(index){
        let uri = this.state.categories[index].uri;
        var xhr = new Xhr({json:true});
        xhr.get("http://192.168.100.5:8080/PeopleShoesRest_war/"+uri).then((response)=> {
            let c = this.state.categories;
            c[index].li= response;
            c[index].focused=1;
            this.setState({
                categories: c
            });
        },(error)=>{
            console.log(error);
        });
    }

    requestGet(index,id){
        let uri = this.state.categories[index].uri;
        var xhr = new Xhr({json:true});
        xhr.get("http://192.168.100.5:8080/PeopleShoesRest_war/"+uri+"?id="+id).then((response)=> {
            let c = this.state.menu;
            c[2].context = response.shoesList;
            let name;
            index == 0 ? name=response.collectionNameEu :
                index == 1 ? name=response.name :
                    index == 2 ? name=response.nameEu : ''
                    this.setState({
                main: {
                    name: c[2].name,
                    context: c[2].context
                },
                menu: c,
                index: 2,
                details: name
            });
        },(error)=>{
            console.log(error);
        });
    }

    details(id){
        var xhr = new Xhr({json:true});
        xhr.get("http://192.168.100.5:8080/PeopleShoesRest_war/shoes?id="+id).then((response)=> {
            this.setState({
                main: {
                    name: 'details',
                    context : response
                },
                details: response.nameEu
            });
        },(error)=>{
            console.log(error);
        });
    }

    profileVisibl(){
        this.setState({
            popup :1
        })
    }

    profileHidden(){
        this.setState({
            popup :0
        })
    }

    cartVisibl(){
        this.setState({
            popup2 :1
        })
    }

    cartHidden(){
        this.setState({
            popup2 :0
        })
    }

    refreshToken(){
        var c = new Cookie();
        if(c.getCookie('refresh_token')==undefined){
            this.exit()}else {
            var xhr = new Xhr({
                json: true,
                contentType: "application/json",
                headers: {
                    Accept: "application/json",
                    Authorization: 'Basic '+btoa("client:secret")}
            });
            xhr.post("http://192.168.100.5:8080/PeopleShoesRest_war/oauth/token?grant_type=refresh_token&refresh_token="+c.getCookie('refresh_token'),null).then((response)=> {
                var option={expires:1200};
                c.setCookie('access_token',response.access_token,option);
            },(error)=>{
                console.log(error);
            });
        }
    }

    logIn(log,pass){
        var xhr = new Xhr({
            json: true,
            contentType: "application/json",
            headers: {
                Accept: "application/json",
                Authorization: 'Basic '+btoa("client:secret")}
        });
        xhr.post("http://192.168.100.5:8080/PeopleShoesRest_war/oauth/token?grant_type=password&username="+log+"&password="+pass,null).then((response)=> {
            var c = new Cookie();
            var option={expires:1200};
            var access_token = response.access_token;
            var refresh_token = response.refresh_token;
            c.setCookie('access_token',access_token,option);
            option={expires:6000};
            c.setCookie('refresh_token',refresh_token,option);


            var xhr = new Xhr({
                json: false,
                contentType: "application/json"
            });
            xhr.get("http://192.168.100.5:8080/PeopleShoesRest_war/role?access_token="+access_token).then((response)=> {
                let role = response;
                c.setCookie('role',role,option);

                var xhr = new Xhr({
                    json: true,
                    contentType: "application/json"
                });
                if(role=='ROLE_USER') {
                    xhr.get("http://192.168.100.5:8080/PeopleShoesRest_war/cart?access_token=" + access_token).then((response) => {
                        let product = [];
                        response.map((item) => {
                            product.push(item.shoes);
                        });
                        this.setState({
                            user: {
                                login: log,
                                password: pass,
                                product: product
                            },
                            popup: 0,
                            errorMessage: ''
                        })
                    }, (error) => {
                        console.log(error);
                        this.setState({
                            errorMessage: error
                        })
                    });
                }else{
                    this.setState({
                        user: {
                            login: log,
                            password: pass,
                            product: []
                        },
                        popup: 0,
                        errorMessage: ''
                    })
                }
            },(error)=> {
                console.log(error);
                this.setState({
                    errorMessage: error
                })
            });
        },(error)=>{
            this.setState({
                errorMessage: error.error_description
            })
        });
    }

    singUp(log,pass){
        var xhr = new Xhr({
            json: true,
            contentType: "application/json",
            headers: {
                Accept: "application/json"
            }
        });
        let body = { username: log, password: pass};
        xhr.post("http://192.168.100.5:8080/PeopleShoesRest_war/users",body).then((response)=> {
               this.logIn(log,pass);
        },(error)=>{
            console.log(error);
            this.setState({
                errorMessage: "Conflict: Аккаун с таким именем уже существует"
            });
        });
    }

    exit(){
        var c = new Cookie();
        c.deleteCookie('access_token');
        c.deleteCookie('refresh_token');
        c.deleteCookie('role');
        this.setState({
            user: {
                login :  '',
                password : '',
                product: []
            },
            popup :0
        })
    }

    addProductCart(item){
        var xhr = new Xhr({
            json: true,
            contentType: "application/json",
            headers: {
                Accept: "application/json"
            }
        });
        let user = this.state.user;
        let body = { username: user.login, idShoes: item.id};
        var c = new Cookie();


        c.getCookie('access_token')==undefined ? this.refreshToken() : '';


        xhr.post("http://192.168.100.5:8080/PeopleShoesRest_war/cart?access_token="+c.getCookie('access_token'),body).then((response)=> {
            user.product.push(item);
            this.setState({
                user: user
            })
        },(error)=>{
            console.log(error);
        });
    }

    removeProductCart(id){
        var xhr = new Xhr({
            json: true,
            contentType: "application/json",
            headers: {
                Accept: "application/json"
            }
        });
        let user = this.state.user;
        var c = new Cookie();
        c.getCookie('access_token')==undefined ? this.refreshToken() : '';
        xhr.delete("http://192.168.100.5:8080/PeopleShoesRest_war/cart?id="+id+"&access_token="+c.getCookie('access_token')).then((response)=> {
            for(let i=0;i< user.product.length;i++) {
               user.product[i].id == id ? (
                    i==0 ?  user.product.shift() : user.product.pop() ?
                    user.product.splice(i, 1) : '' ) : ''
                }
            this.setState({
                user: user
            })
        },(error)=>{
            console.log(error);
        });
    }

    updateProfile(newPass){
        var xhr = new Xhr({
            json: true,
            contentType: "application/json",
            headers: {
                Accept: "application/json"
            }
        });
        let user = this.state.user;
        let body = { username: user.login, password : newPass, enabled: 1 };
        var c = new Cookie();
        c.getCookie('access_token')==undefined ? this.refreshToken() : '';
        xhr.put("http://192.168.100.5:8080/PeopleShoesRest_war/users?access_token="+c.getCookie('access_token'),body).then((response)=> {
            console.log(response);
        },(error)=>{
            console.log(error);
        });
    }

    createProduct(i){
        var xhr = new Xhr({
            json: true,
            contentType: "application/json",
            headers: {
                Accept: "application/json"
            }
        });
        var c = new Cookie();
        c.getCookie('access_token')==undefined ? this.refreshToken() : '';
        xhr.post("http://192.168.100.5:8080/PeopleShoesRest_war/shoes?access_token="+c.getCookie('access_token'),i.shoes).then((response)=> {
            this.menuHandle(2);
        },(error)=>{
            console.log(error);
        });
    }
    updateProduct(i){
        var xhr = new Xhr({
            json: true,
            contentType: "application/json",
            headers: {
                Accept: "application/json"
            }
        });
        var c = new Cookie();
        c.getCookie('access_token')==undefined ? this.refreshToken() : '';
        xhr.put("http://192.168.100.5:8080/PeopleShoesRest_war/shoes?id="+i.id+"&access_token="+ c.getCookie('access_token'),i.shoes).then((response)=> {
            this.menuHandle(2);
        },(error)=>{
            console.log(error);
        });
    }

    deleteProduct(i){
        var xhr = new Xhr({
            json: true,
            contentType: "application/json",
            headers: {
                Accept: "application/json"
            }
        });
        var c = new Cookie();
        c.getCookie('access_token')==undefined ? this.refreshToken() : '';
        xhr.delete("http://192.168.100.5:8080/PeopleShoesRest_war/shoes?id="+i+"&access_token="+c.getCookie('access_token')).then((response)=> {
            console.log(response);
            this.menuHandle(2);
        },(error)=>{
            console.log(error);
        });
    }

    slots(n){
        this.setState({
            size:n
        })
    }

    render() {
        return <div className="page">
            <Cart focus={this.state.popup2} hid={this.cartHidden.bind(this)} product={this.state.user.product} removeProductCart={this.removeProductCart.bind(this)} lang={this.state.data.lang}/>
            <Popup update={this.updateProfile.bind(this)} focus={this.state.popup} hid={this.profileHidden.bind(this)} log={this.logIn.bind(this)} sing={this.singUp.bind(this)} exit={this.exit.bind(this)} message={this.state.errorMessage} user={this.state.user.login} lang={this.state.data.lang}/>
            <Header>
                <Topheader user={this.state.user.login} profile={this.profileVisibl.bind(this)} data={this.state.data} onHandle={this.handle1.bind(this)} onHandle2={this.handle3.bind(this)}/>
                <Centerheader log={this.state.data.log} cart={this.state.data.cart} k={this.state.user.product.length} search={this.state.data.search} user={this.state.user} cartVisibl={this.cartVisibl.bind(this)} profileVisibl={this.profileVisibl.bind(this)}/>
                <Botheader focus={this.state.index} items={this.state.menu} onHandle={this.menuHandle.bind(this)}/>
            </Header>
            <Path menu={this.state.menu} index={this.state.index} details={this.state.details}/>
            <Main>
                <Categories>
                    <Menu nameCat={this.state.data.nameCat} categories={this.state.categories} lang={this.state.data.lang} onHandle={this.requestGetList.bind(this)} onHandle2={this.requestGet.bind(this)}/>
                    <Catalog data={this.state.data} filterPrice={this.filterPrice.bind(this)} filterSize={this.filterSize.bind(this)} filterColor={this.filterColor.bind(this)}/>
                </Categories>
                <Goods n={this.state.nPage} slots={this.slots.bind(this)} shoesPage={this.shoesPage.bind(this)} createProduct = {this.createProduct.bind(this)} updateProduct = {this.updateProduct.bind(this)} deleteProduct={this.deleteProduct.bind(this)} context={this.state.main} lang={this.state.data.lang} money={this.state.money} onHandle2={this.requestGet.bind(this)} details={this.details.bind(this)} addProductCart={this.addProductCart.bind(this)} removeProductCart={this.removeProductCart.bind(this)} user={this.state.user} profileVisibl={this.profileVisibl.bind(this)}/>
            </Main>
            <Footer>
                <Footertop data={this.state.data}/>
                <Footercenter data={this.state.data}/>
                <div className="footer-bot">
                    Vadim Shestov 2016
                </div>
            </Footer>
        </div>
    }
}