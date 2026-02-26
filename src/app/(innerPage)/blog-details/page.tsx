import PageHeader from "@/components/pageHeader";
import BlogDetilsArtical from "./blogDetilsArtical";
import RelatedBlogs from "./relatedBlogs";

export default function BlogDetails() {  
  return (
    <>
      <PageHeader title="Blog Details" />
      <div className="pb-120 border-bottom"></div>
      <BlogDetilsArtical />
      <RelatedBlogs />
    </>
  );
};
 
