// import { MetadataRoute } from "next";

// export default function robots(): MetadataRoute.Robots {
//   return {
//     rules: {
//       userAgent: "*",
//       allow: "/",
//     },
//     sitemap:
//       "https://vaishnotemple.in/sitemap.xml",
//   };
// }

import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/admin/"],
    },
    sitemap: "https://vaishnotemple.in/sitemap.xml",
  };
}