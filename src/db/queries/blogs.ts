import dbConnect from "@/db";
import Blog, {I_Blog} from "@/models/Blog";

export async function fetchBlogs(limit: number = 5): Promise<I_Blog[]> {
    await dbConnect();
    const blogs: I_Blog[] = await Blog.find({}).limit(limit);

    // blogs
    return blogs.map(blog => blog.toObject());
}