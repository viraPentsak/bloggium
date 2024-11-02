import React from "react";
import {fetchBlogByParam} from "@/db/queries/blogs";
import {Divider} from "@nextui-org/react";
import Tags from "@/components/Tags";

interface BlogPageProps {
    params: Promise<{ slug: string }>
}

export default async function BlogPage({params}: BlogPageProps) {
    const {slug} = await params;
    const blog = await  fetchBlogByParam({slug});
    return <div className="py-5">
        <h1 className="text-2xl text-center pb-5 text-bold">
            {blog.title}
        </h1>
        <Divider className="mb-3"/>
        <Tags tags={blog.keyWords}/>

        <Divider className="my-3"/>
        <div className="text-lg">
            {blog.description}
        </div>
        <Divider className="my-3"/>
        Slug: <span className="text-red-500">{slug}</span>
    </div>
}