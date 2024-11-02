interface BlogPageProps {
    params: Promise<{ slug: string }>
}

export default async function BlogPage({params}: BlogPageProps) {
    const {slug} = await params;
    return <div className="py-5">
        Blog page. Slug: <span className="text-red-500">{slug}</span>
    </div>
}