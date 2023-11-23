import React, { Fragment, useContext, useState } from 'react'
import myContext from '../../context/data/myContext';
import { BsFillCloudSunFill } from 'react-icons/bs'
import { FiSun } from 'react-icons/fi'
import { Link } from 'react-router-dom';
import { Dialog, Transition } from '@headlessui/react'
import { RxCross2 } from 'react-icons/rx'
import { useSelector } from 'react-redux';

function Navbar() {
  const context = useContext(myContext);
  const {mode, toggleMode} = context;

  const [open, setOpen] = useState(false)

  const user = JSON.parse(localStorage.getItem('user'));

  // console.log(user.user.email)

  const logout = () => {
    localStorage.clear('user');
    window.location.href = '/login'
  }

  const cartItems = useSelector((state) => state.cart)

  return (
    <div className='bg-white sticky top-0 z-50'>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl" style={{ backgroundColor: mode === 'dark' ? 'rgb(40, 44, 52)' : '', color: mode === 'dark' ? 'white' : '', }}>
                <div className="flex px-4 pb-2 pt-28">
                  <button
                    type="button"
                    className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <RxCross2 />
                  </button>
                </div>
                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  
                  <Link to={'/allproducts'} className="text-sm font-medium text-gray-900 " style={{ color: mode === 'dark' ? 'white' : '', }}>
                    All Products
                  </Link>

                  {user ? <div className="flow-root">
                    <Link to={'/order'} style={{ color: mode === 'dark' ? 'white' : '', }} className="-m-2 block p-2 font-medium text-gray-900">
                      Order
                    </Link>
                  </div> : ""}

                  {user?.user?.email === "asif@gmail.com" ? <div className="flow-root">
                    <Link to={'/dashboard'} className="-m-2 block p-2 font-medium text-gray-900" style={{ color: mode === 'dark' ? 'white' : '', }}>
                      admin
                    </Link>
                  </div> : ""}

                {user ? <div className="flow-root">
                    <a onClick={logout} className="-m-2 block p-2 font-medium text-gray-900 cursor-pointer" style={{ color: mode === 'dark' ? 'white' : '', }}>
                      Logout
                    </a>
                  </div> : <div className="flow-root">
                    <Link to={'/signup'}  className="-m-2 block p-2 font-medium text-gray-900 cursor-pointer" style={{ color: mode === 'dark' ? 'white' : '', }}>
                      Signup
                    </Link>
                  </div>}
                  <div className="flow-root">
                    <Link to={'/'} className="-m-2 block p-2 font-medium text-gray-900 cursor-pointer">
                      <img
                        className="inline-block w-10 h-10 rounded-full"
                        src="https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg"
                        alt="Dan_Abromov" />                                        </Link>
                  </div>
                </div>

                <div className="border-t border-gray-200 px-4 py-6">
                  <a href="#" className="-m-2 flex items-center p-2">
                    <img
                      src="img/indiaflag.png"
                      alt=""
                      className="block h-auto w-5 flex-shrink-0"
                    />
                    <span className="ml-3 block text-base font-medium text-gray-900" style={{ color: mode === 'dark' ? 'white' : '', }}>INDIA</span>
                    <span className="sr-only">, change currency</span>
                  </a>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <header className="relative bg-white">
        <p className="flex h-10 items-center justify-center bg-green-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8" 
        style={{ backgroundColor: mode === 'dark' ? 'rgb(62 64 66)' : '', color: mode === 'dark' ? 'white' : '', }}>
          Get free delivery on orders over 100 Tk
        </p>

        <nav aria-label="Top" className="bg-gray-100 px-4 sm:px-6 lg:px-8 shadow-xl " style={{ backgroundColor: mode === 'dark' ? '#282c34' : '', color: mode === 'dark' ? 'white' : '', }}>
          <div className="">
            <div className="flex h-16 items-center">
              <button
                type="button"
                className="rounded-md bg-white p-2 text-gray-400 lg:hidden"
                onClick={() => setOpen(true)} style={{ backgroundColor: mode === 'dark' ? 'rgb(80 82 87)' : '', color: mode === 'dark' ? 'white' : '', }}
              >
                <span className="sr-only">Open menu</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>

              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <Link to={'/'} className='flex'>
                  <div className="flex ">
                    <h1 className=' text-2xl font-bold text-black  px-2 py-1 rounded' style={{ color: mode === 'dark' ? 'white' : '', }}>E-VAi</h1>
                  </div>
                </Link>
              </div>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">

                  <Link to={'/allproducts'} className="text-sm font-medium text-gray-700 " style={{ color: mode === 'dark' ? 'white' : '', }}>
                    All Products
                  </Link>
                 {user ?  <Link to={'/order'} className="text-sm font-medium text-gray-700 " style={{ color: mode === 'dark' ? 'white' : '', }}>
                    Order
                  </Link> :   <Link to={'/signup'}  className="text-sm font-medium text-gray-700 " style={{ color: mode === 'dark' ? 'white' : '', }}>
                      Signup
                    </Link>}

                  {user?.user?.email === 'asif@gmail.com' ? 
                   <Link to={'/dashboard'} className="text-sm font-medium text-gray-700 " style={{ color: mode === 'dark' ? 'white' : '', }}>
                    Admin
                  </Link> : ""}
                  
                
                 {user ?  <a onClick={logout} className="text-sm font-medium text-gray-700 cursor-pointer  " style={{ color: mode === 'dark' ? 'white' : '', }}>
                    Logout
                  </a> : ""}
                </div>

                <div className="hidden lg:ml-8 lg:flex">
                  <a href="#" className="flex items-center text-gray-700 ">
                    <img
                      src="data:image/jpeg;base64,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"
                      alt=""
                      className="block h-auto w-5 flex-shrink-0"
                    />
                    <span className="ml-3 block text-sm font-medium" style={{ color: mode === 'dark' ? 'white' : '', }}>Bangladesh</span>
                  </a>
                </div>
    

                <div className="flex lg:ml-6">
                  <button className='' onClick={toggleMode}>
                    {mode === 'light' ?
                      (<FiSun className='' size={30} />
                      ) : 'dark' ?
                        (<BsFillCloudSunFill size={30} />
                        ) : ''}
                  </button>
                </div>

                {/* Cart */}
                <div className="ml-4 flow-root lg:ml-6">
                  <Link to={'/cart'} className="group -m-2 flex items-center p-2" style={{ color: mode === 'dark' ? 'white' : '', }}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>

                    <span className="ml-2 text-sm font-medium text-gray-700 group-" style={{ color: mode === 'dark' ? 'white' : '', }}>{cartItems.length}</span>
                    <span className="sr-only">items in cart, view bag</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Navbar