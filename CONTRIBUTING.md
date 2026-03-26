# Contribution Guidelines

## Development

### Repo init

This repository leverages [mise]() and users should have it installed in their local environment. The repository currently
still uses an `.nvmrc` file to track node versions, but there is a plan to move that to `mise.toml`. In the meantime,
users should still use `mise` to manage their node version, but it requires to enable the idiomatic file for node. This
only needs to be run once globally: `mise settings add idiomatic_version_file_enable_tools node`. `mise` now recognizes
the `.nvmrc` files and everything should work like magic.

Upon checking out the repository, run the following commands:
```shell
mise install
npm install
npm run compile
npm run lint
npm run test
```

### Package publication

Package publication is fully automated at the CI level. This repository leverages the
[npm-publish-from-label-workflow](https://github.com/infra-blocks/npm-publish-from-label-workflow)
workflow as a turnkey, automated mechanism for publishing packages. Refer to its documentation for usage information.
