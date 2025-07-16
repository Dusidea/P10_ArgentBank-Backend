const userService = require("../services/userService");

module.exports.createUser = async (req, res) => {
  let response = {};

  try {
    const responseFromService = await userService.createUser(req.body);
    response.status = 200;
    response.message = "User successfully created";
    response.body = responseFromService;
  } catch (error) {
    console.error("Something went wrong in userController.js", error);
    response.status = 400;
    response.message = error.message;
  }

  return res.status(response.status).send(response);
};

module.exports.loginUser = async (req, res) => {
  let response = {};

  try {
    const responseFromService = await userService.loginUser(req.body);
    response.status = 200;
    response.message = "User successfully logged in";
    response.body = responseFromService;
  } catch (error) {
    console.error("Error in loginUser (userController.js)");
    response.status = 400;
    response.message = error.message;
  }

  return res.status(response.status).send(response);
};

module.exports.getUserProfile = async (req, res) => {
  let response = {};

  try {
    const responseFromService = await userService.getUserProfile(req);
    response.status = 200;
    response.message = "Successfully got user profile data";
    response.body = responseFromService;
  } catch (error) {
    console.log("Error in userController.js");
    response.status = 400;
    response.message = error.message;
  }

  return res.status(response.status).send(response);
};

module.exports.updateUserProfile = async (req, res) => {
  // added specific list of allowedFields to prevent edition of any other field in userProfile
  const allowedFields = ["username"];
  let response = {};

  for (const field of allowedFields) {
    if (req.body[field] !== undefined) {
      response[field] = req.body[field];
    }
  }

  try {
    const responseFromService = await userService.updateUserProfile(req);
    response.status = 200;
    response.message = "Successfully updated user profile data";
    response.body = responseFromService;
  } catch (error) {
    console.log("Error in updateUserProfile - userController.js");
    response.status = 400;
    response.message = error.message;
  }

  return res.status(response.status).send(response);
};
