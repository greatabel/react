为了可以创建RN APP，首先安装：
npm install -g create-react-native-app

create-react-native-app myProject

RN CLI:
npm install -g react-native-cli


  Run instructions for Android:
    • Have an Android emulator running (quickest way to get started), or a device connected.
    • cd "/Users/abel/Downloads/AbelProject/react/i00react-native-in-action/01getting_started/ch1myProject" && npx react-native run-android
  
  Run instructions for iOS:
    • cd "/Users/abel/Downloads/AbelProject/react/i00react-native-in-action/01getting_started/ch1myProject" && npx react-native run-ios
    - or -
    • Open ch1myProject/ios/ch1myProject.xcworkspace in Xcode or run "xed -b ios"
    • Hit the Run button


To run your project, navigate to the directory and run one of the following yarn commands.

- cd ch2myProject
- yarn android
- yarn ios
- yarn web

sublime text设置jsx文件
https://www.jianshu.com/p/0427629bd111
https://www.twle.cn/t/549

--------------------------------------------------------------------------
# ch3 

彻底解决国内npm/yarn安装包很慢问题
npm config set registry http://registry.npm.taobao.org
yarn config set registry https://registry.npm.taobao.org
