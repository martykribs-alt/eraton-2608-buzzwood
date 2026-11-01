// Netlify Identity signup hook. Registration is invite only, so everyone who completes signup was invited by
// the record owner: give them the viewer role the site gate (site/_redirects) checks. The role rides in the
// sign-in token, so it applies from the first sign-in. Owner is set by hand in the Identity dashboard.
export const handler = async (event) => {
  const { user } = JSON.parse(event.body || "{}");
  const meta = (user && user.app_metadata) || {};
  const roles = Array.from(new Set([...(meta.roles || []), "viewer"]));
  return { statusCode: 200, body: JSON.stringify({ app_metadata: { ...meta, roles } }) };
};
