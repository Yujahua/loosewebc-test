#cd '\Users\yujiahua\GitHub\GitLab\vue-cli-plugin-loosewebc'
#npm run build:atom
sourcelib='loosewebc-test\lib'
targetroot='vuenext-vuecli-vite\vue3beta_vuecli\node_modules\@csii'
targetlib='vuenext-vuecli-vite\vue3beta_vuecli\node_modules\@csii\vx-mobile'
cd ..
if [ ! -d $targetroot ];then
    mkdir "$targetroot"
fi
if [ ! -d $targetlib ];then
    mkdir "$targetroot"
else
    rm -r "$targetlib"
fi

cp -rf "$sourcelib" "$targetlib"
echo copy vue3beta_vuecli dependency complete
