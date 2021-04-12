https://github.com/react-native-webview/react-native-webview/blob/master/docs/Getting-Started.md
https://www.instamobile.io/react-native-tutorials/react-native-webview/


https://www.jianshu.com/p/121cbe699478

https://blog.csdn.net/darkLight2017/article/details/107413139

然后通过jsdelivr的cdn进行远程load js
配置data.js 需要从外界加载，需要用户自己先构建一个自己的github
https://cdn.jsdelivr.net/gh/greatabel/react/b9121_jspath/data.js


配置data.js 需要从外界加载, 远程加载的原理：
https://medium.com/javarevisited/how-to-host-your-repository-js-css-on-open-source-cdn-jsdelivr-4de252d6fbad

因为目前只有一个手机移动app，没有一个app从后端加载数据，所以我想到了利用开源cdn：
将来你自己配置时候如下操作：

1. 
如果想增删改除地点列表：
b9121_jspath/jspath/static/place0.jpg  对应第1个地点
b9121_jspath/jspath/static/place1.jpg  对应第2个地点
……如此类推，
同时修改b9121_jspath/jspath/i2placelist.html 41-71行即可。

2.
b9121_jspath/jspath/static/path/place0 为第一个地点的路径导航图存放位置
规则如下：
A_B.jpeg 代表A 到 B 的视角真实路径图
B_A.jpeg 代表A 到 B 的视角真实路径图
……如此类推

3.
修改导航提示文字数据，在 b9121_jspath/data.js
例如第一个地点的A走到B的提示数据位置位置在data.js的：
var path_instruction_dic0 = new Array(); 
path_instruction_dic0['A_B'] = 'Go straight along the aisle and turn left at the corner.'

第一个地点整体节点直接拓扑连通性的连接关系为：
var connection0 = [
            ['A', [['B', 20], ['D', 150]] ], 
            ['B', [['A', 20], ['C', 40]] ], 
            ['C', [['B', 40], ['D', 20]] ], 
            ['D', [['A', 150],['C', 20]] ]
        ];

4.
如果app已经安装和分发，我们可以通过cdn分发、同步手机app端新的导航提示和节点连通性（当然图片等需要你提前在app里面准备好），
我们是通过 配置data.js 需要从外界加载, 远程加载的原理：
https://medium.com/javarevisited/how-to-host-your-repository-js-css-on-open-source-cdn-jsdelivr-4de252d6fbad
具体如下：
	4.1 你一个自己的github.com账号，然后把data.js作为一个项目提交到github自己的账号一个repository底下
	4.2 修改 b9121_jspath/jspath/i3detail.html的第16行，变成4.1的 线上url
	4.3 刷新app，就会启动新的导航提示和节点连接图数据
