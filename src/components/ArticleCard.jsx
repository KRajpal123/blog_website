import React from 'react'
import { BsCheckLg } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { images } from '../constants'

const ArticleCard = ({ post, className }) => {
    return (
        <div className={`rounded-xl overflow-hidden shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] ${className}`}>
            <img src={images.postImage}
                className="w-full object-cover object-center h-auto md:h-52 lg:h-48 xl:h-60"
                alt="title" />
            <div className='p-5'>
                <h2
                    className="font-roboto font-bold text-xl text-dark-soft md:text-2xl lg:text-[28px]"
                >Future of Work</h2>
                <p className="text-dark-light mt-3 text-sm md:text-lg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aliquam sapiente inventore tempora incidunt eos totam nemo quae odio
                    voluptatibus itaque ad, dolore quos porro nobis provident est laborum facilis vitae!
                </p>
                <div className="flex justify-between flex-nowrap items-center mt-6">
                    <div className="flex items-center gap-x-2 md:gap-x-2.5">
                        <img src={images.profileImage} alt="profile"
                            className="w-9 h-9 md:w-10 md:h-10 rounded-full"
                        />
                        <div className="flex flex-col">
                            <h4
                                className="font-bold italic text-dark-soft text-sm md:text-base"
                            >
                                Rajpal Reddy
                            </h4>

                            <div className="flex items-center gap-x-2">
                                <span>
                                    <BsCheckLg className="w-1.5 h-1.5 text-[#36B37E]" />
                                </span>
                                <span
                                    className="italic text-dark-light text-xs md:text-sm"
                                >
                                    Verified Writer
                                </span>
                            </div>
                        </div>
                    </div>
                    <span
                        className="font-bold text-dark-light italic text-sm md:text-base"
                    >11 Oct</span>
                </div>
            </div>
        </div>
    )
}

export default ArticleCard