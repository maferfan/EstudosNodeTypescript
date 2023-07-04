import express, { Router, Request, Response } from "express";

const router = Router()

router.use((req: Request, res: Response) => {
    res.status(404).send("Página não encontrada")
})

export default router