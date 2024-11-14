import { Filter } from "react-feather";
import { IoIosArrowDown } from "react-icons/io";

const CategoryForm = ({ category, categories, handleCategoryChange }) => {
    return (
        <div className='category-form'>
            <form className='category-filter' onSubmit={(e) => e.preventDefault()}>
                <Filter />
                <label htmlFor='category'>Filter Quotes:</label>
                <div className="select-wrapper">
                    <select id='category' name='category' value={category} onChange={handleCategoryChange}>
                        {categories.map(category => (
                            <option key={category} value={category}>{category}</option>
                        ))}
                    </select>
                    <IoIosArrowDown className="arrow" />
                </div>
            </form>
        </div>
    )
}

export default CategoryForm
