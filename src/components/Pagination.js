import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import { loadAllPosts } from '../services/post-service'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  const Pagination = ({postContent, setPostContent}) => {

        const changePage = (pageNumber = 0 , pageSize = 5) => {
          
          if(pageNumber<0 || pageNumber>=(postContent.totalPages)){
            return;
          }
          
          loadAllPosts(pageNumber, pageSize) // initially we will be at page number 0 and total pages we will keep as 5
          .then( 
            (data) => {
              console.log(data);
               setPostContent(data);
               window.scroll(0,0); // Every time it reloads it will start from top of the page.
            }
          )
          .catch((error) => {
            console.log(error);
            toast.error("Posts could not load!")
          })
        }


    
  return (
    <div className="flex items-center justify-center w-10 px-4 py-3 mx-auto sm:px-6">
      <div className="flex justify-between flex-1 sm:hidden">
        <Link
         to="#"
          className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
        >
          Previous
        </Link>
        <Link
          to="#"
          className="relative inline-flex items-center px-4 py-2 ml-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
        >
          Next
        </Link>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <nav className="inline-flex -space-x-px rounded-md shadow-sm isolate" aria-label="Pagination">
            <Link
              to="#"
              onClick={()=>changePage(postContent.pageNumber-1)}
              className="relative inline-flex items-center px-2 py-2 text-gray-400 rounded-l-md ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 "
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon className="w-5 h-5" aria-hidden="true" />
            </Link>
            {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}
        

        {

            [...Array(postContent.totalPages)].map((item, index)=>(
                <Link
              key={index}
              to="#"
              aria-current="page"
               onClick={()=> changePage(index)}
              className={classNames(
                  "no-underline",
                 index === (postContent.pageNumber) ? 'relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600' : 'relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0',
              )}
            >
    
               {index}
              </Link>
            ))
              
        }
            <Link
              to="#"
              onClick={()=>changePage(postContent.pageNumber+1)}
              className="relative inline-flex items-center px-2 py-2 text-gray-400 rounded-r-md ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon className="w-5 h-5" aria-hidden="true" />
            </Link>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Pagination