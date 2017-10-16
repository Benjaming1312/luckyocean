+ myGulp&Vue project
 
 > 基於工作上的開發，可能會有用到Vue跟沒用到Vue的兩種狀況，做成兩種模組應用
 
 ## Build Setup
 
 ``` bash
 # 安裝封包
 npm install
 
 # 假如你只要用pug`sass`js跟livereload的話 預設在port: 8001
 npm run gulp
 
 # 假設框架都做好了，要局部放入Vue的功能
 # vue的dev模式
 npm run dev
 
 # build出vue的JS檔案
 npm run build
 
 
 ```
 
 ##架構
 ```
 |
 |- dist // 輸出資料夾
     |- css // 這裡透過gulp 產出css與sourceMap檔案
     |- images //經過壓縮的圖片會在這裡 
     |- js //這裡產出一般會使用到的js
     |- buils.js //Vue的JS檔案
 |- gulp //原始編輯用的路徑
     |- html //pug的原始檔案
     |- img //切好的圖
     |- js
        |- concat //依照功能去放不同的js檔案
        |- userjs.js //會先合併到這裡做產出
     |- sass
        |- element // 組建放這裡
        |- page // 頁面放這裡
        |- usercss.sass //彙整
 |- src //Vue會用到的資料夾
     |- components //Vue 的組件
     |- App.vue 
     |- main.js 
 |- index.html // 換算的html檔案會跑到外部
 |- gulpfile.js //gulp的設定檔案
 |- package.json // webpack
 |- webpack.config.js //webpack設定檔
 
 ```
 For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).