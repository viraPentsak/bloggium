import BlogsList from "@/components/blogs/blogs-list";
import {fetchBlogs} from "@/db/queries/blogs";

//TODO: Show most popular blogs, and maybe most popular posts, and authors

export default function Home() {
    return <div className="md:grid grid-cols-4 gap-5 p-5">
        <div className="md:col-span-3 mb-4">
            <h1 className="text-2xl text-center pb-3">
                Choose a blog to read!
            </h1>
            <BlogsList fetchData={fetchBlogs}/>
        </div>
        <div className="col">
            <h3 className="text-lg text-center">
                Most popular blog posts
            </h3>
        </div>
    </div>
}