# 第一次关联两个仓库
echo -e "\nGit init"
git init
echo -e "Git add"
git add .
echo -e "Git commit"
git commit -m "first commit"
echo -e "\n"

echo -e "Git remote GitHub"
git remote add github git@github.com:uphg/store.git
echo -e "Git remote Gitee"
git remote add gitee git@gitee.com:uphg/store.git
echo -e "\n"

echo "Git push Github =="
git push github master:master
echo "Git push Gitee =="
git push gitee master:master
echo -e "\n"
