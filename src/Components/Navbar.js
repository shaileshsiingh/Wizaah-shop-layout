import React from 'react'
import Logo from '../assets/images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faUser, faCartPlus } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    return (
        <div>
            <nav class="bg-white border-b-2 p-4 sm:px-4 py-2.5 rounded dark:bg-gray-900">
                <div class="container flex flex-wrap justify-between items-center mx-auto">
                    <a href="" class="flex items-center">
                        <img src={Logo} class="ml-12 h-12 sm:h-9" alt=""></img>
                    </a>
                    <div class="flex md:order-2">
                        <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" class="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1">
                            <span class="sr-only">Search</span>
                        </button>
                        <div class='mr-12 flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
                        <FontAwesomeIcon icon={faSearch} />
                        <FontAwesomeIcon icon={faUser} />
                        <FontAwesomeIcon icon={faCartPlus} />
                           
                        </div>
                        <button data-collapse-toggle="navbar-search" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
                            <span class="sr-only">Open menu</span>
                        </button>
                    </div>
                    <div class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="navbar-search">

                        <ul class="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <a href="#" class="block py-2 pr-4 pl-3 text-black-700 font-bold rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Men</a>
                            </li>
                            <li>
                                <a href="#" class="block py-2 pr-4 pl-3 text-black-700 font-bold rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Women</a>
                            </li>
                            <li>
                                <a href="#" class="block py-2 pr-4 pl-3 text-black-700 font-bold rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Kids</a>
                            </li>
                            <li>
                                <a href="#" class="block py-2 pr-4 pl-3 text-black-700 font-bold rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Home & Clothing</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>



        </div>
    )
}

export default Navbar