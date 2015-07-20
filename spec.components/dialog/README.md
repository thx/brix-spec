# 浮层 <small>Dialog</small>

浮层是让用户执行命令、向用户提问、为用户提供信息或进度反馈的辅助窗口。从空间上看，浮层是一种上下层叠的感知，不打扰用户的主路径，作为页面承载元素和用户操作的补充。

### 示例 <small>Examples</small>

<div class="bs-example">
    <div class="content">
        <h3>基础用法 b - 从右侧滑入界面，面积 &lt; 980x300</h3>
        <ol>
            <li>为账户充值时，点击充值按钮，浮层出现至鼠标点击的按钮位置；</li>
            <li>切换计划状态，点击当前状态，浮层出现至点击点击的位置让用户选择。</li>
        </ol>
        <div class="mt40">
            <div class="dialog dialog-singleton">
                <button bx-click="close" type="button" class="dialog-close" style="top: 15px;"><span class="brixfont">&#xe62d;</span></button>
                <div class="dialog-content">
                    <div class="dialog-body" style="padding: 10px 70px 10px 20px;">
                        <span class="fontsize-14 mr10">充值金额</span>
                        <input placeholder="请输入充值金额">
                    </div>
                    <div class="dialog-footer" style="padding: 10px 20px;">
                        <button class="btn btn-brand mr10">立即充值</button>
                        <button class="btn mr10">支付宝充值</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="mt40">
            <ul style="list-style: none;
                border: 1px solid #e6e6e6;
                display: inline-block;
                padding: 20px;
                border-radius: 4px;
                box-shadow: 0 0 10px rgba(0,0,0,.18);">
                <li class="mb10"><span class="zsfont color-green">&#xe683;</span> 投放中</li>
                <li class="mb10"><span class="zsfont color-red">&#xe683;</span> 暂停投放</li>
                <li class=""><span class="zsfont color-999">&#xe683;</span> 等待投放</li>
            </ul>
        </div>    
    </div>
</div>
<div class="bs-example">
    <div class="content">
        <h3>基础用法 a - 从右侧滑入界面，面积 &gt; 980x300</h3>
        <p>内容是响应了用户的某一操作，浮层信息层需要与底层信息产生明显的区别，帮助用户快速完成任务，并回到原任务中。</p>
        <div class="dialog-backdrop" style="padding: 40px 0 40px 100px;">
            <div class="dialog dialog-singleton">
                <button bx-click="close" type="button" class="dialog-close"><span class="brixfont">&#xe62d;</span></button>
                <div class="dialog-content">
                    <div class="dialog-header">
                        <h4 class="dialog-title">店铺推荐标签</h4>
                    </div>
                    <div class="dialog-body">
                        <p class="flat-text full-width"></p>
                        <p class="flat-text full-width"></p>
                    </div>
                    <div class="dialog-footer">
                        <button class="btn btn-brand mr10">确定</button>
                        <button class="btn mr10">取消</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="bs-example">
    <div class="content">
        <h3>场景 1 - 标题注解</h3>
        <div class="dialog-backdrop" style="padding: 40px 0 40px 100px;">
            <div class="dialog dialog-singleton">
                <button bx-click="close" type="button" class="dialog-close"><span class="brixfont">&#xe62d;</span></button>
                <div class="dialog-content">
                    <div class="dialog-header">
                        <h4 class="dialog-title">店铺推荐标签 <small class="ml3">您选择出来的用户数很少，建议增加资源位或扩展定向标签。</small></h4>
                    </div>
                    <div class="dialog-body">
                        <p class="flat-text full-width"></p>
                        <p class="flat-text full-width"></p>
                    </div>
                    <div class="dialog-footer">
                        <button class="btn btn-brand mr10">确定</button>
                        <button class="btn mr10">取消</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="bs-example">
    <div class="content">
        <h3>场景 2 - 操作实时反馈</h3>
        <div class="dialog-backdrop" style="padding: 40px 0 40px 100px;">
            <div class="dialog dialog-singleton">
                <button bx-click="close" type="button" class="dialog-close"><span class="brixfont">&#xe62d;</span></button>
                <div class="dialog-content">
                    <div class="dialog-header clearfix">
                        <h4 class="pull-left dialog-title">店铺推荐标签</h4>
                        <div class="pull-right mt7"><span class="color-999">圈定人数：</span><strong class="color-brand">92,969,000</strong></div>
                    </div>
                    <div class="dialog-body">
                        <p class="flat-text full-width"></p>
                        <p class="flat-text full-width"></p>
                    </div>
                    <div class="dialog-footer">
                        <button class="btn btn-brand mr10">确定</button>
                        <button class="btn mr10">取消</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="bs-example">
    <div class="content">
        <h3>场景 3 - 多主题浮层</h3>
        <div class="dialog-backdrop" style="padding: 40px 0 40px 100px;">
            <div class="dialog dialog-singleton">
                <button bx-click="close" type="button" class="dialog-close"><span class="brixfont">&#xe62d;</span></button>
                <div class="dialog-content">
                    <div class="dialog-header clearfix" style="padding-bottom: 0px;">
                        <ul class="mm-tabs clearfix" style="margin-bottom: -1px;">
                            <li class="active"><a href="javascript:;">店铺推荐标签</a></li>
                            <li><a href="javascript:;">单品推荐标签</a></li>
                            <li><a href="javascript:;">全部标签</a></li>
                        </ul>
                    </div>
                    <div class="dialog-body">
                        <p class="flat-text full-width"></p>
                        <p class="flat-text full-width"></p>
                    </div>
                    <div class="dialog-footer">
                        <button class="btn btn-brand mr10">确定</button>
                        <button class="btn mr10">取消</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


<div class="bs-example">
    <div class="content">
        <div bx-name="components/dialog" bx-click="open" data-content="<div class='dialog-body'>hello<div>" data-placement="bottom" data-align="left" class="btn btn-default">Dialog</div>
        <div bx-name="components/dialog" bx-click="open" data-content="<div class='dialog-body'>hello<div>" data-placement="bottom" data-align="left" data-modal="true" class="btn btn-default">Modal Dialog</div>
    </div>
</div>

### 配置 <small>Options</small>

Name | Type | Default | Description
:--- | :--- | :------ | :----------
- | - | - | -

### 方法 <small>Methods</small>

#### .method(args)

Lorem ipsum

```js
var Loader = require('loader')
var instance = Loader.query('component/overlay')
instance.method()
```

### 事件 <small>Events</small>

Event Type | Description
:--------- | :----------
- | -
