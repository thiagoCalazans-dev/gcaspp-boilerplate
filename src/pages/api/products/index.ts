// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { prisma } from '../../../lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'

interface Product {
  id: number,
  name: string,
  value: number,
}

 async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Product[]>
) {
  const  result = await prisma.product.findMany()

  res.status(200).json(result)
}