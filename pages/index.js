import Head from "next/head"
import { PostWidget, Categories, PostCard, Header } from "../components"
import FeaturedPosts from "../sections/FeaturedPost"
import { getPosts } from "../services"
import { getFeaturedPosts } from "../services"

export default function Home({posts }) {
  return (
    <div className="container mx-auto px-10 mb-8 ">
      <Head>
      <title>CMS Blog</title>
    </Head>
    <FeaturedPosts />
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
      {/* posts section */}
      <div className="lg:col-span-8 col-span-1">
          {posts.map((post) => (
            <PostCard post={post.node} key={post.title } />
      ))}
      </div>
     {/* recent posts && categories section   */}
    <div className="lg:col-span-4 col-span-1 ">
        <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
        </div>
    </div>
    </div>

    </div>

  )
}

export async function getStaticProps() {
  const posts = (await getPosts()) || []

  return {
    props: { posts }
  }
}
