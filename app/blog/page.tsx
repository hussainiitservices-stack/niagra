import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { blogPosts } from "@/lib/data";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Articles on fire-rated doors, acoustic doors, and specification guidance for UAE projects from Niagra.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Notes for specifiers and site teams."
        description="Fire ratings, acoustic doors, and practical checks — written for UAE projects."
        image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&q=80"
        imageAlt="Specification and project planning"
        ctaHref="/contact-us#quote"
      />

      <section className="bg-ivory">
        <div className="container-site py-16 md:py-24">
          <div className="grid gap-8 md:grid-cols-2">
            {blogPosts.map((post, i) => (
              <Reveal key={post.slug} delayMs={i * 70} as="article">
                <Link
                  href={`/blog/${post.slug}`}
                  className="group block h-full border border-rule bg-bone p-6 md:p-8 transition-shadow hover:shadow-[0_12px_32px_rgba(26,23,20,0.06)]"
                >
                  <p className="eyebrow mb-3">{post.category}</p>
                  <h2 className="font-display text-2xl text-espresso group-hover:text-walnut transition-colors">
                    {post.title}
                  </h2>
                  <p className="mt-3 text-muted leading-relaxed">{post.excerpt}</p>
                  <time
                    dateTime={post.date}
                    className="mt-6 block text-xs uppercase tracking-wider text-muted"
                  >
                    {new Date(post.date).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </time>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
