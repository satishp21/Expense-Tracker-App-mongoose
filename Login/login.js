async function login(e) {
    try{
    e.preventDefault();
    const form = new FormData(e.target);

    const loginDetails = {
        email: form.get("email"),
        password: form.get("password")

    }
    console.log(loginDetails, "this is login details")

    const response = await axios.post('http://localhost:3000/user/login',loginDetails)

    localStorage.setItem('token', response.data.token);
    window.location.href = "../ExpenseTracker/index.html" // change the page on successful login
    }
    catch (err) {
        document.body.innerHTML += `<div style="color:red;">${err} <div>`;
    }
}

function forgotpassword() {
    window.location.href = "../ForgotPassword/index.html"
}