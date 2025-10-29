import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BlogCard from "@/components/cards/BlogCard";
import { getBlogPosts, getFeaturedPost } from "@/lib/blogService";
import { buttonStyles, spacing, textStyles, aspectRatios } from "@/lib/styles";

export default async function BlogPage() {
  const featuredPost = await getFeaturedPost();
  const allPosts = await getBlogPosts();
  const gridPosts = allPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section - Post Destacado */}
        {featuredPost && (
          <section className={spacing.container + " " + spacing.section}>
            <div className={`grid grid-cols-1 md:grid-cols-2 ${spacing.gap.large} items-center`}>
              <div className={`w-full ${aspectRatios.square} bg-gray-300 dark:bg-gray-700 rounded-lg flex items-center justify-center`}>
                <span className={`${textStyles.muted} text-lg`}>Imagen Destacada</span>
              </div>
              <div>
                <h1 className={`${textStyles.heading1} mb-4`}>{featuredPost.title}</h1>
                <p className={`${textStyles.body} mb-6 leading-relaxed`}>
                  {featuredPost.summary}
                </p>
                <Link href={`/blog/${featuredPost.slug}`} className={buttonStyles.primary}>
                  Leer más
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* Cuadrícula de Posts - 2 columnas x 3 filas */}
        <section className={`bg-gray-50 dark:bg-gray-900 ${spacing.section}`}>
          <div className={spacing.container}>
            <div className={`grid grid-cols-1 md:grid-cols-2 ${spacing.gap.large}`}>
              {gridPosts.map((post) => (
                <BlogCard key={post.id} post={post} variant="grid" />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
