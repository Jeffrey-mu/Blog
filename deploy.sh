#!/usr/bin/env sh
###
 # @Author: WangJiaFeng
 # @Date: 2021-12-31 09:37:37
 # @LastEditTime: 2022-01-19 10:42:37
 # @Description: file content
 # @FilePath: \vuepress-starter\deploy.sh
### 

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# github user
git push -f git@github.com:Mr-wang1009/Blog.git master:gh-pages
# gitee user
git push -f git@gitee.com:jiafeng-wang/blog.git master:gh-pages
cd -