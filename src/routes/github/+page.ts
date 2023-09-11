export const load = async ({ fetch }) => {
  const repositories = await fetch('https://gh-pinned-repos.egoist.dev/?username=rawat9');
  return {
    repositories: await repositories.json()
  };
};
