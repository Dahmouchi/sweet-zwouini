import BlogCard from "@/components/blogs/blogCard";
import { blogPostsDataOne } from "@/db/blogPostsData";

const RelatedBlogs = () => {
  return (
    <div className="blog-area bg-f3f3f3 border-top pt-120 pb-95 border-bottom">
      <div className="container">
        <div className="section-title mb-40 text-center">
          <h2 className="fw-semibold mx-auto mb-0 text-uppercase">
            More Blogs
          </h2>
        </div>
        <div className="row" data-cues="slideInUp" data-group="blogContent">
          {blogPostsDataOne.slice(0, 3).map((post, idx) => (
            <div className="col-xl-4 col-md-6" key={idx}>
              <BlogCard post={post} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RelatedBlogs;
