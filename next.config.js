

module.exports = {
    async redirects() {
        return [
          {
            source: '/perguntas',
            destination: '/fag/',
            permanent: true,
          },
        ]
      },
    trailingSlash: true,
}