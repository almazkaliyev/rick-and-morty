import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <section className="not-found">
    <h3 className="h3">404</h3>
    <h5 className="h5">Something&apos;s missing</h5>
    <p>
      The link you followed probably broken
      <br /> or the page has been removed
    </p>
    <Link to="/">&larr; Return homepage</Link>
  </section>
);

export default NotFoundPage;
