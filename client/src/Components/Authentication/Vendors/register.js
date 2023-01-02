import React from "react";
import CheckToken from "../Token/check";


// Register Component


class RegisterVendors extends React.Component {
    constructor (props) {
        super(props);
        this.url = ''
        this.state = {
            catch: []
        }
    }


    getAndSendInputs = () => {
        const username = document.getElementById('username').value
        const fname = document.getElementById('fname').value
        const lname = document.getElementById('lname').value
        const email = document.getElementById('email').value
        const pass1 = document.getElementById('pass1').value
        const pass2 = document.getElementById('pass2').value
        
        this.setState({
            username: username,
            fname: fname,
            lname: lname,
            email: email,
            pass1: pass1,
            pass2: pass2
        })

        fetch(this.props.url, {
            method: 'POST',
            body: JSON.stringify({
                'username': username,
                'fname': fname,
                'lname': lname,
                'email': email,
                'pass1': pass1,
                'pass2': pass2
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            },
        })
        .then ((res) => res.json())
            .then ((data) => {
                if (data['message'] === 'Registerd') {
                    window.location.href = '/auth/vendor/login'
                }
                else {
                    this.setState ({
                        show: true,
                        DataMessage: data['message']
                    })
                }
            })
    };


    isAllowed = () => {
        if (CheckToken() !== null) {
            window.location.href = '/'
        }
    }


    render () {
        let message = <div></div>
        if (this.state.show) {
            message = <div><h3>{this.state.DataMessage}</h3></div>
        }
        return (
            <div onLoad={this.isAllowed()}>
            <h1>Register As vendor</h1>
            {message}
            <h3>Manage your Appointments</h3>
            <label>Username</label>
            <input type={"text"} name={"username"} id={"username"}></input>
            <br></br>
            <label>First name</label>
            <input type={"text"} name={"fname"} id={"fname"}></input>
            <br></br>
            <label>Last Name</label>
            <input type={"text"} name={"lname"} id={"lname"}></input>
            <br></br>
            <label>Email</label>
            <input type={"email"} name={"email"} id={"email"}></input>
            <br></br>
            <label>Password</label>
            <input type={"password"} name={"pass1"} id={"pass1"}></input>
            <br></br>
            <label>Return on the Password</label>
            <input type={"password"} name={"pass2"} id={"pass2"}></input>
            <br></br>
            <button className="button" onClick={() => this.getAndSendInputs()} >Register</button>
            <br></br>
            <a href="/auth/vendor/login">Have account ?</a>
            </div>
        );
    }

}



export default RegisterVendors


