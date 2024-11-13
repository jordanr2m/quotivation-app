import React from 'react'

const CategoryForm = () => {
  return (
    <div className='category-form'>
      <form className='category-filter'>
        <label htmlFor='category'>Filter Quotes:</label>
        <select id='category' name='category'></select>
      </form>
    </div>
  )
}

export default CategoryForm
