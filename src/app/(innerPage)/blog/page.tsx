import BlogsAreaOne from "@/components/blogs/blogsAreaOne";
import FeedbackOne from "@/components/feedbacks/feedbackOne";
import PageHeader from "@/components/pageHeader";
import { blogPostsDataOne } from "@/db/blogPostsData";

export default function Blog() {  
  return (
    <>
      <PageHeader title="Blog" />
      <div className="pb-120 border-bottom"></div>
      <BlogsAreaOne
        data={blogPostsDataOne}
        className="bg-f3f3f3 border-bottom-0"
      />
      <FeedbackOne className="border-bottom" />
    </>
  );
}; 
