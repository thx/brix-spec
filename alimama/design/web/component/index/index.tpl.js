/* global define */
define(function() {
    return (function(){/*
<% var RE_FILENAME = /.+\/([^\/]+)/ %>
<% var list = [] %>

<div class="clearfix mb40">
    <div class="pull-left">
        <span class=" fontsize-20 mb40">组件 <small>Components ( <%= COMPONENTS.length %> 个 ) </small></span>
    </div>
    <div class="pull-right" style="position: relative;">
        <a class="btn btn-brand" href="javascript:;"
            on-mouseenter="download" 
            on-click="download">
            <span class="specfont">&#xe633;</span>
            <span>下载附件</span>
        </a>
        <% list = ['UI Kit(0821).sketch', 'Mama Design(0729).rplib'] %>
        <ul class="spec-download-list">
            <% for( var i = 0; i < list.length; i++ ) { %>
            <li class="clearfix">
                <a href="alimama/design/web/component/download/<%= list[i] %>" download="">
                    <span class="name"><%= list[i] %></span>
                    <span class="specfont">&#xe633;</span>
                </a>
            </li>
            <% } %>
        </ul>
    </div>
</div>

<div class="components">
    <div class="row">
        <% _.each(COMPONENTS, function(item, index){ %>
        <div class="col-md-3">
            <a href="<%= item.href %>">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <%= item.name %> <%= item.name_en %>
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