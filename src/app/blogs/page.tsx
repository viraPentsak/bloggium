import React from "react";
import BlogsList from "@/components/blogs/blogs-list";
import {fetchBlogs} from "@/db/queries/blogs";

export default function BlogPage() {
    return <div className="grid grid-cols-4 gap-5 p-5">
        <div className="md:col-span-3">
            <h1 className="text-2xl text-center pb-5">
                Most popular blogs!
            </h1>
            <BlogsList fetchData={fetchBlogs}/>
        </div>
        <div className="col">
            <h3 className="pb-5 text-lg text-center">
                Most popular tags
            </h3>
        </div>
    </div>
}