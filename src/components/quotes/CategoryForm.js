import { Filter } from "react-feather";

const CategoryForm = () => {
  return (
    <div className='category-form'>
      <form className='category-filter'>
        <Filter />
        <label htmlFor='category'>Filter Quotes:</label>
        <select id='category' name='category'></select>
      </form>
    </div>
  )
}

export default CategoryForm
