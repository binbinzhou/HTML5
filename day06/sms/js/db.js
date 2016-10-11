/**
 * Created by zhoubinbin on 2016/10/11.
 * 数据库相关的js
 */
//创建数据库
function getDB(){
    var db = window.openDatabase("sms","1.0","a database",2*1024*1024);
    return db;
}
//创建数据库表
(function(){
    var db = getDB();
    db.transaction(function (transaction) {
        var sql = "CREATE TABLE IF NOT EXISTS tbl_student(id INTEGER,name TEXT,gender TEXT,age INTEGER,address TEXT)";
        transaction.executeSql(sql,[],function () {
            console.log("创建表成功！");
        });
    });
})();

//创建构造函数，
function Student(id,name,gender,age,address){
    this.id = id;
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.address = address;
}

//添加学生信息
function save(student,handler) {
    if(student instanceof Student){
        var db = getDB();
        db.transaction(function (transaction) {
            var sql = "INSERT INTO tbl_student VALUES(?,?,?,?,?)";
            transaction.executeSql(sql,[student.id,student.name,student.gender,student.age,student.address],function () {
                handler.call(this);
            });
        });
    } else{
        alert("您输入的数据有误");
    }
}
//查询学生信息
function select() {
    var db = getDB();
    db.transaction(function (transaction) {
        var sql = "SELECT * FROM tbl_student";
        transaction.executeSql(sql,[],function (transaction,result) {
            //获取结果集
            var rows = result.rows;
            $(rows).each(function (index,item) {
                //console.log(item);
                var newTr = $(".hiddenTr").clone().removeClass("hiddenTr");
                newTr.find(":checkbox").val(item.id);
                newTr.children().eq(1).html(item.name);
                newTr.children().eq(2).html(item.gender);
                newTr.children().eq(3).html(item.age);
                newTr.children().eq(4).html(item.address);
                $(".tb1 tbody").append(newTr);
            });

        });
    })
}
select();

//删除学生信息
function del(args){
    var db = getDB();
    db.transaction(function (transaction) {
        console.log(args);
        var sql = "DELETE FROM tbl_student WHERE id=?";
        transaction.executeSql(sql,[args],function (transaction,result) {
            alert("删除成功");
            window.location.reload();
        })
    })
}

//通过id查找学生信息
function selectId(ids){
    var db = getDB();
    db.transaction(function (transaction) {
        var sql = "SELECT name,gender,age,address FROM tbl_student where id=?";
        transaction.executeSql(sql,[ids],function (transaction,result) {
            //获取结果集
            var rows = result.rows;
            $(rows).each(function (index,item) {
                console.log(item);
            });

        });
    })
}

/*
//修改学生信息
function update(args,student,handler) {
    if(student instanceof Student){
        var db = getDB();
        db.transaction(function (transaction) {
            var sql = "update tbl_user set id = ?,name=?,gender=?,age=?,address=?";
            transaction.executeSql(sql,[student.id,student.name,student.gender,student.age,student.address],function () {
                handler.call(this);
            })
        });
    } else{
        alert("您输入的数据有误");
    }
}*/