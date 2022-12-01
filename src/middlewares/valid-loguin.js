// const { emailValid } = require('../utils/loguins');

const validLogin = (req, res, next) => {
  const { email, password } = req.body;

  if (email === '' || password === '') {
 return res
    .status(400)
    .json({ message: 'Some required fields are missing' }); 
}

//   const { error } = emailValid.validate(req.body);
//   if (error) {
//  return res
//     .status(400)
//     .json({ message: 'Invalid fields' }); 
// }

  return next();
};

module.exports = {
  validLogin,
};