
var linksrc = [
    {
        'name': '必应',
        'url': 'https://cn.bing.com/search?q='
    },
    {
        'name': '搜狗',
        'url': 'https://www.sogou.com/web?query='
    }
]

layui.use(['form', 'laydate', 'layer'], function () {
    var laydate = layui.laydate;
    var table = layui.table;
    var ids = [];

    $.CMS_LIST = {
        search: function () {
            $("#search").on('click', function () {
                keyword = $.trim($("#keyword").val());
               $(".space iframe").eq(0).attr('src',linksrc[0].url+keyword);
                $(".space iframe").eq(1).attr('src',linksrc[1].url+keyword);
            });

        },
        init: function init() {
            this.search();
        }
    };
    $(function () {
        $.CMS_LIST.init();
    });
});