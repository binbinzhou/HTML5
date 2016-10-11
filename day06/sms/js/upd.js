/**
 * Created by zhoubinbin on 2016/10/11.
 * 学生信息修改的js
 */
$(function () {
    $(".controls button:eq(1)").off();
    $(".controls button:eq(1)").on("click",function () {
        var ids = $(".tb1 td :checkbox:checked").map(function (index,item) {
            return item.value;
        }).get();
        console.log(ids);
        //获取id之后调用一个用id查找学生信息方法，然后将数据显示在update页面上
        selectId(ids);
        //先阻止默认行为
        return false;
    });
});
