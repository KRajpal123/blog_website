import React, { useState } from 'react'
import { images } from '../constants'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { IoIosArrowDown } from 'react-icons/io'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../store/actions/user'
import { useNavigate } from 'react-router-dom'

const navItemsInfo = [
    { name: "Home", type: "link", href: "/" },
    { name: "Articles", type: "link", href: "/articles" },
    {
        name: "Pages",
        type: "dropdown",
        items: [
            { title: "About us", href: "/about" },
            { title: "Contact us", href: "/contact" },
        ],
    },
    { name: "Pricing", type: "link", href: "/pricing" },
    { name: "Faq", type: "link", href: "/faq" },
];

const NavItems = ({ item }) => {
    const [dropdown, setDropDown] = useState(false);

    const toggleDropdown = () => {
        setDropDown((currState) => {
            return !currState;
        })
    }
    return (
        <li className='relative group'>
            {
                item.type === "link" ?
                    (
                        <>
                            <a href="" className='px-4 py-2'>{item.name}</a>
                            <span className='text-blue-500 absolute transition-all
                               duration-500 font-bold right-0 top-0 opacity-0 group-hover:right-[90%]
                               group-hover:opacity-100 cursor-pointer
                               '>
                                /
                            </span>
                        </>
                    )
                    : (
                        <div className='flex flex-col items-center'>
                            <button className='px-4 py-2 flex gap-x-1 items-center'
                                onClick={toggleDropdown}>
                                <span>{item.name}</span>
                                <IoIosArrowDown />
                            </button>
                            <div className={`lg:hidden  ${dropdown ? "block" : "hidden"}
                            transition-all duration-500 pt-4 
                            lg:absolute lg:bottom-0  lg:right-0  lg:transform lg:translate-y-full 
                             lg:group-hover:block w-max`}>
                                <ul className='flex flex-col shadow-lg text-center
                                 bg-dark-light lg:bg-transparent
                                 rounded-lg overflow-hidden'>
                                    {
                                        item.items.map((page) => (
                                            <a href="" key={page.title}
                                                className='hover:bg-dark-hard hover:text-white
                                            px-4 py-2  text-white lg:text-dark-soft'
                                            >
                                                {page.title}
                                            </a>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    )
            }

        </li>
    )
}


const Header = () => {
    const [visibile, setVisible] = useState(false);
    const [profileDropDown, setProfileDropDown] = useState(false);
    const userState = useSelector(state => state.user);
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const navVisibility = () => {
        setVisible((currState) => {
            return !currState;
        })
    }

    const logoutHandler = () => {
        dispatch(logout())
    }
    return (
        <section>
            <header className='container mx-auto px-5 flex 
            justify-between py-4 items-center
            '>
                <div>
                    <img className="w-16" src={images.Logo} alt="logo" />
                </div>
                <div className='z-50 lg:hidden'>
                    {
                        visibile ? (
                            <AiOutlineClose className='w-6 h-6' onClick={navVisibility} />
                        ) : (
                            <AiOutlineMenu className='w-6 h-6' onClick={navVisibility} />
                        )
                    }
                </div>
                <div className={` ${visibile ? "-right-0" : "-right-full"} transition-all duration-300
                mt-[50px] lg:mt-0 bg-dark-hard lg:bg-transparent
                z-[49] flex flex-col justify-center lg:justify-end
                w-full lg:w-auto lg:flex-row fixed top-0 bottom-0  lg:static gap-x-9 items-center`}>
                    <ul className='flex flex-col lg:flex-row    
                    gap-x-2 font-semibold text-white lg:text-dark-soft
                    items-center gap-y-5

                    '>
                        {
                            navItemsInfo.map((item) => (
                                <NavItems key={item.name} item={item} />
                            ))
                        }
                    </ul>
                    {
                        userState.userInfo ? (
                            <div className=' relative group'>
                                <div
                                    className='flex flex-col lg:flex-row    
                            gap-x-2 font-semibold text-white lg:text-dark-soft
                            items-center gap-y-5'
                                >
                                    <div className='flex flex-col items-center'>
                                        <button className='flex gap-x-1 
                                        border-2 border-blue-500 
                                        px-6 py-2 rounded-full text-blue-500 font-semibold
                                     hover:bg-blue-500 hover:text-white mt-5 lg:mt-0
                                        transition-all duration-300
                                        items-center'
                                            onClick={() => setProfileDropDown(!profileDropDown)}>
                                            <span>Account</span>
                                            <IoIosArrowDown />
                                        </button>
                                        <div className={`lg:hidden  ${profileDropDown ? "block" : "hidden"}
                            transition-all duration-500 pt-4 
                            lg:absolute lg:bottom-0  lg:right-0  lg:transform lg:translate-y-full 
                             lg:group-hover:block w-max`}>
                                            <ul className='flex flex-col shadow-lg text-center
                                 bg-dark-light lg:bg-transparent
                                 rounded-lg overflow-hidden'>

                                                <button type='button'
                                                  onClick={() => navigate("/profile")}
                                                    className='hover:bg-dark-hard hover:text-white
                                            px-4 py-2  text-white lg:text-dark-soft'
                                                >
                                                  Profile
                                                </button>
                                                <button type='button'
                                                    onClick={logoutHandler}
                                                    className='hover:bg-dark-hard hover:text-white
                                            px-4 py-2  text-white lg:text-dark-soft'
                                                >
                                                    Logout
                                                </button>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <button className='border-2 border-blue-500 
                    px-6 py-2 rounded-full text-blue-500 font-semibold
                 hover:bg-blue-500 hover:text-white mt-5 lg:mt-0
                    transition-all duration-300'
                                onClick={() => navigate("/login")}
                            >
                                Sign in
                            </button>)
                    }

                </div>
            </header>
        </section>
    )
}

export default Header