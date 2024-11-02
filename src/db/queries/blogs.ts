import dbConnect from "@/db";
import Blog, {I_Blog} from "@/models/Blog";

export async function fetchBlogs(limit: number = 5): Promise<I_Blog[]> {
    await dbConnect();
    const blogs: I_Blog[] = await Blog.find({}).limit(limit);

    // blogs
    return blogs.map(blog => blog.toObject());
}
export async function fetchBlogByParam(param: {[key: string]: string | number}):Promise<I_Blog>{
    await dbConnect();
    const blogs:I_Blog[] = await Blog.find({...param}).limit(1);
    if(blogs.length < 1) return Promise.reject("Not found");
    return blogs[0].toObject();
}