# ts-lib-template
[![Build](https://github.com/infra-blocks/ts-lib-template/actions/workflows/build.yml/badge.svg)](https://github.com/infra-blocks/ts-lib-template/actions/workflows/build.yml)
[![Release](https://github.com/infra-blocks/ts-lib-template/actions/workflows/release.yml/badge.svg)](https://github.com/infra-blocks/ts-lib-template/actions/workflows/release.yml)
[![codecov](https://codecov.io/gh/infra-blocks/ts-lib-template/graph/badge.svg?token=VFA2PIC95S)](https://codecov.io/gh/infra-blocks/ts-lib-template)

This repository is a template to generate repositories meant to hold the source code
of NPM packages written in TypeScript.

Follow these steps after instantiating the template:
- Do a global search & replace for `ts-lib-template` and replace it with the name of your repository
- Likewise, do a search and replace for the *name of the package* in the `package.json` file
- Set up code coverage, overwrite the codecov badge with the specific link for your repository.
- Update package.json
  - Edit the search keywords
  - Edit the description
- Describe the package and its usage in this readme.
- Prepare the [changelog](CHANGELOG.md) for the first version of the module that will be released.
- Edit the `.npmrc` file if you wish to change the defaults. Specifically, if you wish to make your package private.
