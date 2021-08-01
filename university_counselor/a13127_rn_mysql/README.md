# 0. 介绍
BadDateFormProject 文件夹就是 ReactNative的前端工程
i1node_server 就是和 BadDateFormProject 进行通讯的 后端api 服务

# 1. 真机部署需要注意的
因为真实的app是在手机，而数据库是在pc服务器，所以在模拟器运行可以采用现在的配置，
但是如果要真手机运行，部署BadDateFormProject到iphone 或者andriod手机，
然后对应的到 i1node_server 就是在一个ip不同的其他机器上，你需要找到这个ip，然后在
BadDateFormProject 工程的App.js 21行，32行修改成 手机可以访问的 localhost 修改为 pc 的ip地址

# 2. install rect-native （已经装过就忽略）
https://reactnative.dev/docs/environment-setup

# 3. run project in ios simulator （已经会了就忽略）
使用 Xcode (我的是version12.04，最好至少或者高于这个版本)打开
 ios/ 目录下的 BadDateFormProject.xcworkspace 文件。
你会注意到左上方有一个“运行”按钮，如图 3-6 所示。点击“运行”按钮，
程序将会在编译之后启动。你也可以选择不同的 iOS 模拟器作为部署目标（我是iphone 12 pro max）

# 4. 后台api的部署
我默认mac上安装了mysql：
mysql --version
mysql  Ver 8.0.23 for osx10.15 on x86_64 (Homebrew)
你可以按照超过或者相同的版本号mysql

4.1 
运行i0db.sql中创建数据库的 create database hope_outreach;

然后执行 i0db.sql中的建表脚本

4.2
我打包了所有的部署环境，直接在命令行进入 i1node_server ，命令行执行：node index.js 就可以运行起来后台api服务器
BadDateFormProject就可以和后台数据库api打交道了
（
如果某些情况打包的部署环境不起作用，就自行安装下(注意是mysql2 不是mysql):
npm install express
npm install cors
npm install mysql2
）