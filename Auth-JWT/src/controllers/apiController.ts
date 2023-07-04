import { Request, Response } from 'express';
import JWT from 'jsonwebtoken'
import { User } from '../models/User';
import dotenv from 'dotenv'
import { generateToken } from '../config/passport';

dotenv.config()

type RLtype = {
    email: string,
    password: string
}

export const ping = (req: Request, res: Response) => {
    res.json({ pong: true });
}

export const register = async (req: Request, res: Response) => {
    const { email, password }: RLtype = req.body

    if (email && password) {

        let hasUser = await User.findOne({ where: { email } });

        if (!hasUser) {
            let newUser = await User.create({ email, password });
            const token = generateToken({ id: newUser.id })

            res.status(201);
            res.json({ id: newUser.id, token });
        } else {
            res.json({ error: 'E-mail já existe.' });
        }

    }

    res.json({ error: 'E-mail e/ou senha não enviados.' });
}

export const login = async (req: Request, res: Response) => {
    const { email, password }: RLtype = req.body

    if (email && password) {

        let user = await User.findOne({ where: { email, password } });

        if (user) {
            const token = generateToken({ id: user.id })
            res.json({ status: true, token });
            return;
        }
    }

    res.json({ status: false });
}

export const list = async (req: Request, res: Response) => {
    let users = await User.findAll();
    let list: string[] = [];

    for (let i in users) {
        list.push(users[i].email);
    }

    res.json({ list });
}