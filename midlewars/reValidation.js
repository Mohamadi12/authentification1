const { body, validationResult } = require('express-validator');

exports.reValidation=[
    body('email','please enter a valid type email').isEmail(),
    body('password','enter a password of length of car').isLength({min:8})
]

exports.reLogin=[
    body('email','please enter a valid type email').isEmail(),
]

exports.validation=(req,res,next)=>{
    const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({errors: errors.array()})
  }
  next()
}