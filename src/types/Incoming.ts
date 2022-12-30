import { Product } from "./Product"
import { Supplier } from "./Supplier"

export interface Incoming {
    id: number,
    supplier: Supplier, 
    products:    Product[],
    value:     number,
  }