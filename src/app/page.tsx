import BlogsList from "@/components/blogs/blogs-list";

export default function Home() {
    return <div className="grid grid-cols-4 gap-5 p-5">
        <div className="col-span-3">
            <h1 className="text-2xl text-center pb-3">
                Choose a blog to read!
            </h1>
            <BlogsList/>
        </div>
        <div className="col">
            <h3 className="text-lg text-center">
                Most popular blog posts
            </h3>
        </div>
    </div>
}