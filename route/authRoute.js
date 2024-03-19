const route = require('express').Router()
const { register, login, logout, verifyUser } = require('../controller/authctrl')

route.post(`/register`, register)

route.post(`/login`, login)

route.get(`/logout`, logout)

route.get(`/verify/user`, verifyUser)

module.exports = route