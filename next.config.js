module.exports = {
  reactStrictMode: true,
  images: {
    loader: 'imgix',
    path: '/',
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/coming-soon',
        permanent: true,
      },
    ];
  },
};
