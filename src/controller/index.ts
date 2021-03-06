import type { Request, Response } from 'express'

export const patchProduct = async (req: Request, res: Response) => {
  const { authorization } = req.headers

  if (authorization !== process.env.TOKEN) {
    return res.status(403).json({
      error: 'Missing token',
    })
  }

  const { productId } = req.params
  const { price, available } = req.body

  const updatedProduct: UpdatedProduct = {
    id: productId,
    name: 'Product name',
    price,
    image_url: 'image_url',
    description: 'Product description',
    available,
  }

  res.status(200).json(updatedProduct)
}
