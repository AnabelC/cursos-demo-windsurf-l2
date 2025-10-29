import { mockBlogPosts } from './lib/blogData';

const server = Bun.serve({
  port: 3001,
  routes: {
    '/posts': {
      GET: () => {
        return Response.json(mockBlogPosts);
      },
    },
  },
  fetch(req) {
    return new Response('Not Found', { status: 404 });
  },
});

console.log(`🚀 Bun server running at ${server.url}`);
console.log(`📝 Posts endpoint: ${server.url}posts`);
