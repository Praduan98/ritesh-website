/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Redirect map (§3.8). Targets that are not built yet will 404 until their page exists.
  async redirects() {
    return [
      { source: "/aboutus", destination: "/about", permanent: true },
      { source: "/contactus", destination: "/contact", permanent: true },
      { source: "/s/pages/funnel-experience", destination: "/frameworks", permanent: true },
      { source: "/sessions", destination: "/speaking", permanent: true },
      { source: "/s/store", destination: "/courses", permanent: true },
      { source: "/privacypolicy", destination: "/privacy-policy", permanent: true },
      { source: "/termsofuse", destination: "/terms-of-use", permanent: true },
      { source: "/refundpolicy", destination: "/refund-policy", permanent: true },
      // NOTE: /s/checkout and /t/public/login are intentionally NOT redirected — they stay on Graphy.
    ];
  },
};
export default nextConfig;
