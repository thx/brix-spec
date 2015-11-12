/* global define */
define(function() {
    return (function(){/*
<% var RE_FILENAME = /.+\/([^\/]+)/ %>
<% var list = [] %>
<div class="clearfix mb40">
    <div class="pull-left">
        <span class=" fontsize-20 mb40">图表DEMO <small>共 ( <%= COMPONENTS.length %> 个 ) </small></span>
    </div>

</div>

<div class="components">
    <div class="row">
        <% _.each(COMPONENTS, function(item, index){ %>
        <div class="col-md-3">
            <a href="readme.html?name=<%= item.resp %>">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <%= item.name %> 
                        <%= item.resp %>
                    </div>
                    <div class="panel-body">
                        <img src="<%= item.prev %>">
                    </div>
                    <div class="panel-footer hide">
                        示例
                        配置
                        属性
                        方法
                        事件
                    </div>
                </div>
            </a>
        </div>
        <% }) %>
    </div>
</div>


    */}).toString().split('\n').slice(1,-1).join('\n') + '\n'
})