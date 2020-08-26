import { NextApiRequest, NextApiResponse } from 'next';

export default function getPersonById(req: NextApiRequest, res: NextApiResponse){
    res.json([{name: 'howard'}, {name: 'tim'}])
    
}