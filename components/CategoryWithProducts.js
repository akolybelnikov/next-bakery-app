import { Column, Columns } from 'bloomer'
import CategoryCard from './CategoryCard'
import ComponentContainer from './ComponentContainer'
import ProductThumb from './ProductThumb'
import { Link } from '../routes'

export default ({ category, products }) => {
  return (
    <ComponentContainer>
      <Columns>
        <Column isSize={5}>
          <Link route='category' params={{ name: category.name }}>
            <a>
              <CategoryCard category={category} />
            </a>
          </Link>
        </Column>
        <Column>
          <Columns isMultiline isMobile style={{ padding: '0 0.5rem' }}>
            {products.map((product, index) => (
              <Column isSize={{mobile: 6, tablet: 3}} key={index}>
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
}
