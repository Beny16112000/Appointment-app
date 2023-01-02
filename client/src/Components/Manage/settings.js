import React from 'react';


// Settings


class Settings extends React.Component {
    constructor(props) {
        super(props);
        this.url = '';
        this.state = {
            set: []
        }
    }


    sendInputs = () => {
        const name = document.getElementById('name').value
        const length = document.getElementById('length').value
        const price = document.getElementById('price').value
        const opend = document.getElementById('opend').value
        const closed = document.getElementById('closed').value
        const openh = document.getElementById('openh').value
        const closeh = document.getElementById('closeh').value

        this.setState({
            name: name,
            length: length,
            price: price,
            opend: opend,
            closed: closed,
            openh: openh,
            closeh: closeh
        })

        fetch(this.props.url, {
            method: 'POST',
            body: JSON.stringify({
                'name': name,
                'length': length,
                'price': price,
                'opend': opend,
                'closed': closed,
                'openh': openh,
                'closeh': closeh
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                'Authorization': `${localStorage.getItem('token')}`
            },
        })
    }


    render () {
        return (
            <div>
            <h3>Setup your Store</h3>
            <label>Name</label>
            <input type={"text"} name={"name"} id={"name"}></input>
            <br></br>
            <label>Meeting Length</label>
            <input type={"number"} name={"length"} id={"length"}></input>
            <br></br>
            <label>Price</label>
            <input type={"number"} name={"price"} id={"price"}></input>
            <br></br>
            <label>Open days</label>
            <select name="opend" id={'opend'}>
            <option value={"1"}>Sunday</option>
            <option value={"2"}>Monday</option>
            <option value={"3"}>Tuesday</option>
            <option value={"4"}>Wednesday</option>
            <option value={"5"}>Thursday</option>
            <option value={"6"}>Friday</option>
            <option value={"7"}>Saturday</option>
            </select>
            <label>Until</label>
            <select name="closed" id={'closed'}>
            <option value={"1"}>Sunday</option>
            <option value={"2"}>Monday</option>
            <option value={"3"}>Tuesday</option>
            <option value={"4"}>Wednesday</option>
            <option value={"5"}>Thursday</option>
            <option value={"6"}>Friday</option>
            <option value={"7"}>Saturday</option>
            </select>
            <br></br>
            <label>Open hours</label>
            <input type={"time"} name={"openh"} id={"openh"}></input>
            <label>Until</label>
            <input type={"time"} name={"closeh"} id={"closeh"}></input>
            <br></br>
            <button onClick={() => this.sendInputs()}>Submit</button>
            </div>
        )
    }

}



export default Settings


