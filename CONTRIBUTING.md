# Contributing to _ES6 All The Things_

## Submitting a snippet (via Issues)

If you would like to submit a new ES6 snippet via the issue tracker, please include the following info in your issue:

1.  Name of the ES6 feature (e.g. **Const**)
2.  Category (create a new category if it doesn't belong in the categories already there)
3.  Info

```
A short description about what this does. You can include HTML (e.g. to link out to MDN). Try to be informative but concise.
```

4.  Example

```
A small code snippet showing example.
```

## Submitting a Pull Request

If you would like to submit a PR, please follow this guide.

> Note: For non-trivial changes, please open an issue to discuss first.

1.  Fork the repo and clone to your machine
2.  Install dependencies `npm install`
3.  Create a feature branch to work off (e.g. feature/newSnippet)
4.  Run the development server `gatsby develop`
5.  Make your changes. New ES6 snippets are added to the data in `src/data/index.js`.
6.  Commit your branch to your fork on Github. Please don't include unrelated changes.
7.  Make your Pull Request. Describe what you did and why, and reference any related open issues.

> Note: `build` is not tracked on master and is only pushed to `gh-pages` branch on deploy, so no need to include it in your PR.
