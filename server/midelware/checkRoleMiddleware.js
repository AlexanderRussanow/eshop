const jwt = require('jsonwebtoken')
require('dotenv').config()

module.exports = function (role) {
   return function (req, res, next) {
      if (req.method === "OPTIONS") {
         next()
      }
      try {
         const token = req.header.authorization.split(' ')[1]
         if (!token) {
            return res.status(401).json({ mesage: "User is not logged in" })
         }
         const decoder = jwt.verify(token, process.env.SECURITY_KEY)
         if (decoder.role !== role) {
            return res.status(403).json({ mesage: "Sorry, no access" })
         }
         req.user = decoder
         next()
      } catch (e) {
         return res.status(401).json({ mesage: "User is not logged in" })
      }
   }
}