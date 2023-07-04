import { Request, Response } from 'express'
import { Product } from '../models/Product'

const home = (req: Request, res: Response) => {
    let showOld: boolean = true
    let age: number = 25
    let user = {
        nome: 'matheus',
    }

    if(age < 24) {
        showOld = false
    }

    let list = Product.getAll()
    let expensiveList = Product.getLowerPrices(12)
    
    res.render('home', {
        user,
        showOld,
        product: list,
        expensiveList
    }) // home: home.mustache
}

export default home