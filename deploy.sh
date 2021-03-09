#!/usr/bin/env sh
set -e
yarn docs:build
cd docs/.vuepress/dist

echo -e "\n# build =="
git init
git add -A
echo -e "\n# commit build =="
git commit -m 'deploy'
echo -e "\n# push Github =="
git push -f git@github.com:uphg/store.git master:gh-pages
echo -e "\n# push Gitee =="
git push -f git@gitee.com:uphg/store.git master:gh-pages
echo -e "\n# Exit the build folder"
cd -
