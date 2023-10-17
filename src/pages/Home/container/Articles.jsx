import React from 'react'
import ArticleCard from '../../../components/ArticleCard'
import { FaArrowRight } from 'react-icons/fa'


const Articles = () => {

  return (
    <section className="container mx-auto  px-5 py-5">
      <div className='flex flex-wrap md:flex-nowrap md: gap-x-5 gap-y-5'>
        <ArticleCard className="w-full md:w-[calc(50%)]" />
        <ArticleCard className="w-full md:w-[calc(50%)]" />
      </div>
      <button className="mx-auto mt-5 flex items-center gap-x-2 font-bold text-primary border-2 border-primary px-6 py-3 rounded-lg">
        <span >More Articles</span>
        <FaArrowRight className="w-3 h-3" />
      </button>
    </section>
  )
}

export default Articles;
