interface BlogPageProps {
    params: {
        slug: string
    }
}

export default function BlogPage({params}: BlogPageProps) {
    return <div className="py-4">
        Blog page. Slug: <span className="text-red-500">{params.slug}</span>
    </div>
}