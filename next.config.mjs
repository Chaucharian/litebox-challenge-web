/** @type {import('next').NextConfig} */
const API_URL = process.env.API_URL

const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  async rewrites() {
		return [
			{
				source: '/api/:path*',
				destination: `${API_URL}/:path*`,
			},
		]
	},

};

export default nextConfig;
