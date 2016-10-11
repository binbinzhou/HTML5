/**
 * Created by zhoubinbin on 2016/10/11.
 */
$(function () {
//删除按钮事件
    $(".controls button:eq(2)").off();
    $(".controls button:eq(2)").on("click",function () {
        //获取到选中的复选框的id
        var ids = $(".tb1 td :checkbox:checked").map(function (index,item) {
            return item.value;
        }).get();
        //id可以是多个，所以将id转化为数组，再转化为字符串
        if(ids){
            console.log(ids);
            del(ids);
        } else{
            alert("请选择要删除的学生！");
        }
    })
});