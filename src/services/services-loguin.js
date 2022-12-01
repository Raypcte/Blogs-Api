const { Services } = require('../Services/services-loguin');

const serviceLogin = async ({ email, password }) => {
  const service = await Services.findOne({
    details: ['id', 'email', 'displayName'],
    where: { email, password },
  });

  if (!service) return { type: 'SERVICE_NOT_FOUND' };
  // const token = createToken(service.dataValues);
  // return token;
};

module.exports = {
  serviceLogin,
};