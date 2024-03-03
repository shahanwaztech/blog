import BlogCard from "@/components/BlogCard";
import ThemeSwitch from "@/components/ThemeSwitch";

const BlogObject = [
    {
        id: 1,
        title: 'Title',
        paragarph: 'para',
        tags: [
            {
                name: 'tagname'
            },
            {
                name: 'tagname2'
            }
        ],
        CreatedDate: 'Sunday',
        imgSrc: '/',
    }
]

export default function Home() {
    return (
        <div className="container px-[30px] mx-auto mt-[20px]">
            <ThemeSwitch/>
            <div className="w-[100%] grid grid-cols-2 gap-8">
                <BlogCard/>
                <BlogCard/>
            </div>
        </div>

    );
}
