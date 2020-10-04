#!/usr/bin/env sh

set -e

npm run build

cd src/.vuepress/dist

git init
git add -A
git commit -m "deploy"

git push -f git@github.com:johnstyle/johnstyle.github.io.git master:gh-pages

cd -
