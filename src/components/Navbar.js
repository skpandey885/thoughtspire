import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link, useLocation, useNavigate} from 'react-router-dom';
import { useEffect, useState } from 'react';
import userLogo from "../assets/user.png";
import { doLogout, isLoggedIn } from '../auth';


const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'Trending', href: '/trending', current: false },
  {name: "Create Post", href: '/posts/create',current : false},
  
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Navbar = () => {

  const navigateObj  = useNavigate();
  
  const location = useLocation();
  const [currentRoute, setCurrentRoute] = useState('/');


const [login, setlogin] = useState(false)

useEffect(() => {
  setlogin(isLoggedIn());
}, [login])


const logout = ()=>{
    doLogout(()=>{
      setlogin(false);
      navigateObj("/");
    });
}

// redirect function
const redirect = (link) =>{
  navigateObj(link);
}


  useEffect(() => {
    setFalse(location.pathname)
   
    setCurrentRoute(location.pathname);
  }, [location]);
  
  function setFalse(path) {
    navigation.forEach((element) => {
        
      if ((element.href).localeCompare(path, undefined, { sensitivity: 'accent' }) === 0) {
        element.current = true;
      } else {
        element.current = false;
      }
    });
  }




  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>


          <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block w-6 h-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block w-6 h-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex items-center justify-center flex-1 sm:items-stretch sm:justify-start">
               
  <Link to="/" className='no-underline'>  
  <h1 className='flex items-center gap-2 text-2xl font-bold text-white mr-[30px] ml-[-50px] font-Itim'>
      thoughtspire
    </h1>
    </Link>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item, index) => (
  
                     <Link to = {item.href}
                        key={item.name}

                        className={classNames(
                          'rounded-md px-3 py-2 text-sm font-Sora no-underline' ,
                          index === (navigation.length-1) ? '  text-white whitespace-no-wrap bg-black-600 border border-black-700 shadow-sm hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black-500' : '',
                          item.current ? ' bg-gray-900 text-white'  : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      
                      </Link>

                    ))}
                    
                </div>
                </div>
     

          
                
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

                
                <button
                  type="button"
                  className="p-1 text-gray-400 bg-gray-800 rounded-full hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="w-6 h-6" aria-hidden="true" />
                </button>


  {login && (
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex text-sm bg-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="w-8 rounded-full h-7"
                        src  = {userLogo}
                        alt=""
                        
                      />
                    
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
                    <Menu.Items className="absolute right-0 z-10 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                          onClick={() => redirect("/user/profile")}
                          className={classNames(active ? 'bg-gray-100 no-underline' : '', 'block px-4 py-2 text-sm text-gray-700 no-underline cursor-pointer')}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                     
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            onClick={() => redirect("/user/dashboard")}
                            className={classNames(active ? 'bg-gray-100 no-underline' : '', 'block px-4 py-2 text-sm text-gray-700 no-underline cursor-pointer')}
                          >
                            Dashboard
                          </a>
                        )}
                      </Menu.Item>


                      <Menu.Item>
                        {({ active }) => (
                          <a
                            onClick={logout}
                            className={classNames(active ? 'bg-gray-100 no-underline'  : '', 'block px-4 py-2 text-sm text-gray-700 no-underline cursor-pointer')}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>

                    </Menu.Items>
                  </Transition>
                </Menu>
) }

      
{!login && (
           
<Link to={"/auth/login"}>
<button className="px-4 py-2 ml-3 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700">
Log In
</button>
</Link>                   
                 
) }          
                
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 ">
              {navigation.map((item, index) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    index === (navigation.length-1) ? 'text-white whitespace-no-wrap bg-black-600 border border-black-700 shadow-sm hover:bg-black-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black-500' : '',
                    item.current ? 'bg-gray-900 text-white font-Sora' : 'text-gray-300 hover:bg-gray-700 hover:text-white no-underline font-Sora',
                    'block rounded-md px-3 py-2 text-base font-medium no-underline font-Sora text-center'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>

        
   
  )
}

export default Navbar