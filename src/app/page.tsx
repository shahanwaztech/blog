import BlogCard from "@/components/BlogCard";
import BlogCardLoading from "@/components/BlogCardLoading";
import React, {Suspense} from "react";
import NavBar from "@/components/NavBar";

const BlogObject = [
    {
        id: 1,
        title: 'Title',
        paragarph: 'para',
        slug: 'title-a',
        tags: [
            {
                name: 'tagname'
            },
            {
                name: 'tagname2'
            }
        ],
        CreatedDate: 'Sunday',
        imgSrc: '/images/blogCardImage1.jpg',
    }
]

export default function Home() {
    return (
        <div className="container max-w-[1440px] px-[30px] mx-auto">
            <NavBar />
            <div className="w-[100%] h-[100%] grid grid-cols-2 gap-8">
                <Suspense fallback={<BlogCardLoading isRowWise={false}/>}>
                    <BlogCard
                        isRowWise={false}
                        title={BlogObject[0].title}
                        paragarph={BlogObject[0].paragarph}
                        tags={BlogObject[0].tags}
                        CreatedDate={BlogObject[0].CreatedDate}
                        id={BlogObject[0].id}
                        imgSrc={BlogObject[0].imgSrc}
                        slug={BlogObject[0].slug}
                    />
                </Suspense>
                <BlogCardLoading isRowWise={false}/>
            </div>
        </div>

    );
}
