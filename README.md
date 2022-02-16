# api-extractor-example

An example repo for demoing api-extractor and api-documenter

## Examples

Running the following commands from the root of the repo will build out documentation for the packages within this repo:

```sh
# Install the necessary deps.
$ yarn install
```

```sh
# For our example of pure TS files.
$ yarn workspace @api-extractor-examples/pure-ts docs:build
```

```sh
# For our example of pure JS files.
$ yarn workspace @api-extractor-examples/pure-js docs:build
```

```sh
# For our example of mixed JS and TS files.
$ yarn workspace @api-extractor-examples/mixed-js-ts docs:build
```
