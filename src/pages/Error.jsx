import React from "react";
import { Link } from "react-router-dom";
import SEO from '../components/SEO'
export default function Error() {
  return (
    <section className="error-page section">
      <SEO title="Error 404" />
      <div className="error-container">
        <h1>oops! it's a dead end</h1>
        <Link to="/" className="btn btn-primary">
          back home
        </Link>
      </div>
    </section>
  )
}
