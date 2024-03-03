import React from "react"

interface Tags{
    name:string,
}
interface BlogCardInterface{
    isRowWise:boolean,
    title:string,
    paragarph:string,
    tags:Tags[]
    CreatedDate:any,
    id:number,
    imgSrc:any,
}

const BlogCard:React.FC<any> = () => {
    const isRowWise = false;
    return (
        <>
            {isRowWise ? (
                <div className="cursor-pointer w-[100%] flex flex-row justify-between items-center gap-4 overflow-hidden hover:border-[1px]  transition duration-500
                                hover:scale-105 hover:rounded-lg transform ease-linear hover:shadow-md p-4  ">
                    <div>
                        <img src="/images/blogCardImage1.jpg" alt={"BlogCardImage"}
                             className="w-[100%] h-[240px] rounded-md bg-cover object-cover object-center"/>
                    </div>
                    <div className="flex flex-col justify-between items-start h-[100%] py-2">
                        <div className="flex flex-col gap-[12px]">
                            <p className="text-[#6941C6] text-[14px] font-semibold">Sunday, 4 Mar 2024</p>
                            <div className="flex justify-between items-start">
                                <h1 className="text-[#1A1A1A] dark:text-[#fff] font-semibold text-[24px] leading-[32px]">UX
                                    review
                                    presentations</h1>
                                <img src={"/images/icon.svg"} alt={"icon"} className="w-[24px] h-[28px] dark:hidden"/>
                                <img src={"/images/iconwhite.svg"} alt={"icon"}
                                     className="w-[24px] h-[28px] hidden dark:flex"/>
                            </div>
                            <p className="text-[#667085]  dark:text-[#C0C5D0] font-normal text-[16px] leading-[24px]">How
                                do
                                you i want to create create compelling presentations that wow your colleagues and
                                impress your managers?</p>
                        </div>
                        <div className="flex flex-row gap-4 justify-start items-center">
                            <div
                                className="bg-[#EEF4FF] text-[#3538CD] px-[10px] text-[14px] font-medium py-[2px] rounded-full">Management
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="cursor-pointer overflow-hidden hover:border-[1px]  transition duration-500
                                hover:scale-105 hover:rounded-lg transform ease-linear hover:shadow-md p-4  ">
                    <img src="/images/blogCardImage1.jpg" alt={"BlogCardImage"}
                         className="w-[100%] h-[240px] rounded-md bg-cover object-cover object-center"/>
                    <p className="text-[#6941C6] mt-[20px] text-[14px] font-semibold">Sunday, 4 Mar 2024</p>
                    <div className="flex justify-between items-start mt-[12px]">
                        <h1 className="text-[#1A1A1A] dark:text-[#fff] font-semibold text-[24px] leading-[32px]">UX
                            review
                            presentations</h1>
                        <img src={"/images/icon.svg"} alt={"icon"} className="w-[24px] h-[28px] dark:hidden"/>
                        <img src={"/images/iconwhite.svg"} alt={"icon"} className="w-[24px] h-[28px] hidden dark:flex"/>
                    </div>
                    <p className="text-[#667085] mt-[12px] dark:text-[#C0C5D0] font-normal text-[16px] leading-[24px]">How
                        do
                        you create compelling presentations that wow your colleagues and impress your managers?</p>
                    <div className="flex flex-row gap-4 justify-start items-center mt-[20px]">
                        <div
                            className="bg-[#EEF4FF] text-[#3538CD] px-[10px] text-[14px] font-medium py-[2px] rounded-full">Management
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default BlogCard;
