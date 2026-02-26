import Image from "next/image";
import Link from "next/link";

const categories = [
  "Language Learning Tips",
  "Cultural Insights",
  "Language Resources",
  "Student Stories",
  "Language News and Trends",
  "Interviews and Profiles",
];

const recentPosts = [
  {
    img: "/images/blogs/blog10.jpg",
    title: "Sodales neque sodales and etiam nulla magna",
    date: "02 June, 2023",
  },
  {
    img: "/images/blogs/blog11.jpg",
    title: "Sodales neque sodales and etiam nulla magna",
    date: "02 June, 2023",
  },
  {
    img: "/images/blogs/blog12.jpg",
    title: "Sodales neque sodales and etiam nulla magna",
    date: "02 June, 2023",
  },
];

const BlogDetilsSidebar = () => {
  return (
    <div className="blog-widgets-area">
      <div className="widget search-box">
        <form>
          <input
            type="text"
            className="form-control shadow-none"
            placeholder="Search here..."
          />
          <button
            type="button"
            className="d-inline-block p-0 border-0 bg-transparent"
          >
            <i className="fa-solid fa-magnifying-glass" />
          </button>
        </form>
      </div>
      <div className="widget post-category">
        <h3 className="fw-semibold widget-title">Post Category:</h3>
        <ul className="p-0 mb-0 list-unstyled">
          {categories.map((category) => (
            <li key={category}>
              <Link
                href="blog-details"
                className="d-block w-100 position-relative"
              >
                {category}
                <i className="fa-solid fa-chevron-right" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="widget recent-post">
        <h3 className="fw-semibold widget-title">Recent Post:</h3>
        <ul className="p-0 mb-0 list-unstyled">
          {recentPosts.map((post, idx) => (
            <li className="d-flex align-items-center" key={post.img + idx}>
              <Link href={'blog-details'} className="image d-block">
                <Image width={93} height={93} src={post.img} alt="blog-image" />
              </Link>
              <div>
                <h4 className="fw-semibold">
                  <Link href={'blog-details'}>{post.title}</Link>
                </h4>
                <span className="d-block">{post.date}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BlogDetilsSidebar;
