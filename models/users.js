module.exports = {
  get: function (id) {
    const users = {
      1: {
        name: "Test User",
        email: "test@user.com"
      }
    }

    return users[id];
  }
};
