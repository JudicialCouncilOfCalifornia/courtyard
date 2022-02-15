# How to Contribute to Courtyard 2.x

## Code Style

We use the automatic code formatter Prettier. If you use an IDE such as Sublime Text, VSCode, or similar, you can likely add a Prettier extension that will autoformat your files using Prettier rules on file save. If you're not using an IDE that integrates with it, you should run `npx prettier --write [filepath]` on all added or changed files before you submit a pull request.

## GitOps

### Branching

New feature branches for any work should be branched from `2.x`. Name your branch to the following guidelines:

`[type]/[ticket-id]--short description`, example: `feature/TCI-101--update-button`

### Commiting

Lead commit messages with the ticket id, example: `TCI-101: revise button color`.

### Branching and Pull Request

This project uses a parallel git workflow to ensure clean production branches. This will ultimately require two
separate pull requests to the `2.x` production branch and `2.x-dev` development branches.

### Work Flow Example

An example workflow:

- Create branch from `2.x`
- Do awesome work!
- Create a pull request to the `2.x-dev` branch
- Reviewed by at least one other developer. Once approved, merge this PR.
- Merging to `2.x-dev` will update the `2.x-dev` Pattern Lab [site](http://patternlab.courts.ca.gov/2.x-dev/public/).
- The work should be assigned to the responsible QA in Jira. Once they’ve approved, create a PR for your original branch to the `2.x` branch. This PR provides a mechanism for release and historical record for troubleshooting. It can be merged on a release schedule or any time after final approval, depending on the project needs.
- Move your ticket to DONE
