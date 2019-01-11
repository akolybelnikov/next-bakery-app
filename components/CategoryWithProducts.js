import { Column, Columns } from 'bloomer'
import CategoryCard from './CategoryCard'
import ComponentContainer from './ComponentContainer'
import ProductThumb from './ProductThumb'
import { Link } from '../routes'

export default ({ category, products }) => (
  <ComponentContainer>
    <Columns>
      <Column isSize={5}>
        <CategoryCard category={category} />
      </Column>
      <Column>
        <Columns isMultiline isMobile style={{padding: '0 0.5rem'}}>
          {products.map((product, index) => (
            <Column isSize={3} key={index}>
              <Link
                route='product'
                params={{
                  category: product.category,
                  id: product.productId,
                }}>
                <a>
                  <ProductThumb product={product} />
                </a>
              </Link>
            </Column>
          ))}
        </Columns>
      </Column>
    </Columns>
  </ComponentContainer>
)
