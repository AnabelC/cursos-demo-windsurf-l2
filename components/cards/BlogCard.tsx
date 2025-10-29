import Link from "next/link";
import { buttonStyles, cardStyles, aspectRatios, textStyles } from "@/lib/styles";
import type { BlogPost } from "@/lib/blogData";

interface BlogCardProps {
  post: BlogPost;
  variant?: "featured" | "grid" | "compact";
}

export default function BlogCard({ post, variant = "grid" }: BlogCardProps) {
  if (variant === "featured") {
    return (
      <div className={`${cardStyles.base} ${cardStyles.padding.medium}`}>
        <span className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wide">
          Destacado
        </span>
        <h3 className={`${textStyles.heading3} mt-2 mb-3`}>
          {post.title}
        </h3>
        <p className={`${textStyles.body} mb-4`}>
          {post.summary}
        </p>
        <Link 
          href={`/blog/${post.slug}`}
          className={buttonStyles.primary}
        >
          Leer más
        </Link>
      </div>
    );
  }

  if (variant === "compact") {
    return (
      <div className={`${cardStyles.base} ${cardStyles.padding.small} flex gap-4`}>
        <div className="w-20 h-20 bg-gray-300 dark:bg-gray-700 rounded flex-shrink-0 flex items-center justify-center">
          <span className="text-xs text-gray-500 dark:text-gray-400">IMG</span>
        </div>
        <div className="flex-grow">
          <h4 className="font-bold mb-1">{post.title}</h4>
          <p className={`${textStyles.bodySmall} mb-2`}>
            {post.summary}
          </p>
          <Link 
            href={`/blog/${post.slug}`}
            className={buttonStyles.link}
          >
            Leer
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={cardStyles.base}>
      <div className={`w-full ${aspectRatios.video} bg-gray-300 dark:bg-gray-700 flex items-center justify-center`}>
        <span className={textStyles.muted}>Miniatura</span>
      </div>
      <div className={cardStyles.padding.medium}>
        <h3 className={`${textStyles.heading4} mb-3`}>{post.title}</h3>
        <p className={`${textStyles.body} mb-4`}>
          {post.summary}
        </p>
        <Link 
          href={`/blog/${post.slug}`}
          className={buttonStyles.primary}
        >
          Leer más
        </Link>
      </div>
    </div>
  );
}
