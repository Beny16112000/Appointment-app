import React from "react";


// Log-out Component


class Logout extends React.Component {
    constructor(props) {
        super(props);
        this.url = ''
        this.state = {
            users: []
        }
    }


    time = () => {
        window.location.href = '/auth/vendor/login'
    };


    sendRequest = () => {
        const token = `${localStorage.getItem('token')}`
        fetch(this.props.url, {
            method: 'POST',
            body: JSON.stringify({
                'token': token
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            },
        })
        .then ((res) => res.json())
            .then ((data) => {
                localStorage.removeItem('token')
                setInterval(this.time, 2000)
            })
        
    };

    render () {
        return (
            <div onLoad={this.sendRequest()}>
            <h1>You are no longer logged in and are redirected to the home page</h1>
            </div>
        )
    }
}



export default Logout;


