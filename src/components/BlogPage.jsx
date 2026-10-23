import { useEffect, useState } from "react";
import { ArrowRight } from "./icons";
import { PageHero } from "./PageParts";
import { POSTS } from "../data/posts";
import { Link, postPath, BLOG_PATH } from "../router";

export const slugify = (s) => s.toLowerCase().replace(/^#/, "").replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
export const categoryPath = (cat) => `${BLOG_PATH}?category=${slugify(cat)}`;
export const tagPath = (tag) => `${BLOG_PATH}?tag=${slugify(tag)}`;

/* blog card — used on the blog page and in a post's "Related Posts" */
export function BlogCard({ post }) {
  const to = postPath(post.slug);
  return (
    <article className="pg-post">
      <Link className="pg-post-img" to={to} tabIndex={-1}>
        <img src={`/assets/images/71-blog-${post.img}.webp`} alt="" loading="lazy" />
      </Link>
      <div className="pg-post-body">
        <div className="pg-post-meta">
          <Link className="pg-tag" to={categoryPath(post.cat)}>{post.cat}</Link>
          <time>{post.date}</time>
        </div>
        <h4><Link to={to}>{post.title}</Link></h4>
        <Link className="pg-outline" to={to}>
          <ArrowRight size={12} /> Read More
        </Link>
      </div>
    </article>
  );
}

// ?category=<slug> or ?tag=<slug> filters the list (category / tag chips link here)
const readFilter = () => {
  const q = new URLSearchParams(window.location.search);
  if (q.get("category")) return ["category", q.get("category")];
  if (q.get("tag")) return ["tag", q.get("tag")];
  return null;
};

export default function BlogPage() {
  const [filter, setFilter] = useState(readFilter);
  useEffect(() => {
    const onPop = () => setFilter(readFilter());
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  const posts = !filter
    ? POSTS
    : POSTS.filter((p) => (filter[0] === "category" ? slugify(p.cat) === filter[1] : p.tags.some((t) => slugify(t) === filter[1])));
  const label = filter
    ? (filter[0] === "category" ? POSTS.find((p) => slugify(p.cat) === filter[1])?.cat : POSTS.flatMap((p) => p.tags).find((t) => slugify(t) === filter[1])) || filter[1]
    : null;

  return (
    <div className="pg-page">
      <PageHero title="Blog Page" bg="71-background-2.webp" crumb="Blog Page" />
      {filter ? (
        <p className="pg-filter">
          {posts.length} {posts.length === 1 ? "post" : "posts"} in <b>{label}</b>
          <Link to={BLOG_PATH}>Show all posts</Link>
        </p>
      ) : null}
      <section className={`pg-blog${filter ? " is-filtered" : ""}`}>
        {posts.map((p) => <BlogCard key={p.slug} post={p} />)}
      </section>
    </div>
  );
}
