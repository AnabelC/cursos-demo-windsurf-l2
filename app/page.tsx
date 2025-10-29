import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BlogCard from "@/components/cards/BlogCard";
import { getFeaturedPost, getRecentPosts } from "@/lib/blogService";
import { buttonStyles, spacing, textStyles } from "@/lib/styles";

export default async function HomePage() {
  const featuredPost = await getFeaturedPost();
  const recentPosts = await getRecentPosts(3);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* About Me Section */}
        <section className={spacing.container + " " + spacing.section}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Imagen */}
            <div className="flex justify-center">
              <div className="w-64 h-64 bg-gray-300 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                <span className="text-gray-500 dark:text-gray-400">Imagen</span>
              </div>
            </div>
            
            {/* Contenido */}
            <div>
              <h2 className={`${textStyles.heading2} mb-4`}>About me</h2>
              <p className={`mb-4 ${textStyles.body}`}>
                Soy un desarrollador web apasionado por crear experiencias digitales 
                excepcionales. Me especializo en tecnologías modernas como React, 
                Next.js y TypeScript.
              </p>
              <p className={`mb-6 ${textStyles.body}`}>
                Con varios años de experiencia en el desarrollo frontend y backend, 
                disfruto construyendo aplicaciones escalables y mantenibles que 
                resuelven problemas reales.
              </p>
              <Link href="/about" className={buttonStyles.primary}>
                Ver más
              </Link>
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section className={`bg-gray-50 dark:bg-gray-900 ${spacing.section}`}>
          <div className={spacing.container}>
            <h2 className={`${textStyles.heading2} mb-8`}>Blog</h2>
            
            <div className={`grid grid-cols-1 md:grid-cols-2 ${spacing.gap.large}`}>
              {featuredPost && <BlogCard post={featuredPost} variant="featured" />}
              <div className={spacing.gap.small + " space-y-4"}>
                {recentPosts.map((post) => (
                  <BlogCard key={post.id} post={post} variant="compact" />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
