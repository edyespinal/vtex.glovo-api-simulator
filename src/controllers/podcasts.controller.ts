import { Request, Response } from "express";

export const ctrl_podcasts_test = async (req: Request, res: Response): Promise<Response> => {
    try {
        return res.status(201).json({msg: 'Testing'})
    } catch (error) {
        return res.status(400).json({ msg: error.message }) 
    }
}