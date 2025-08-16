/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',        // 🔥 static export
  images: {
    unoptimized: true      // required for next/image in static export
  }
};

export default nextConfig;
