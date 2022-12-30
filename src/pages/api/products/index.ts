// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { prisma } from '../../../lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'


export interface Product {
  id: number,
  name: string,  
  value: number,
}


 export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Product[]>
) {
  const  result = await prisma.product.findMany()

  res.status(200).json(result)
}