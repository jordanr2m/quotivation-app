import { Filter } from "react-feather";

const CategoryForm = ({ category, categories }) => {
  return (
    <div className='category-form'>
      <form className='category-filter'>
        <Filter />
        <label htmlFor='category'>Filter Quotes:</label>
        <select id='category' name='category'>
            {categories.map((category, index) => (
                <option key={index}>{category}</option>
            ))}
        </select>
      </form>
    </div>
  )
}

export default CategoryForm
