import { NextApiRequest, NextApiResponse } from 'next';

export default function getVehicleById(req: NextApiRequest, res: NextApiResponse){
    res.json([{name: 'howard'}, {name: 'tim'}])
    
}