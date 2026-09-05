/** @type {import('next').NextConfig} */
// Keep production builds from overwriting files used by the running dev server.
const nextConfig = (phase) => ({
  distDir: phase === "phase-development-server" ? ".next-dev" : ".next",
});

export default nextConfig;
