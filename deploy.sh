#!/bin/bash
set -e
ng build --base-href "https://lvrtl.github.io/"
npx angular-cli-ghpages --dir=dist/lvrtl.github.io/browser