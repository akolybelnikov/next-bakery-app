import { Column, Columns, Title } from 'bloomer'
import CategoryCard from './CategoryCard'
import Link from 'next/link'

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
              <Link href={`/category?name=${category.name}`}>
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
