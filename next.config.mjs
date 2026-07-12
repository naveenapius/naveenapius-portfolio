/** @type {import('next').NextConfig} */
const nextConfig = {
  // Allow the dev server's client runtime/HMR to be requested from these
  // cross-origin hosts (e.g. testing on a phone over the LAN). Without this,
  // Next 16 blocks those requests, so client JS never hydrates off-localhost.
  allowedDevOrigins: ["192.168.1.2"],
};

export default nextConfig;
