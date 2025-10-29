import { BlogPost } from './blogData';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

/**
 * Obtiene todos los posts del blog desde la API
 */
export async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/posts`, {
      cache: 'no-store', // Siempre obtener datos frescos
    });

    if (!response.ok) {
      throw new Error(`Error al obtener posts: ${response.status}`);
    }

    const posts: BlogPost[] = await response.json();
    return posts;
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    throw error;
  }
}

/**
 * Obtiene un post específico por su slug
 */
export async function getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
  const posts = await getBlogPosts();
  return posts.find(post => post.slug === slug);
}

/**
 * Obtiene el post destacado
 */
export async function getFeaturedPost(): Promise<BlogPost | undefined> {
  const posts = await getBlogPosts();
  return posts.find(post => post.featured);
}

/**
 * Obtiene posts recientes (excluyendo el destacado)
 */
export async function getRecentPosts(limit: number = 3): Promise<BlogPost[]> {
  const posts = await getBlogPosts();
  return posts.filter(post => !post.featured).slice(0, limit);
}

/**
 * Obtiene posts relacionados (excluyendo un slug específico)
 */
export async function getRelatedPosts(excludeSlug: string, limit: number = 6): Promise<BlogPost[]> {
  const posts = await getBlogPosts();
  return posts
    .filter(post => post.slug !== excludeSlug)
    .slice(0, limit);
}
