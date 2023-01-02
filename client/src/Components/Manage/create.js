import React from 'react';


// Create Appointment


class MakeAppointment extends React.Component {
    constructor(props) {
        super(props);
        this.url = ''
        this.state = {
            appointments: []
        }
    }


    sendInput = () => {
        const store = document.getElementById('store').value
        const user = document.getElementById('email').value
        const day = document.getElementById('day').value
        const start = document.getElementById('start').value
        const end = document.getElementById('end').value

        this.setState ({
            store: store,
            user: user,
            day: day,
            start: start,
            end: end
        })

        fetch(this.props.url, {
            method: 'POST',
            body: JSON.stringify({
                'store': store,
                'user': user,
                'day': day,
                'start': start,
                'end': end
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            },
        })
        .then ((res) => res.json())
            .then ((data) => {
                this.setState ({
                    show: true,
                    DataMessage: data['message']
                })
            })
    }


    render () {
        let message = <div></div>
        if (this.state.show) {
            message = <div>
            <h3>{this.state.DataMessage}</h3>
            </div>
        }
        return (
            <div>
            <label>Store</label>
            <input type={"text"} name={"store"} id={"store"}></input>
            <br></br>
            <label>Email</label>
            <input type={"email"} name={"email"} id={"email"}></input>
            <br></br>
            <label>Day</label>
            <input type={"text"} name={"day"} id={"day"}></input>
            <br></br>
            <label>Start</label>
            <input type={"time"} name={"start"} id={"start"}></input>
            <br></br>
            <label>End</label>
            <input type={"time"} name={"end"} id={"end"}></input>
            <br></br>
            <button onClick={() => this.sendInput()}>Create</button>
            {message}
            </div>
        )
    }


}



export default MakeAppointment


