import { NextApiRequest, NextApiResponse } from 'next';

export default function getAllVehicles(req: NextApiRequest, res: NextApiResponse){
    return res.json({hello: 'world', method: req.method})
    
}