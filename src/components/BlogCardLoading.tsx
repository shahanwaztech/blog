import React from 'react';

interface BlogCardLoadingInterface {
    isRowWise: boolean
}

const BlogCardLoading: React.FC<BlogCardLoadingInterface> = ({isRowWise}) => {
    return (<div>
            {isRowWise ? (
                <div role="status"
                     className=" w-[100%] gap-4 flex flex-row p-4  rounded animate-pulse  dark:border-gray-700">
                    <div
                        className="w-[55%] h-[240px] flex items-center justify-center bg-gray-300 rounded dark:bg-gray-700">
                        <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true"
                             xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                            <path
                                d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z"/>
                            <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"/>
                        </svg>
                    </div>
                    <div className='flex flex-col justify-between items-start w-[45%] h-auto py-2'>
                        <div className="flex flex-col gap-[12px]">
                            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-24 "/>
                            <div className="h-5 bg-gray-200 rounded-full dark:bg-gray-700 w-24"/>
                            <div className="w-[100%]">
                                <div className="h-2 w-48 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"/>
                                <div className="h-2 w-48 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"/>
                                <div className="h-2 w-48 bg-gray-200 rounded-full dark:bg-gray-700"/>
                            </div>
                        </div>
                        <div className="flex flex-row gap-[10px]">
                            <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-16 mb-2"/>
                            <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-16 mb-2"/>
                            <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-16 mb-2"/>
                        </div>
                    </div>
                </div>
            ) : (
                <div role="status"
                     className="w-[100%] p-4  rounded  animate-pulse  dark:border-gray-700">
                    <div className="flex h-[240px] items-center justify-center  mb-5 bg-gray-300 rounded dark:bg-gray-700">
                        <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true"
                             xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                            <path
                                d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z"/>
                            <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"/>
                        </svg>
                    </div>
                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-24 mb-4"></div>
                    <div className="h-3.5 bg-gray-200 rounded-full dark:bg-gray-700 w-36 mb-4"></div>
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                    <div className="flex items-center mt-[20px]">
                        <div className="flex flex-row gap-[10px]">
                            <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-16 mb-2"/>
                            <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-16 mb-2"/>
                            <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-16 mb-2"/>
                        </div>
                    </div>
                </div>

            )}
        </div>
    )
}

export default BlogCardLoading;
