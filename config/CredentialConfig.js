require('dotenv').config(); // Only needed if using .env file

const email = process.env.EMAIL;
const password = process.env.PASSWORD;
const browser = process.env.BROWSER

console.log(email,password,browser)
if(!email || !password){
    throw new Error("Email or Password not found is env variables")
}

module.exports = {email,password,browser}