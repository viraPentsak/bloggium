const PATHS: { [key: string]: (arg0: string) => string } = {
    blogShow: (blogSlug: string) => {
        return `/blogs/${blogSlug}`
    }
};

export default PATHS;