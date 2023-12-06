import jwt from "jsonwebtoken"
import 'dotenv/config'

const verifyToken = (req, res, next) => {
    try {
        const { authorization } = req.headers;
        const token = authorization && authorization.split(" ")[1];
        if (token !== 'null') {
            jwt.verify(token, process.env.JWT_SECRET, function (err, decoded) {
                if (err) {
                    return res.status(401).send({ message: "unauthorized token", err })
                }
                req.decodedToken = decoded;
                req.customerMode = 'user';

                return next()
            });
        } else {
            req.customerMode = 'guest';

            return next()
        }
    } catch (err) {
        return res.status(401).send({ err })
    }
}

export default verifyToken