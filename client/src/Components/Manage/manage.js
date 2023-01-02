import React from "react";


// Manage Your Appointments 


class ManageAppointments extends React.Component {
    constructor(props) {
        super(props);
        this.url = '';
        this.state = {
            app: []
        }
    }

    getAppointments = () => {
        fetch(this.props.url, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                'Authorization': `${localStorage.getItem('token')}`
            }    
        })
        .then ((res) => res.json())
            .then ((data) => {
                this.setState ({
                    show: true,
                    appointments: data
                })
            })
    
    }


    sendConfirm = (id) => {
        fetch(this.props.url + id, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            },
        })
    }


    sendDelete = (id) => {
        fetch(this.props.url + id, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            },
        })
    }


    render () {
        let appointmentsSee = <div></div>
        if (this.state.show) {
            appointmentsSee = <div>
                <table>
                <tr>
                <th>User</th>
                <th>Day</th>
                <th>Start</th>
                <th>End</th>
                <th>Status</th>
                </tr>
                {this.state.appointments.map(
                    (appointment) => 
                    <tr>
                    <td>{appointment['user']}</td>
                    <td>{appointment['day']}</td>
                    <td>{appointment['start']}</td>
                    <td>{appointment['end']}</td>
                    <td>{appointment['confirm']}</td>
                    <td><button onClick={() => this.sendConfirm(appointment['id'])}>Confirm</button></td>
                    <td><button onClick={() => this.sendDelete(appointment['id'])}>Delete</button></td>

                    </tr>
                )}
                </table>
            
            </div>
        }
        return (
            <div>
            <button onClick={() => this.getAppointments()}>See</button>
            {appointmentsSee}
            </div>
        )
    }
}



export default ManageAppointments;


