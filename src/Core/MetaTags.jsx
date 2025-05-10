import React from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";

const MetaTags = () => {
  const location = useLocation();
  const baseUrl = "https://icscent.com/";

  const metaInfo = {
    "/": {
      title: "ICSET | Home",
      description:
        "Welcome to ICSET – INTERNATIONAL CONFERENCE ON SCIENCE, ENGINEERING AND TECHNOLOGY. A global platform for researchers and professionals.",
      image: `${baseUrl}/img/favicon.png`,
    },
    "/paper_submission": {
      title: "ICSET | Paper Submission",
      description:
        "Submit your research paper for ICSET – INTERNATIONAL CONFERENCE ON SCIENCE, ENGINEERING AND TECHNOLOGY.",
      image: `${baseUrl}/img/favicon.png`,
    },
    "/contact_us": {
      title: "ICSET | Contact Us",
      description:
        "Have questions? Contact the ICSET organizing committee for more details.",
      image: `${baseUrl}/img/favicon.png`,
    },
    "/organize_committee": {
      title: "ICSET | Organizing Committee",
      description:
        "Meet the team behind ICSET – experienced academicians and professionals organizing the event.",
      image: `${baseUrl}/img/favicon.png`,
    },
    "/about_the_conference": {
      title: "ICSET | About the Conference",
      description:
        "Learn more about ICSET – INTERNATIONAL CONFERENCE ON SCIENCE, ENGINEERING AND TECHNOLOGY, its mission, vision, and scope.",
      image: `${baseUrl}/img/favicon.png`,
    },
    "/registration_details": {
      title: "ICSET | Registration Details",
      description:
        "Check registration types, deadlines, and fee structures for ICSET participants.",
      image: `${baseUrl}/img/favicon.png`,
    },
  };

  const currentPath = Object.keys(metaInfo).includes(location.pathname)
    ? location.pathname
    : "/";

  const { title, description, image } = metaInfo[currentPath];

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={`${baseUrl}${location.pathname}`} />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Canonical URL */}
      <link rel="canonical" href={`${baseUrl}${location.pathname}`} />
    </Helmet>
  );
};

export default MetaTags;
