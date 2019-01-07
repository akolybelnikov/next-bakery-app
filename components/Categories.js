import { Column, Columns, Title } from 'bloomer';
import CategoryCard from './CategoryCard';

export default ({ categories }) => {
  return (
    <React.Fragment>
      <Title hasTextColor='primary' className='is-size-5-mobile is-size-3 has-text-centered-mobile'>Наш ассортимент</Title>
      <Columns>
        {categories.length &&
          categories.map((category, index) => (
            <Column key={index}>
              <CategoryCard category={category} />
            </Column>
          ))}
      </Columns>
    </React.Fragment>
  )
}
