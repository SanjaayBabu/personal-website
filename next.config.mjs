/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  serverExternalPackages: ["remark", "remark-html", "remark-gfm", "unified", "vfile", "@react-email/render", "@react-email/components"],
  async rewrites() {
    return [
      {
        source: "/content/writing/images/:filename",
        destination: "/api/writing/image/:filename",
      },
      {
        source: "/content/projects/images/:filename",
        destination: "/api/projects/image?img=:filename",
      },
    ];
  },
}

export default nextConfig
