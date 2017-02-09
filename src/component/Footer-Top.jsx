import React from "react"

export default class Footertop extends React.Component {

    render(){
        return <div className="footer-top">
                <div className="content">
                    <div className="fblock">
                        <div className="newsletter">
                            <h2 className="text2">{this.props.data.newsletter}</h2>
                            <input className="email" type="text" name="email" placeholder={this.props.data.enterEmail}></input>
                            <button className="but2">{this.props.data.subscribe}</button>
                        </div>
                    </div>
                    <div className="fblock">
                        <div>
                            <h2 className="text2"><div className="mob fa fa-phone"></div>{this.props.data.hotLine}</h2>
                            <div className="lines">
                                <h2 className="line">+022-88456 24/7</h2>
                                <h2 className="line">support@shop.by</h2>
                            </div>

                        </div>
                    </div>
                    <div className="fblock">
                        <h2 className="text2">{this.props.data.PaymentOptions}</h2>
                        <div className="payments">
                            <div className="payment ">
                                <a>
                                    <i className="fa fa-cc-paypal"></i>
                                </a>
                            </div>
                            <div className="payment ">
                                <a>
                                    <i className="fa fa-cc-stripe"></i>
                                </a>
                            </div>
                            <div className="payment ">
                                <a>
                                    <i className="fa fa-cc-visa"></i>
                                </a>
                            </div>
                            <div className="payment fa ">
                                <a>
                                    <i className="fa-cc-mastercard"></i>
                                </a>
                            </div>
                            <div className="payment ">
                                <a>
                                    <i className="fa fa-cc-amex"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    }
}