const mapError = {
  BAD_REQUEST: 400,
  CONFLICT: 409,
};

module.exports = (type) => mapError[type];