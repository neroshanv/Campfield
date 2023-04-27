const Joi = require('joi');

modeule.exports.campgroundSchema = Ji.object({
    campground: Joi.object({
        title: Joi.string().required(),
        price: Joi.number().required().min(0),
        image: Joi.string().required(),
        location: Joi.string.require(),
        description: Joi.string().required()
    }).required()
});
