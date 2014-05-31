### 使用JS脚本编写代码，实现对象的移动，旋转。使用到的方法如下：

    OnGUI();

此法用于绘制GUI界面组件。

    GUI.Button();

设置一个按钮，返回true时，表示该按钮被按下。

    GUI.Label();

设置一个文本框。

    transform;

为当前对象绑定模型的变换对象。

    transform.Rotate();

设置模型旋转。

    transform.Translate();

设置模型平移。

    Time.deltaTime;

该数值为一个只读属性，不可修改，表示完成最后一帧的时间，单位为秒。

    Vector3;

标志一个模型移动或者旋转的方向。

    Rect;

规定一个矩形区域，用于显示控件。

对象运动以后，可直接穿越另一个模型，为了让模型之间具有物理碰撞，需要给该模型添加一个刚体（Rigidbody）属性。
