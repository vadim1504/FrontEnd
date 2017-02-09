'use strict';

import React from 'react';

export default class Popup extends React.Component{

    constructor() {
        super();
        this.state = {
            focus:0,
            message: '',
            focus2:0
        }
    }

    close(){
        this.setState({
            focus:0,
            focus2: 0
        });
        this.props.hid();
    }

    logIn(){
        if(this.valid(document.getElementById('login').value,document.getElementById('password').value))
        this.props.log(document.getElementById('login').value,document.getElementById('password').value);
    }

    singUp(){
        if(this.valid(document.getElementById('login').value,document.getElementById('password').value))
            this.props.sing(document.getElementById('login').value,document.getElementById('password').value);
    }

    exit(){
        this.props.exit();
    }

    valid(log,pass){
        let lang = this.props.lang;
        if(log.length<4||log.length>12){
            this.setState({
                message: lang=="English" ? 'Логин не менее 4 и не более 12 символов' : 'Логин не менее 4 и не более 12 символов'
            });
            return false;
        }if(pass.length<4||pass.length>12) {
            this.setState({
                message: lang=="English" ? 'Пароль не менее 4 и не более 12 символов' : 'Пароль не менее 4 и не более 12 символов'
            });
            return false;
        }else
        {
            this.setState({
                message: ''
            });
            return true;
        }
    }

    updateProfile(){
        this.state.focus2==0 ?
        this.setState({
            focus2: 1
        }) : this.setState({
                focus2: 0
            })
    }
    putProfile(){
        this.props.update(document.getElementById('newPassword').value);
        this.close();
    }

    render() {
        let lang=this.props.lang;
        let style;
        this.props.focus==0 ? style={visibility:'hidden'} : style={visibility:'visible'};
        let message;
        this.state.message=='' ? message=this.props.message : message=this.state.message;

        if(this.props.user=='') {
            return <div style={style} className="popup" id="popup2">
                <div className='popup-content'>
                    {lang=="English" ? "Log into account"+this.props.user : "Войти: "+this.props.user}
                    <input type='text' id='login' placeholder={lang=="English" ? "Login" : "Логин"}></input>
                    <input type='password' id='password' placeholder={lang=="English" ? "Password" : "Пароль"}></input>
                    <button type='submit' id='login' onClick={this.logIn.bind(this)}>
                        {lang=="English" ? "Log in" : "Войти"}</button>
                    <button type='submit' id='SingUp' onClick={this.singUp.bind(this)}>
                        {lang=="English" ? "Sing up" : "Зарегистрироваться"}</button>
                    <button type='submit' onClick={this.close.bind(this)}>   {lang=="English" ? "Close" : "Закрыть"}</button>
                    <h3>{message}</h3>
                </div>
            </div>
        }else{
            let style2;
            this.state.focus2==0 ? style2={visibility:'hidden',height :'0px'} : style2={visibility:'visible'};
            return <div style={style} className="popup" id="popup2">
                <div className='popup-content'>
                    <div>{lang=="English" ? "You are signed in account: "+this.props.user : "Вы вошли под аккаунтом: "+this.props.user}</div>
                    <button type='submit' onClick={this.exit.bind(this)}>{lang=="English" ? "Exit" : "Выйти"}</button>
                    <button type='submit' onClick={this.updateProfile.bind(this)}>{lang=="English" ? "Change Pass" : "Изменить пароль"}</button>
                    <div style={style2}>
                        <input type='password' id='newPassword' placeholder={lang=="English" ? "newPassword" : "newПароль"}></input>
                        <button type='submit' onClick={this.putProfile.bind(this)}>{lang=="English" ? "Ok" : "Ok"}</button>
                    </div>
                        <button type='submit' onClick={this.close.bind(this)}> {lang=="English" ? "Close" : "Закрыть"}</button>
                </div>
            </div>
        }
    }
}

