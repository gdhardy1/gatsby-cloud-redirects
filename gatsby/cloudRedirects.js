const redirects = [
  {
    fromPath: "/case-1",
    toPath: "/temporary-non-trailing-slash",
  },
  {
    fromPath: "/case-2",
    toPath: "/temporary-trailing-slash/",
  },
  {
    fromPath: "/case-3",
    toPath: "/permanent-non-trailing-slash",
    isPermanent: true,
  },
  {
    fromPath: "/case-4",
    toPath: "/permanent-trailing-slash/",
    isPermanent: true,
  },
  {
    fromPath: "/case-5/wildcard-temp/*",
    toPath: "/wildcard-temporary-non-trailing-slash",
  },
  {
    fromPath: "/case-6/wildcard-temp/*",
    toPath: "/wildcard-temporary-trailing-slash/",
  },
  {
    fromPath: "/case-7/wildcard-perm/*",
    toPath: "/wildcard-permanent-non-trailing-slash",
    isPermanent: true,
  },
  {
    fromPath: "/case-8/wildcard-perm/*",
    toPath: "/wildcard-permanent-trailing-slash/",
    isPermanent: true,
  },
  {
    fromPath: "/case-9/page-exists",
    toPath: "/redirect-when-page-exists",
  },
]

module.exports = { redirects }
