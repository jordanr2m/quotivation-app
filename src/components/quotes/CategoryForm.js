import { Filter } from "react-feather";

const CategoryForm = ({ category, categories, handleCategoryChange }) => {
  return (
    <div className='category-form'>
      <form className='category-filter'>
        <Filter />
        <label htmlFor='category'>Filter Quotes:</label>
        <select id='category' name='category' value={category} onChange={handleCategoryChange}>
            {categories.map((category, index) => (
                <option key={index}>{category}</option>
            ))}
        </select>
      </form>
    </div>
  )
}

export default CategoryForm
