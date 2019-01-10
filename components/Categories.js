import { Column, Columns, Title } from 'bloomer'
import { Link } from '../routes'
import CategoryCard from './CategoryCard'

export default ({ categories }) => {
  return (
    <React.Fragment>
      <Title
        hasTextColor='primary'
        className='is-size-5-mobile is-size-3 has-text-centered-mobile'>
        Наш ассортимент
      </Title>
      <Columns>
        {categories.length &&
          categories.map((category, index) => (
            <Column key={index}>
              <Link route='category' params={{ name: category.name }}>
                <a>
                  <CategoryCard category={category} />
                </a>
              </Link>
            </Column>
          ))}
      </Columns>
    </React.Fragment>
  )
}
