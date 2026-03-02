export interface PostMetadata {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
}

export interface Post extends PostMetadata {
  content: string;
}

export async function getAllPosts(): Promise<PostMetadata[]> {
  const modules = import.meta.glob('../posts/*.md', { query: '?raw', import: 'default' });
  const posts: PostMetadata[] = [];

  for (const path in modules) {
    const slug = path.replace('../posts/', '').replace('.md', '');
    const rawContent = await modules[path]() as string;
    const { metadata } = parseMarkdown(rawContent);
    
    posts.push({
      slug,
      title: metadata.title || 'Untitled',
      date: metadata.date || 'Unknown Date',
      excerpt: metadata.excerpt || '',
    });
  }

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    const modules = import.meta.glob('../posts/*.md', { query: '?raw', import: 'default' });
    const path = `../posts/${slug}.md`;
    
    if (!modules[path]) return null;
    
    const rawContent = await modules[path]() as string;
    const { metadata, content } = parseMarkdown(rawContent);
    
    return {
      slug,
      title: metadata.title || 'Untitled',
      date: metadata.date || 'Unknown Date',
      excerpt: metadata.excerpt || '',
      content,
    };
  } catch (e) {
    return null;
  }
}

function parseMarkdown(raw: string) {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) return { metadata: {}, content: raw };
  
  const frontmatter = match[1];
  const content = match[2];
  
  const metadata: Record<string, string> = {};
  frontmatter.split('\n').forEach(line => {
    const [key, ...value] = line.split(':');
    if (key && value.length) {
      metadata[key.trim()] = value.join(':').trim();
    }
  });
  
  return { metadata, content };
}
