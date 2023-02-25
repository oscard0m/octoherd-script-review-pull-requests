# octoherd-script-review-pull-requests

> Review a bunch of pull requests based on parameters

[![@latest](https://img.shields.io/npm/v/octoherd-script-review-pull-requests.svg)](https://www.npmjs.com/package/octoherd-script-review-pull-requests)
[![Build Status](https://github.com/oscard0m/octoherd-script-review-pull-requests/workflows/Test/badge.svg)](https://github.com/oscard0m/octoherd-script-review-pull-requests/actions?query=workflow%3ATest+branch%3Amain)

## Usage

Minimal usage

```js
npx octoherd-script-review-pull-requests \
        --author oscard0m
```

Pass all options as CLI flags to avoid user prompts

```js
npx octoherd-script-review-pull-requests \
  -T ghp_0123456789abcdefghjklmnopqrstuvwxyzA \
  -R "oscard0m/*" \
        --author oscard0m \
        --title Random PR Title
```

## Options

| option                       | type             | description                                                                                                                                                                                                                                 |
| ---------------------------- | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--author`                   | string           | **Required.** Select PRs where its author matches the one provided by this flag.                                                                                                                                                            |
| `--title`                    | string           | For the selected author, only select the PRs where its title CONTAINS the text provided in this flag.                                                                                                                                       |
| `--octoherd-token`, `-T`     | string           | A personal access token ([create](https://github.com/settings/tokens/new?scopes=repo)). Script will create one if option is not set                                                                                                         |
| `--octoherd-repos`, `-R`     | array of strings | One or multiple space-separated repositories in the form of `repo-owner/repo-name`. `repo-owner/*` will find all repositories for one owner. `*` will find all repositories the user has access to. Will prompt for repositories if not set |
| `--octoherd-bypass-confirms` | boolean          | Bypass prompts to confirm mutating requests                                                                                                                                                                                                 |

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md)

## About Octoherd

[@octoherd](https://github.com/octoherd/) is project to help you keep your GitHub repositories in line.

## License

[ISC](LICENSE.md)
