import { BlogPost } from "@/db/blogPostsData";
import Image from "next/image";
import Link from "next/link";

const BlogCard = ({ post }:{post: BlogPost}) => {
  return (
    <div className="single-blog-post mb-25">
      <Link href={"blog-details"} className="image d-block">
        <Image
          width={416}
          height={364}
          sizes="100vw"
          src={post.image}
          alt="blog-image"
        />
      </Link>
      <div className="content">
        <div className="info position-relative">
          <ul className="d-flex align-items-center p-0 mb-0 list-unstyled">
            <li className="d-inline-block position-relative">
              {post.date} <br />
              {post.month}
            </li>
            <li className="d-inline-block position-relative">
              <i className="fa-regular fa-circle-user" /> By{" "}
              <Link href="blog">{post.author}</Link>
            </li>
            <li className="d-inline-block position-relative">
              <i className="fa-regular fa-comment-dots" />
              <Link href={"blog-details"}>
                Comments ({post.comments.toString().padStart(2, "0")})
              </Link>
            </li>
          </ul>
        </div>
        <h3 className="fw-semibold">
          <Link href={"blog-details"}>{post.title}</Link>
        </h3>
        <div className="text-end">
          <Link href={"blog-details"} className="default-btn">
            Continue Reading
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
