### 2D贴图

有两种方式，第一种是由GUI绘制，第二种是将贴图以材质的形式绘制在游戏对象中。

    GUI.DrawTexture(Rect(10,10,10,10),texSingle,ScakeMode.StretchToFile,true,0);

> 
在屏幕中绘制静态贴图，第一个参数表示图片的绘制区域，第二个参数表示绘制图片的对象，第三个参数表示图片的缩放模式，第四个参数表示是否开启图片混合模式，第五个参数表示图片缩放宽高的比例。

在Project视图中，将需要加载的图片存放在根目录“Resources”中（一定要将加载的图片保存在Resources中，否则程序无法识别）。

    Resources.Load()|Resources.LoadAll();

> 
参数均为资源文件夹的完整路径，前者返回读取的资源对象，后者返回的是资源对象的数组。

### 帧动画

原理是使用若干张静态图片，以一定的时间一帧一帧的在屏幕中切换播放，好比在屏幕中预先设定一个显示动画的区域，然后将这个图片在这个显示区域中频繁切换播放。

    DrawAnimation();

> 
第一个参数表示动画资源数组对象，第二个参数表示动画的显示区域。
