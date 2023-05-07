const express = require('express')
const router = express.Router();
const {check} = require('express-validator');
const controllers =require('./controllers');

router.use(express.json());
// Routing 

router.all('/', (req,res,next) => { next();})
router.get('/',controllers.getUserAll)
router.post('/', [

    check('username','The username is required').notEmpty().isString(),
    check('email','The E-mail is requiered').isEmail().notEmpty(),
    check('password','Password is requiered').notEmpty().isLength({ min:6 }),

])

router.patch('/:id', [
 //   check('id').custom(verifyId)

]/*.modulo.id*/)

router.post('/login', [
    check('email','email is required').notEmpty().isString().isEmail(),
    check('passowrd','password is required').notEmpty().isLength({min:6}),
]/*.modulo.login*/)

module.exports = { 
    router
}



