import Link from "next/link";

const NotFound = () => {
  return (
    <div className="not-found-area bg-white text-center ptb-120">
      <div
        className="container"
        data-cues="slideInUp"
        data-group="errorContent"
      >
        <h1 className="lh-1">404</h1>
        <p className="mx-auto">
          The page you are looking for might have been removed had its name
          changed or is temporarily unavailable.
        </p>
        <Link href="/" className="default-btn">
          Back To Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
