const val = require('express-validator')
var myValidation = function(body, id, name, myclass, grade){

    const rule = {       
       name: check('name').isLength({min:1}).withMessage('Name must not be empty'),
       id:('id').isLength({min:1}).withMessage('Id must not be empty'),
       grade:check('grade').isLength({min:1}).withMessage('Grade must not be empty'),
       myclass:check('class').isLength({min:1}).withMessage('myclass must not be empty')
    }
    return val.validate(body, rule);
}
module.exports.validateMyData = myValidation;