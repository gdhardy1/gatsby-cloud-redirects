const redirects = [
  {
    fromPath: "/case-1",
    toPath: "/temporary-prettified",
  },
  {
    fromPath: "/case-2",
    toPath: "/temporary-not-prettified/",
  },
  {
    fromPath: "/case-3",
    toPath: "/permanent-prettified",
    isPermanent: true,
  },
  {
    fromPath: "/case-4",
    toPath: "/permanent-not-prettified/",
    isPermanent: true,
  },
]

module.exports = { redirects }
