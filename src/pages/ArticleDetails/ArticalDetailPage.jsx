import React from 'react'
import MainLayout from '../../components/MainLayout'
import BreadCrumbs from '../../components/BreadCrumbs'
import { images } from '../../constants'
import { Link } from 'react-router-dom'
import SuggestedPosts from './container/SuggestedPosts'
import CommentsContainer from '../../components/comments/CommentsContainer'
import SocialShareButtons from '../../components/SocialShareButtons'

const breadCrumbsData = [
    { name: "Home", link: '/' },
    { name: "Blog", link: '/blog' },
    { name: "Article title", link: '/blog/id' }
]

const postData = [
    {
        _id: "1",
        image: images.postImage,
        title: "Help childern to get better education",
        createdAt: "12th oct"
    },
    {
        _id: "2",
        image: images.postImage,
        title: "Help childern to get better education",
        createdAt: "12th oct"
    },
    {
        _id: "3",
        image: images.postImage,
        title: "Help childern to get better education",
        createdAt: "12th oct"
    },
    {
        _id: "4",
        image: images.postImage,
        title: "Help childern to get better education",
        createdAt: "12th oct"
    },
    {
        _id: "5",
        image: images.postImage,
        title: "Help childern to get better education",
        createdAt: "12th oct"
    },
];

const tagData = [
    "Medical",
    "Medical1",
    "Medical2",
    "Medical3",
    "Medical4",
]
const ArticalDetailPage = () => {
    return (
        <MainLayout>
            <section className="container mx-auto max-w-5xl flex flex-col px-5 py-5 lg:flex-row lg:gap-x-5 lg:items-start">
                <article className="flex-1">
                    <BreadCrumbs data={breadCrumbsData} />
                    <img src={images.postImage}
                        className=' rounded-xl w-full'
                        alt="laptop" />
                    <Link to='/blog?category=selectedCategory'
                        className="text-primary text-sm mt-4 font-roboto inline-block md:text-base"
                    >
                        Education
                    </Link>

                    <h1 className="text-xl font-medium font-roboto mt-4 text-dark-hard md:text-[26px]">
                        help children get better education
                    </h1>

                    <div className=' mt-4 text-dark-soft'>
                        <p className=' leading-7'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Quisquam reiciendis culpa optio a modi veniam adipisci. Incidunt maxime
                            totam id eius tempora exercitationem, ad atque nulla deleniti. Modi, accusamus unde.
                        </p>
                    </div>
                    <CommentsContainer className={'mt-10'} logginedUserId={'a'} />
                </article>
                <div>
                    <SuggestedPosts header={'Latest Article'}
                        posts={postData} tags={tagData} className={'mt-8 lg:mt-0 lg:max-w-xs'} />
                    <div className=' mt-7 '>
                        <h2 className="font-roboto font-medium text-dark-hard mb-4 md:text-xl">
                            Share on:
                        </h2>
                        <SocialShareButtons
                            // url={encodeURI(window.location.href)}
                            // title={encodeURIComponent(data?.title)}
                            // encodeURI takes url, if these is any wierd characters in url it converts into UTF-8 character formate
                            url={encodeURI(
                                "facebook.com"
                            )}
                            // take query string, not an complete URl
                            title={
                                encodeURIComponent(
                                    "facebook page"
                                )
                            }
                        />
                    </div>
                </div>
            </section>
        </MainLayout>
    )
}

export default ArticalDetailPage