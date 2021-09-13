const ApiError = require('../errors/apiError')

class UserController {
   async registration(req, res) {

   }

   async logIn(req, res) {

   }
   async check(req, res, next) {
      const { id } = req.query
      if (!id) {
         return next(ApiError.badRequest('no id!'))
      }
      res.json(id)

   }
}

module.exports = new UserController()