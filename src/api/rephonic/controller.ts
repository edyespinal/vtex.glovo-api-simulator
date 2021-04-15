import axios from 'axios';
import { Request, Response } from 'express';

interface User {
    id: number
}

export const getAll = async (req: Request, res: Response) => {
    try {
        const { data } = await axios.get('https://api.rephonic.com/api/podcasts/', { headers: { 'X-Rephonic-Api-Key': '203b90fd-bfa4-4671-b46e-af95a5d1f56c' } })
        res.send(data)
    } catch (error) {
        res.send(error.message)
    }
}