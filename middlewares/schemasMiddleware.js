import joi from "joi";

const signupSchema = joi.object({
    name: joi.string().required(),
    email: joi.string().required(),
    password: joi.string().required(),
    confirmPassword: joi.string().required()
})

const signinSchema = joi.object({
    email: joi.string().required(),
    password: joi.string().required()
})

const urlSchema = joi.object({
    url: joi.string().uri().required()
})

function signupMiddleware(req, res, next) {
    const user = req.body
    const userValidation = signupSchema.validate(user)

    if (userValidation.error) {
        res.status(422).send(userValidation.error.details[0].message)
        return
    }

    if (user.password != user.confirmPassword) {
        res.status(422).send("campos senha e sua confirmação precisam ser iguais")
        return
    }

    res.locals.user = req.body

    next()
}

function signinMiddleware(req, res, next) {
    const user = req.body
    const userValidation = signinSchema.validate(user)

    if (userValidation.error) {
        res.status(422).send(userValidation.error.details[0].message)
        return
    }

    res.locals.user = req.body

    next()
}

function urlCheckMiddleware(req,res,next){
    const url = req.body
    const urlValidation = urlSchema.validate(url)

    if(urlValidation.error){
        res.status(422).send(urlValidation.error.details[0].message)
        return
    }

    res.locals.url = req.body

    next()
}

export { signupMiddleware, signinMiddleware, urlCheckMiddleware }