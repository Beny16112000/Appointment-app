import React from "react";
import CheckToken from "../Token/check";


// Login Component


class LoginVendors extends React.Component {
    constructor (prors) {
        super(prors);
        this.url = '';
        this.state = {
            users: []
        }
    }

    sendInputGetToekn = () => {
        const username = document.getElementById('username').value
        const password = document.getElementById('password').value

        this.setState({
            username: username,
            password: password
        })

        fetch(this.props.url, {
            method: 'POST',
            body: JSON.stringify({
                'username': username,
                'password': password
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            },
        })
        .then ((res) => res.json())
            .then ((data) => {
                if (data['message'] === 'Username or password not exist !') {
                    this.setState ({
                        show: true,
                        dataMessage: data['message']
                    })
                }
                else {
                    localStorage.setItem('token', data['message']);
                    window.location.href = '/manage/home'
                }
            })
    };


    isAllowed = () => {
        if (CheckToken() !== null) {
            window.location.href = '/manage/home'
        }
    }


    render () {
        let messgae = <div></div>
        if (this.state.show) {
            messgae = <div><h3>{this.state.dataMessage}</h3></div>
        }
        return (
            <div onLoad={this.isAllowed()}>
            <h1>Vendor Login</h1>
            {messgae}
            <label>Username</label>
            <input type={"text"} name={"username"} id={"username"}></input>
            <br></br>
            <label>Password</label>
            <input type={"password"} name={"password"} id={"password"}></input>
            <br></br>
            <button onClick={() => this.sendInputGetToekn()}>Login</button>
            <br></br>
            <a href="/auth/vendor/register">Go to create account</a>
            </div>
        )
    }
}


export default LoginVendors


