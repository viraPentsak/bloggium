import {Button, Link, Card, CardHeader, CardFooter, Divider} from "@nextui-org/react";
import {PATHS} from "@/constants";
import Tags from "@/components/Tags";
import {I_Blog} from "@/models/Blog";

interface BlogsListProps {
    fetchData: () => Promise<I_Blog[]>
}

export default async function BlogsList({fetchData}: BlogsListProps) {
    const blogs = await fetchData();

    const renderedBlogs = blogs.map(blog => {
        const blogHref = PATHS.blogShow(blog.slug);
        return (
            <Card key={blog.id} className="mb-3 px-4">
                <CardHeader className="flex justify-between gap-2">
                    <h5 className="text-xl font-bold ">{blog.title}</h5>
                    <div className="text-sm">
                        {blog.followers > 0
                            ? <span>Followers: {blog.followers}</span>
                            : <span>No followers yet(</span>}
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
                    <Link isBlock href={blogHref}>Read the blog...</Link>
                    <Button color="primary" variant="light">
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