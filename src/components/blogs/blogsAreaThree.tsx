import { blogPostsDataThree } from "@/db/blogPostsData";
import Image from "next/image";
import Link from "next/link";

const BlogsAreaThree = () => {
  return (
    <div className="blog-area pt-120 pb-95">
      <div className="container">
        <div className="section-title mb-40 position-relative">
          <h2 className="fs-32 mb-0 fw-semibold text-uppercase">
            Recent blog &amp; news
          </h2>
          <Link href="blog" className="default-btn">
            Explore All Blog
          </Link>
        </div>
        <div className="row">
          {blogPostsDataThree.map((blog, idx) => (
            <div className="col-lg-6 col-md-6" key={idx}>
              <div className="single-blog-post-item mb-25">
                <Link href={"blog-details"} className="image d-block">
                  <Image
                    width={636}
                    height={261}
                    sizes="100vw"
                    src={blog.image}
                    alt={"img"}
                  />
                </Link>
                <div className="content">
                  <div className="info d-lg-flex align-items-center justify-content-between">
                    <ul className="p-0 mb-0 list-unstyled">
                      {blog.categories.map((cat, i) => (
                        <li
                          className="position-relative d-inline-block"
                          key={i}
                        >
                          <Link href="blog">{cat}</Link>
                        </li>
                      ))}
                    </ul>
                    <span className="d-block">{blog.readTime}</span>
                  </div>
                  <h3 className="fw-semibold mb-0">
                    <Link href={"blog-details"}>{blog.title}</Link>
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogsAreaThree;
