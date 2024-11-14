import Link from "next/link";
import { draftMode } from "next/headers";
import { roboto } from '@/app/fonts/fonts';

import Date from "./date";
import CoverImage from "./cover-image";
import Avatar from "./avatar";
import MoreStories from "./more-stories";
import DateComponent from "./date";

import { getAllPosts } from "@/lib/api";
import { CMS_NAME, CMS_URL } from "@/lib/constants";

function Intro() {
  return (
    <section className="w-full bg-gray-300 flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
    </section>
  );
}

function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: {
  title: string;
  coverImage: any;
  date: string;
  excerpt: string;
  author: any;
  slug: string;
}) {
  return (
    <section className="relative z-0">
      <div className="mb-8 md:mb-16">
        <CoverImage title={title} slug={slug} url={coverImage.url} />
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <div className="absolute top-[67%] flex items-center">
          <h3 className="bg-white mx-[20px] px-[20px] py-[10px] rounded-3xl mb-4 text-4xl lg:text-6xl leading-tight">
            <Link href={`/posts/${slug}`} className="hover:underline">
              {title}
            </Link>
          </h3>
          <div className="bg-white p-[20px] rounded-xl mx-[20px] mb-4 md:mb-0 text-lg">
            {author && <Avatar name={author.name} picture={author.picture} />}
            <DateComponent dateString={date} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default async function Page() {
  const { isEnabled }: any = draftMode();
  const allPosts = await getAllPosts(isEnabled);
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);

  return (
    <div>
      <Intro />
      <img
        src="/pocket-change.svg"
        width={600}
        height={119}
        alt="Pocket Change"
        className="mx-auto py-8"
      />
      {heroPost && (
        <HeroPost
          title={heroPost.title}
          coverImage={heroPost.coverImage}
          date={heroPost.date}
          author={heroPost.author}
          slug={heroPost.slug}
          excerpt={heroPost.excerpt}
        />
      )}
      <MoreStories morePosts={morePosts} />
    </div>
  );
}
