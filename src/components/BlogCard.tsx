'use client'
import React from "react"
import {useRouter} from "next/navigation";

interface Tags {
    name: string,
}

interface BlogCardInterface {
    isRowWise: boolean,
    title: string,
    paragarph: string,
    tags: Tags[]
    CreatedDate: any,
    id: number,
    imgSrc: any,
    slug: string,
}

const BlogCard: React.FC<BlogCardInterface> = (props) => {
    const router = useRouter();

    const handlePostClick = (slug: string) => {
        router.push(`/${slug}`);
    };
    return (
        <>
            {props.isRowWise ? (
                <div onClick={() => handlePostClick(props.slug)} className="cursor-pointer w-[100%] flex flex-row justify-between items-center gap-4 overflow-hidden hover:border-[1px] hover:rounded transform ease-linear hover:shadow p-4  ">
                    <div className='w-[55%]'>
                        <img src={props.imgSrc} alt={"BlogCardImage"}
                             className="w-[100%] h-[240px] rounded bg-cover object-cover object-center"/>
                    </div>
                    <div className="flex flex-col justify-between w-[45%] items-start h-[100%] py-2">
                        <div className="flex flex-col w-[100%] gap-[10px]">
                            <p className="text-[#6941C6] text-[14px] font-semibold">{props.CreatedDate}</p>
                            <div className="flex w-[100%] justify-between items-start">
                                <h1 className="text-[#1A1A1A] capitalize dark:text-[#fff] font-semibold text-[24px] leading-[32px]">{props.title}</h1>
                                <img src={"/images/icon.svg"} alt={"icon"} className="w-[24px] h-[28px] dark:hidden"/>
                                <img src={"/images/iconwhite.svg"} alt={"icon"}
                                     className="w-[24px] h-[28px] hidden dark:flex"/>
                            </div>
                            <p className="text-[#667085] capitalize  dark:text-[#C0C5D0] font-normal text-[16px] leading-[24px]">{props.paragarph}</p>
                        </div>
                        <div className="flex flex-row gap-2 justify-start items-center">
                            {props.tags.map((tag: Tags, index: number) => (
                                <div
                                    key={index}
                                    className="bg-[#EEF4FF] capitalize text-[#3538CD] px-[10px] text-[14px] font-medium py-[4px] rounded-full">{tag.name}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ) : (
                <div onClick={() => handlePostClick(props.slug)} className="cursor-pointer overflow-hidden hover:border-[1px]  hover:rounded  hover:shadow p-4  ">
                    <img src={props.imgSrc} alt={"BlogCardImage"}
                         className="w-[100%] h-[240px] rounded bg-cover object-cover object-center"/>
                    <p className="text-[#6941C6] mt-[20px] text-[14px] font-semibold">{props.CreatedDate}</p>
                    <div className="flex justify-between items-start mt-[12px]">
                        <h1 className="text-[#1A1A1A] dark:text-[#fff] font-semibold text-[24px] leading-[32px]">{props.title}</h1>
                        <img src={"/images/icon.svg"} alt={"icon"} className="w-[24px] h-[28px] dark:hidden"/>
                        <img src={"/images/iconwhite.svg"} alt={"icon"} className="w-[24px] h-[28px] hidden dark:flex"/>
                    </div>
                    <p className="text-[#667085] mt-[12px] dark:text-[#C0C5D0] font-normal text-[16px] leading-[24px]">{props.paragarph}</p>
                    <div className="flex flex-row gap-2 justify-start items-center mt-[20px]">
                        {props.tags.map((tag: Tags, index: number) => (
                            <div
                                key={index}
                                className="bg-[#EEF4FF] text-[#3538CD] px-[10px] text-[14px] font-medium py-[4px] rounded-full">{tag.name}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </>
    )
}

export default BlogCard;
