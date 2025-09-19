import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import { serialize } from "next-mdx-remote/serialize";
import MDXRenderer from "../../components/MDXRenderer";

interface Props {
  params: { slug: string };
}

export default async function PostPage({ params }: Props) {
  const filePath = path.join(process.cwd(), "content/posts", `${params.slug}.md`);
  if (!fs.existsSync(filePath)) notFound();

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { content, data } = matter(fileContents);
  const mdxSource = await serialize(content);

  return (
    <main style={{
      display: "flex",
      justifyContent: "center", // horizontal center
      padding: "2rem 0",
    }}>
      <div style={{
        maxWidth: "90vw",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
      }}>
        <h1 style={{
            fontSize: "3rem",
            fontWeight: 900,
            margin: 0,
            backgroundColor: "white",
        }}>
          {data.title}
        </h1>
        <p style={{
            fontSize: "1rem",
            fontWeight: 900,
            margin: 0,
            backgroundColor: "white",
        }}>
          {data.date}
        </p>

        {/* Fixed height scrollable MDX content */}
        <div style={{
          height: "60vh",       // fixed height (adjust as needed)
          overflowY: "auto",    // vertical scrolling
            scrollbarWidth: "none", // Firefox
          msOverflowStyle: "none", // IE and Edge
        }}>
          <MDXRenderer source={mdxSource} />
        </div>
      </div>
    </main>
  );
}
