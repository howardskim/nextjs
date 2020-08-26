import { NextApiRequest, NextApiResponse } from 'next';

export default function getVehicleById(req: NextApiRequest, res: NextApiResponse){
    return res.json({byId: req.query.id, message: 'get by id'})
    
}