// Check if Token exist


function CheckToken () {
    if (localStorage.getItem('token') === null) {
        return (
            null
        )
    }
};

export default CheckToken


