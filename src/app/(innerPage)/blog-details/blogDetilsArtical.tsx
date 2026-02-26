import Image from "next/image";
import BlogDetilsSidebar from "./blogDetilsSidebar";
import Link from "next/link";

const BlogDetilsArtical = () => {
  return (
    <div className="blog-details-area bg-f3f3f3 ptb-120">
      <div
        className="container"
        data-cues="slideInUp"
        data-group="blogDetailsContent"
      >
        <div className="blog-details-header">
          <h2 className="fw-semibold">
            The Art of Perfecting Sounds in a New Language
          </h2>
          <div className="d-md-flex align-items-center justify-content-between">
            <div className="user d-flex align-items-center">
              <Image
                width={100}
                height={100}
                src="/images/users/user14.jpg"
                className="rounded-circle"
                alt="user-image"
              />
              <div>
                <h3 className="fw-semibold">Jeffrey E. Walton</h3>
                <span className="d-block">11 Jan 2022 • 5 min read</span>
              </div>
            </div>
            <div className="socials d-flex align-items-center">
              <span className="d-block">Share Post On:</span>
              <Link
                href="#"
                className="d-inline-block position-relative rounded-circle text-center"
              >
                <i className="fa-brands fa-facebook-f" />
              </Link>
              <Link
                href="#"
                className="d-inline-block position-relative rounded-circle text-center"
              >
                <i className="fa-brands fa-x-twitter" />
              </Link>
              <Link
                href="#"
                className="d-inline-block position-relative rounded-circle text-center"
              >
                <i className="fa-brands fa-linkedin-in" />
              </Link>
              <Link
                href="#"
                className="d-inline-block position-relative rounded-circle text-center"
              >
                <i className="fa-brands fa-google" />
              </Link>
            </div>
          </div>
        </div>
        <div className="blog-details-image text-center">
          <Image
            width={1296}
            height={589}
            sizes="100vw"
            src="/images/blog-details.jpg"
            alt="blog-details-image"
          />
        </div>
        <div className="row">
          <div className="col-lg-8 col-md-12">
            <div className="blog-details-desc">
              <p>
                In this insightful blog post, we delve into &quot;The Art of
                Perfecting Sounds in a New Language.&quot; Pronunciation plays a
                pivotal role in effective language communication, influencing
                overall language proficiency.
              </p>
              <p>
                The article begins by highlighting the importance of accurate
                pronunciation, emphasizing its impact on successful language
                acquisition and meaningful interactions. It then addresses
                common challenges faced by learners,
              </p>
              <p>
                offering valuable insights into language-specific pronunciation
                difficulties. The blog proceeds to provide a practical guide
                with tips for perfecting pronunciation, offering readers
                actionable advice and exercises to enhance their sound accuracy.
              </p>
              <p>
                Additionally, it explores the integration of technology into
                language learning, showcasing various apps and online tools
                specifically designed to focus on pronunciation improvement.
                Real-life application takes center stage in the latter part of
                the blog, featuring success stories of learners who have
                successfully navigated and overcome pronunciation challenges.
              </p>
              <p>
                These anecdotes serve to inspire and illustrate how mastering
                pronunciation contributes to a more confident and effective
                language communication. In conclusion, the post summarizes key
                takeaways and encourages readers to prioritize pronunciation in
                their language learning endeavors. By adopting the insights
              </p>
              <p>
                and techniques presented, learners can embark on a journey to
                not only improve their pronunciation but also elevate their
                overall language proficiency, making their communication more
                authentic and impactful.
              </p>
              <p>
                approach to pronunciation, inviting readers to embark on a
                language-learning odyssey that transcends mere linguistic
                acquisition. By immersing themselves in the nuances of
                pronunciation, readers can unlock the gateway to a richer, more
                authentic linguistic experience, where the artistry of language
                becomes a reflection of personal expression and cultural
                understanding.
              </p>
              <div className="info d-md-flex align-items-end justify-content-between">
                <div className="socials">
                  <span className="d-block">Share This Post</span>
                  <Link
                    href="#"
                    className="d-inline-block position-relative rounded-circle text-center"
                  >
                    <i className="fa-brands fa-facebook-f" />
                  </Link>
                  <Link
                    href="#"
                    className="d-inline-block position-relative rounded-circle text-center"
                  >
                    <i className="fa-brands fa-x-twitter" />
                  </Link>
                  <Link
                    href="#"
                    className="d-inline-block position-relative rounded-circle text-center"
                  >
                    <i className="fa-brands fa-linkedin-in" />
                  </Link>
                  <Link
                    href="#"
                    className="d-inline-block position-relative rounded-circle text-center"
                  >
                    <i className="fa-brands fa-google" />
                  </Link>
                </div>
                <div className="tags">
                  <Link href="blog" className="d-inline-block">
                    Multilanguage
                  </Link>
                  <Link href="blog" className="d-inline-block">
                    Language club
                  </Link>
                  <Link href="blog" className="d-inline-block">
                    Language learning
                  </Link>
                </div>
              </div>
            </div>
            <div className="blog-details-author border-top d-flex align-items-center">
              <Image
                width={100}
                height={100}
                src="/images/users/user14.jpg"
                className="rounded-circle"
                alt="user-image"
              />
              <div>
                <h3 className="fw-semibold">Jeffrey E. Walton</h3>
                <span className="d-block">
                  Language Instructor, ABC Company
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12">
            <BlogDetilsSidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetilsArtical;
