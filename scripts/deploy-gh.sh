cd docs
git init
git add -A
git commit -m 'docs($site): deploy site'
git push -f git@github.com:hongsusu/test.git master:gh-pages
