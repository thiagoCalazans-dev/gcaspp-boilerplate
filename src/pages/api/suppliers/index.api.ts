
import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../../lib/prisma'


export interface Supplier {
    id: number,
    name: string,
}


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Supplier[]>
) {
    const result = await prisma.supplier.findMany()
    res.status(200).json(result)
}