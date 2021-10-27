import { Fragment, useEffect } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setLogout } from '../Store/actions/userAction'

function Navbar () {
  const history = useHistory()
  const dispatch = useDispatch()
  const { access_token } = useSelector(state => state.usersState)
  function clickLogout () {
    localStorage.clear()
    dispatch(setLogout())
    history.push('/login')
  }

  function clickLogin () {
    history.push('/login')
  }

  return (
    <Disclosure as='nav' className='bg-blue-100'>
      {({ open }) => (
        <>
          <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
            <div className='relative flex items-center justify-between h-16'>
              <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
                {/* Mobile menu button*/}
                <Disclosure.Button className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
                  <span className='sr-only'>Open main menu</span>
                  {open ? (
                    <XIcon className='block h-6 w-6' aria-hidden='true' />
                  ) : (
                    <MenuIcon className='block h-6 w-6' aria-hidden='true' />
                  )}
                </Disclosure.Button>
              </div>
              <div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-start'>
                <div className='flex-shrink-0 flex items-center'>
                  <img
                    className='hidden lg:block h-8 w-auto'
                    src='https://icon-library.com/images/newspaper-app-icon/newspaper-app-icon-8.jpg'
                    alt='News-App'
                    style={{ width: '65px' }}
                  />
                </div>
              </div>
              <div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
                {/* Profile dropdown */}
                <Menu as='div' className='ml-3 relative'>
                  <div>
                    {access_token ? (
                      <button
                        class='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
                        onClick={() => clickLogout()}
                      >
                        Logout
                      </button>
                    ) : !localStorage.getItem('access_token') ? (
                      <button
                        class='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                        onClick={() => clickLogin()}
                      >
                        Login
                      </button>
                    ) : null}
                  </div>
                  <Transition
                    as={Fragment}
                    enter='transition ease-out duration-100'
                    enterFrom='transform opacity-0 scale-95'
                    enterTo='transform opacity-100 scale-100'
                    leave='transition ease-in duration-75'
                    leaveFrom='transform opacity-100 scale-100'
                    leaveTo='transform opacity-0 scale-95'
                  ></Transition>
                </Menu>
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  )
}

export default Navbar
