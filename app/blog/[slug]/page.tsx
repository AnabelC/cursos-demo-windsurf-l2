import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { getBlogPosts, getBlogPostBySlug, getRelatedPosts } from "@/lib/blogService";
import { buttonStyles, spacing, textStyles, aspectRatios } from "@/lib/styles";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

// Generar rutas estáticas para todos los posts
export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  // Buscar el post actual por slug
  const { slug } = await params;
  const currentPost = await getBlogPostBySlug(slug);
  
  // Si no se encuentra el post, mostrar mensaje
  if (!currentPost) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post no encontrado</h1>
          <Link href="/blog" className="text-blue-500 hover:underline">
            Volver al blog
          </Link>
        </div>
      </div>
    );
  }

  // Posts relacionados (excluir el post actual)
  const relatedPosts = await getRelatedPosts(slug, 6);
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Image */}
        <section className="w-full bg-gray-300 dark:bg-gray-700">
          <div className={spacing.container}>
            <div className={`w-full ${aspectRatios.wide} flex items-center justify-center`}>
              <span className={`${textStyles.muted} text-xl`}>Imagen Hero</span>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <article className={`${spacing.container} py-12`}>
          <div className="max-w-3xl mx-auto">
            {/* Title and Metadata */}
            <div className="mb-8">
              <h1 className={`${textStyles.heading1} mb-4`}>{currentPost.title}</h1>
              <div className={`flex gap-4 ${textStyles.bodySmall}`}>
                <span>Por {currentPost.author}</span>
                <span>•</span>
                <span>{currentPost.date}</span>
                <span>•</span>
                <span>{currentPost.readTime}</span>
              </div>
            </div>

            {/* Main Content */}
            <div className="prose dark:prose-invert max-w-none">
              <p className={`text-lg ${textStyles.body} mb-6`}>
                {currentPost.content.intro}
              </p>

              {currentPost.content.sections.map((section, index) => (
                <div key={index}>
                  <h2 className={`${textStyles.heading3} mt-8 mb-4`}>{section.title}</h2>
                  {section.paragraphs.map((paragraph, pIndex) => (
                    <p key={pIndex} className={`${textStyles.body} mb-4`}>
                      {paragraph}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </article>

        {/* Related Posts Section */}
        <section className={`bg-gray-50 dark:bg-gray-900 ${spacing.section}`}>
          <div className={spacing.container}>
            <h2 className={`${textStyles.heading3} mb-8`}>Posts Relacionados</h2>
            <div className={`grid grid-cols-1 md:grid-cols-2 ${spacing.gap.medium}`}>
              {relatedPosts.map((post) => (
                <div 
                  key={post.id}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden flex gap-4 p-4"
                >
                  {/* Thumbnail */}
                  <div className="w-24 h-24 bg-gray-300 dark:bg-gray-700 rounded flex-shrink-0 flex items-center justify-center">
                    <span className="text-xs text-gray-500 dark:text-gray-400">IMG</span>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-grow flex flex-col justify-between">
                    <div>
                      <h3 className="font-bold mb-2 line-clamp-2">{post.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 mb-3">
                        {post.summary}
                      </p>
                    </div>
                    <Link href={`/blog/${post.slug}`} className={buttonStyles.small}>
                      Leer más
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
