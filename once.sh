# 第一次关联两个仓库
git init
git add .
echo -e "Git commit"
git commit -m "first commit"
echo -e "\Git remote origin (GitHub | Gitee)"
git remote add github git@github.com:uphg/store.git
git remote add gitee git@gitee.com:uphg/store.git
echo -e"\nGit push Github"
git push github master:master
echo -e"\nGit push Gitee"
git push gitee master:master
