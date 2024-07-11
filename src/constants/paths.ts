const PATHS: { [key: string]: (...args: string[] ) => string} = {
    blogs: ()=>"/blogs",
    authors: ()=>"/authors",
    blogShow: (blogSlug: string) => {
        return `/blogs/${blogSlug}`
    }
};

export default PATHS;