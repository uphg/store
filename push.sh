if [ -z $1 ];then
parame="update"
else
parame=$1
fi

echo -e "\nGit add"
git add .
echo -e "Git commit"
git commit -m "${parame}"
echo -e "\n"

echo "Git push Github =="
git push github master:master
echo "Git push Gitee =="
git push gitee master:master
