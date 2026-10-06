import type { NextConfig } from "next";

const PADDYSCO_ORIGIN = "https://paddysco.vercel.app";

const nextConfig: NextConfig = {
  // Serve PaddySco at freestackinc.com.ng/paddysco by proxying the live
  // deployment. Plain array = checked after this site's own pages/public files,
  // so FreeStack routes always win. /assets is the Vite bundle path the proxied
  // HTML references with a root-absolute URL; this site serves its static files
  // from /public and /_next only, so the namespace is free.
  async rewrites() {
    return [
      { source: "/paddysco", destination: `${PADDYSCO_ORIGIN}/` },
      { source: "/paddysco/:path*", destination: `${PADDYSCO_ORIGIN}/:path*` },
      { source: "/assets/:path*", destination: `${PADDYSCO_ORIGIN}/assets/:path*` },
    ];
  },
};

export default nextConfig;
