import passport from 'passport'
import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'
import { Strategy as JWTStrategy, ExtractJwt } from 'passport-jwt'
import { User, UserInstance } from '../models/User'
import { Request, Response, NextFunction } from 'express'
dotenv.config()

const notAuthorized = {status: 401, message: 'Não autorizado.'}
const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET_KEY as string
} 

passport.use(new JWTStrategy(options, async (payload, done) => {
    const user = await User.findByPk(payload.id)
    return user ? done(null, user) : done(notAuthorized, false)
}))

export const generateToken = (data: object) => {
    return jwt.sign(
        data,
        process.env.JWT_SECRET_KEY as string
    )
}

export const privateRoute = (req: Request, res: Response, next: NextFunction) => {
    passport.authenticate('jwt', (err: Error, user: UserInstance) => {
        return user ? next() : next(notAuthorized)
    })(req,res,next)
}

export default passport