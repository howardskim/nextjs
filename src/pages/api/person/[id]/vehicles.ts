import { NextApiRequest, NextApiResponse } from 'next';

export default function getAllVehiclesByPersonId(req: NextApiRequest, res: NextApiResponse){
    res.json([{name: 'howard'}, {name: 'tim'}, {getAllVehiclesByPersonId: 'getAllVehiclesByPersonId'}])
    
}