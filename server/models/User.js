const {mongoose} = require("../db/mongoose");

const User = mongoose.model("User", {
  email: {
    type: String,
    require: true,
    trim: true,
    minLength: 1
  }
});

module.exports = {User}
