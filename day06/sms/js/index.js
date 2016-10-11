/**
 * Created by zhoubinbin on 2016/10/11.
 *
 */
$(function () {
    //复选框全选，反选绑定事件
    //有一个母体复选框是隐藏的
    $(".controls :checkbox:visible").off();
    $(".controls :checkbox").on("change",function () {
        if($(this).prop("checked")){
            $(".tb1 td :checkbox:visible").prop("checked",true);
        } else{
            $(".tb1 td :checkbox:visible").prop("checked",false);
        }
    });
    /*
//删除按钮事件
    $(".controls button:eq(2)").off();
    $(".controls button:eq(2)").on("click",function () {
            //获取到选中的复选框的id
            var ids = $(".tb1 td :checkbox:checked").map(function (index,item) {
                return item.value;
            }).get().join();
            //id可以是多个，所以将id转化为数组，再转化为字符串
            if(ids){
                console.log(ids);
                del(ids);
            } else{
                alert("请选择要删除的学生！");
            }
    })*/
});





