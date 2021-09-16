require('dotenv').config()
const ApiError = require('../errors/apiError')
const bcrypt = require('bcrypt')
const { User, Cart } = require('../models/models')
const jwt = require('jsonwebtoken')

const tokenGenerator = (id, email, role) => {
   return jwt.sign({ id, email, role }, process.env.SECURITY_KEY, { expiresIn: '24h' })
}
class UserController {
   async registration(req, res, next) {
      const { email, password, role } = req.body
      if (!email || !password) {
         return next(ApiError.badRequest("Email and password required"))
      }
      const candidate = await User.findOne({ where: { email } })
      if (candidate) {
         return next(ApiError.badRequest('Email alredy exist'))
      }
      const hashPasswod = await bcrypt.hash(password, 3)
      const newUser = await User.create({ email, password: hashPasswod, role })
      const cart = await Cart.create({ userId: newUser.id })
      const token = tokenGenerator(newUser.id, newUser.email, newUser.role)
      return res.json({ token })
   }

   async logIn(req, res, next) {
      const { email, password } = req.body
      const user = await User.findOne({ where: { email } })
      if (!user) {
         return next(ApiError.badRequest(`user doesn't exist`))
      }
      let passwordChecker = bcrypt.compareSync(password, user.password)
      if (!passwordChecker) {
         return next(ApiError.badRequest(`Not correct password`))
      }
      const token = tokenGenerator(user.id, user.email, user.role)
      return res.json({ token })
   }
   async check(req, res) {
      const token = tokenGenerator(req.user.id, req.user.email, req.user.role)
      return res.json({ token })
   }
}

module.exports = new UserController()