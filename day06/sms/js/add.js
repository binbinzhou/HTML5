/**
 * Created by zhoubinbin on 2016/10/11.
 * 添加学生信息js
 */
$(function () {
    $("#addForm").off();
    $("#addForm").on("submit",function () {
        var id = $(this).find("[name='id']").val();
        var name = $(this).find("[name='name']").val();
        var gender = $(this).find("[name='gender']").val();
        var age = $(this).find("[name='age']").val();
        var address = $(this).find("[name='address']").val();
        var student = new Student(id,name,gender,age,address);
        
        //调用保存方法
        save(student,function (student) {
            console.log(student);
            alert("保存成功");
        })

    })
    
});
