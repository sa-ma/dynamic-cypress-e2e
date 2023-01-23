/** @type {import('next').NextConfig} */
const nextConfig = {
	pageExtensions: ['page.tsx', 'page.jsx', 'm.ts', 'm.js'],
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ['cdn.center.app'],
	},
};

module.exports = nextConfig;
