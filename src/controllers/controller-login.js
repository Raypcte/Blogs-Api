const loguin = require('../services/services-loguin');

const enter = async (req, res, next) => {
  try {
      const auth = await loguin.enterToken(req.body);
      if (auth.type === 'USER_NOT_FOUND') {
 return res
      .status(400)
      .json({ message: 'Invalid fields' }); 
}

      req.user = auth;

      return res.status(200).json({ token: auth });
  } catch (id) {
      next(id);
  }
};

module.exports = {
  enter,
};