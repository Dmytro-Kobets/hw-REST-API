const Joi = require("joi");

exports.createContactValidator = (data) =>
  Joi.object()
    .keys({
      name: Joi.string().min(3).max(20).required(),
      email: Joi.string().email().required(),
      phone: Joi.string()
        .regex(/^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$/)
        .required(),
    })
    .validate(data);

exports.favoriteValidator = (data) =>
  Joi.object()
    .keys({
      favorite: Joi.boolean().required().messages({
        "any.required": "Missing field favorite",
      }),
    })
    .validate(data);
