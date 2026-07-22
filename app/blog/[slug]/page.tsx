import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LeadSection } from "@/components/LeadSection";
import { Reveal } from "@/components/Reveal";
import { StampBadge } from "@/components/StampBadge";
import { blogPosts } from "@/lib/data";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Article" };
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <>
      <article className="bg-ivory">
        <div className="container-site py-16 md:py-24 max-w-3xl">
          <Reveal>
            <Link href="/blog" className="link-draw text-sm text-muted">
              ← All articles
            </Link>
            <p className="eyebrow mt-8 mb-3">{post.category}</p>
            <h1 className="font-display text-3xl md:text-5xl text-espresso">{post.title}</h1>
            <time
              dateTime={post.date}
              className="mt-4 block text-sm text-muted"
            >
              {new Date(post.date).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </time>
            <div className="mt-6 flex flex-wrap gap-3">
              <StampBadge label="Niagra Insights" />
              <StampBadge label="UAE Projects" />
            </div>
          </Reveal>

          <Reveal delayMs={80} className="mt-12 space-y-5 text-muted leading-relaxed text-lg">
            <p>{post.excerpt}</p>
            <p>
              On UAE projects, door packages are judged by documentation as much as by
              finish. Specifiers should confirm the required fire rating or acoustic
              performance early, then align leaf construction, seals, frames, and
              hardware as a set.
            </p>
            <p>
              Niagra manufactures wooden fire-rated doors (FD30–FD120), acoustic doors,
              and interior joinery from Sharjah for contractors, architects, and
              developers across the Emirates. For project pricing, use the quote form
              with quantity, location, and rating or room type.
            </p>
            <p>
              If you are reviewing an existing installation, check the rating plate,
              intumescent seals, closer function, and that the leaf still matches the
              approved drawing. Gaps, incorrect hardware, or damaged seals reduce
              performance regardless of the original certification.
            </p>
          </Reveal>

          {related.length > 0 ? (
            <Reveal className="mt-16 border-t border-rule pt-10">
              <p className="eyebrow mb-4">Related</p>
              <ul className="space-y-4">
                {related.map((item) => (
                  <li key={item.slug}>
                    <Link
                      href={`/blog/${item.slug}`}
                      className="link-draw font-display text-xl text-espresso"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </Reveal>
          ) : null}
        </div>
      </article>

      <LeadSection source={`blog-${slug}`} />
    </>
  );
}
