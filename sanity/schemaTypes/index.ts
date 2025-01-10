import { type SchemaTypeDefinition } from 'sanity'
import productType from './modelTypes/productType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [productType,],
}
