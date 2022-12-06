const serviceLogin = require('../services/services.login');

const enter = async (req, res, next) => {
  try {
    const auth = await serviceLogin(req.body);
    if (auth.type === 'USER_NOT_FOUND') {
      return res.status(400).json({ message: 'Invalid fields' });
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
