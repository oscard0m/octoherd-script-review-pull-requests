// @ts-check

/**
 * Review a bunch of pull requests based on parameters
 *
 * @param {import('@octoherd/cli').Octokit} octokit
 * @param {import('@octoherd/cli').Repository} repository
 * @param {object} options
 * @param {string} options.author Select PRs where its author matches the one provided by this flag.
 * @param {string} [options.title] For the selected author, only select the PRs where its title CONTAINS the text provided in this flag.
 */
export async function script(octokit, repository, { author, title }) {}
