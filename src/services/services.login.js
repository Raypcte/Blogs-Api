const { User } = require('../models');

const serviceLogin = async ({ email, password }) => {
  const service = await User.findOne({
    details: ['id', 'email', 'displayName'],
    where: { email, password },
  });

  if (!service) return { type: 'SERVICE_NOT_FOUND' };
  // const token = createToken(service.dataValues);
  return 'token';
};

module.exports = serviceLogin;
