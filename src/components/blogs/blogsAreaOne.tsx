import { BlogPost } from "@/db/blogPostsData";
import Link from "next/link";
import BlogCard from "./blogCard";

interface PropsType {
  className?: string;
  titleShown?: boolean;
  data: BlogPost[];
}
const BlogsAreaOne = ({ className, titleShown, data }: PropsType) => {
  return (
    <div className={`blog-area pt-120 pb-95 border-bottom ${className}`}>
      <div className="container">
        {titleShown && (
          <div className="section-title position-relative">
            <h2 className="mb-0 fw-semibold text-uppercase">
              Recent blog &amp; news
            </h2>
            <Link href="blog" className="default-btn">
              Explore All Blog
            </Link>
          </div>
        )}
        {
          <div
            className="row justify-content-center"
            data-cues="slideInUp"
            data-group="blogContent"
          >
            {data.map((post, idx) => (
              <div className="col-xl-4 col-md-6" key={idx}>
                <BlogCard post={post}/>
              </div>
            ))}
          </div>
        }
      </div>
    </div>
  );
};

export default BlogsAreaOne;
