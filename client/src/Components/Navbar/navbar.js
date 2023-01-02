// Navbar


function Navbar () {
    return (
        <div>
        <navigator>
        <a href="/manage/home">Home</a>|
        <a href="/auth/vendor/login">Login</a>|
        <a href="/auth/vendor/register">Register</a>|
        <a href="/auth/vendor/logout">Logout</a>|
        <a href="/manage/setting">Settings</a>|
        <a href="/manage/create/appointment">Create</a>|
        <a href="/manage/manage/appointment">Manage</a>|
        </navigator>
        </div>
    )
}


export default Navbar;