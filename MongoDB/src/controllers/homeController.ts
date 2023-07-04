import { Request, Response } from 'express';
import { Product } from '../models/Product';
import User from '../models/User';

export const home = async (req: Request, res: Response) => {

    let users = await User.find({
        email: 'matheusferrazza@gmail.com'
    });
    console.log('Usuários: ', users)


    let list = Product.getAll();
    let expensiveList = Product.getFromPriceAfter(12);

    res.render('pages/home', {
        name: 'Bonieky',
        lastName: 'Lacerda',
        // showOld,
        products: list,
        expensives: expensiveList,
        frasesDoDia: []
    });

}

