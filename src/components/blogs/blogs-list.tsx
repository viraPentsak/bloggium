import {fetchBlogs} from "@/db/queries/blogs";
import {Button, Link, Card, CardHeader, CardFooter, Divider} from "@nextui-org/react";
import {PATHS} from "@/constants";
import Tags from "@/components/Tags";

export default async function BlogsList() {
    const blogs = await fetchBlogs();

    const renderedBlogs = blogs.map(blog => {
        return (
            <Card key={blog.id} className="mb-3 px-4">
                <CardHeader className="flex justify-between gap-2">
                    <h5 className="text-xl font-bold ">{blog.title}</h5>
                    <div className="text-sm">
                        Followers:
                        <div>{blog.followers | 0}</div>
                    </div>
                </CardHeader>
                <Divider/>
                <div className="p-4 text-lg">
                    {blog.description}
                </div>
                <div className="p-4">
                    <Tags tags={blog.keyWords}/>
                </div>
                <Divider/>
                <CardFooter className="gap-2 justify-between">
                    <Link href={PATHS.blogShow(blog.slug)}>Read the blog...</Link>
                    <Button color="primary" variant="bordered">
                        Subscribe!
                    </Button>
                </CardFooter>
            </Card>
        )
    })

    return <div className="border-gray-300">
        {renderedBlogs}
    </div>
}