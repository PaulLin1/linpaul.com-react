import fs from "fs";
import path from "path";
import Link from "next/link";
import matter from "gray-matter";

interface Post {
  slug: string;
  title: string;
  tags: string[];
  date: string;
}

export default async function BlogPage() {
  const postsDirectory = path.join(process.cwd(), "content/posts");
  const filenames = fs.readdirSync(postsDirectory);

  const posts: Post[] = filenames.map((file) => {
    const filePath = path.join(postsDirectory, file);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);
    return {
      slug: file.replace(/\.md$/, ""),
      title: data.title || file.replace(/\.md$/, ""),
      tags: Array.isArray(data.tags) ? data.tags : [],
      date: data.date || "Unknown",
    };
  });

  // Sort by date descending
  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <main style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <div
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          maxWidth: "90vw",
          width: "100%",
          padding: "2rem",
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
        }}
      >
        <h1
          style={{
            fontSize: "3rem",
            fontWeight: 900,
            margin: 0,
            backgroundColor: "white",
          }}
        >
          Blog
        </h1>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              style={{
                backgroundColor: "white",
                display: "flex",
                justifyContent: "space-between",
                padding: "0 0.25rem",
                textDecoration: "none",
                color: "black",
                fontSize: "1.25rem",
                fontWeight: 900,
              }}
            >
              <span>{post.title}</span>
              <span>
                {post.tags.length > 0 ? post.tags.join(", ") : "No tags"} | {post.date}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
