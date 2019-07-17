const PROXY_CONFIG = [
  {
      context: [
          "/loginCheck",
      ],
      target: "http://localhost:3000",
      secure: false
  }
]

module.exports = PROXY_CONFIG;