const PageHeader = ({ title }: { title: string }) => {
  return (
    <div className="page-banner-area text-center position-relative z-1">
      <div className="container">
        <h1 className="mb-0 text-white text-uppercase" data-cue="slideInUp">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default PageHeader;
