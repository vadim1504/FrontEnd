import React from "react"


export default class Footercenter extends React.Component {

    render(){
        let category = [this.props.data.women,this.props.data.menSale,this.props.data.jewellery,this.props.data.accessories,this.props.data.sunglass,this.props.data.sitemap];
        let information = [this.props.data.aboutUs,this.props.data.deliveryInformation,this.props.data.privacyPolicy,this.props.data.termsConditions,this.props.data.help,this.props.data.location];
        let account = [this.props.data.account, this.props.data.orderHistory,this.props.data.WishList,this.props.data.newsletter,this.props.data.cart2,this.props.data.checkOut];
        return <div className="footer-center">
            <div className="content2">
                <div className="col1">
                    <div>
                        <div className="">
                            <span id="log">{this.props.data.log}</span>
                        </div>
                        <div className="text3">
                            Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here content here.
                        </div>
                        <div className="socials">
                            <div className="social">
                                <a>
                                    <i className="fa fa-facebook"></i>
                                </a>
                            </div>
                            <div className="social">
                                <a>
                                    <i className="fa fa-twitter"></i>
                                </a>
                            </div>
                            <div className="social">
                                <a>
                                    <i className="fa fa-google-plus"></i>
                                </a>
                            </div>
                            <div className="social">
                                <a>
                                    <i className="fa fa-skype"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="col2">
                    <div>
                        <h3 className="h3">{this.props.data.category}</h3>
                        <div className="informations">
                            <ul>
                                {
                                    category.map(function (item) {
                                        return <li>
                                        <a className="inform">
                                            <i className="fa fa-angle-double-right"></i>
                                            <span>{item}</span>
                                            </a>
                                            </li>
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col3">
                    <div>
                        <h3 className="h3">{this.props.data.information}</h3>
                        <div className="informations">
                            <ul>
                                {
                                    information.map(function (item) {
                                        return <li>
                                            <a className="inform">
                                                <i className="fa fa-angle-double-right"></i>
                                                <span>{item}</span>
                                            </a>
                                        </li>
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col4">
                    <div>
                        <h3 className="h3">{this.props.data.account}</h3>
                        <div className="informations">
                            <ul>
                                {
                                    account.map(function (item) {
                                        return <li>
                                            <a className="inform">
                                                <i className="fa fa-angle-double-right"></i>
                                                <span>{item}</span>
                                            </a>
                                        </li>
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col5">
                    <div>
                        <h3 className="h3">{this.props.data.contactUS}</h3>
                        <div className="informations">
                            <ul>
                                <li>
                                    <a className="inform">
                                        <i className="fa fa-map-marker icon"></i>
                                        <span>Rongmohl tower 34 New City</span>
                                    </a>
                                </li>
                                <li>
                                    <a className="inform">
                                        <i className="fa fa-skype icon"></i>
                                        <span>Eshop</span>
                                    </a>
                                </li>
                                <li>
                                    <a className="inform">
                                        <i className="fa fa-phone icon"></i>
                                        <span>2(402)234-85467</span>
                                    </a>
                                </li>
                                <li>
                                    <a className="inform">
                                        <i className="fa fa-envelope-o icon"></i>
                                        <span>support@Eshop.com</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    }
}

