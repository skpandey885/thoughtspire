import React, { useEffect, useState } from 'react'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { loadAllCategories } from '../services/category-service'
import { Link, useParams } from 'react-router-dom'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


const FilterByCategory = () => {

  
  const [categories, setcategories] = useState()

  useEffect(() => {

    loadAllCategories().then(data =>{
       setcategories([...data])
    }).catch(error =>{
      console.log(error);
    })
   
  }, [])
  
  
    return (
    /* <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button  className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
        {selectedCategory ? selectedCategory.categoryTitle : 'Filter By Category'}
          <ChevronDownIcon className="w-5 h-5 -mr-1 text-gray-400" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="p-1">
          
          {categories && categories.map((category) => (
      
      <Menu.Item key={category.categoryId} >
        {({ active }) => (
          <a 
            href="#"
            className={classNames(
              active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
              'block px-4 py-2 text-sm no-underline'
            )}
            onClick={() => handleCategoryClick(category)}
          >
            {category.categoryTitle}
          </a>
        )}
      </Menu.Item>
    ))}
      
         
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
      )
*/

<div className='grid grid-cols-5 p-4 m-4 bg-white shadow-md shadow-blue-100 rounded-xl gap-y-3 gap-x-2'>
{
categories && categories.map((data, index) => (
  <Link key={index} 
 className="mx-auto text-gray-900 no-underline cursor-pointer font-Sora hover:text-blue-500"
  to={`/categories/${data.categoryId}/${data.categoryTitle}`}>{data.categoryTitle}</Link> 
))}

</div>
      
    )   
        
    
}

export default FilterByCategory
