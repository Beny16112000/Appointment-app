import React from "react";


// Home component


class ManageIndex extends React.Component {
    constructor(props) {
        super(props);
        this.url = ''
        this.state = {
            app: []
        }
    }


    user = () => {
        fetch(this.props.url, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                'Authorization': `${localStorage.getItem('token')}`
            },
        })
        .then ((res) => res.json())
            .then ((data) => {
                this.setState ({
                    show: true,
                    showUser: data['user']
                })
            })
    } 


    render () {
        let username = <div></div>
        if (this.state.show) {
            username = <div>{this.state.showUser['username']}</div>
        }
        return (
            <div onLoad={this.user()}>
            <h1>Welocme {username}</h1>
            <a href="/manage/setting" >Setup your settings</a>
            <br></br>
            <a href="/auth/vendor/logout">Logout</a>
            </div>
        )
    }
};


export default ManageIndex;


