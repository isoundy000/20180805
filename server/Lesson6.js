/**
 * Created by litengfei on 2017/12/10.
 */

var MemoryLeakManager = require("./../core/MemoryLeakManager.js");
class BigData{
    constructor(){
        this.data = "上完课的福克斯的罚款第三方上完课的福克斯的罚款第三方上完课的福克斯的罚款第三方上完课的福克斯的罚款第三方上完课的福克斯的罚款第三方上完课的福克斯的罚款第三方上完课的福克斯的罚款第三方上完课的福克斯的罚款第三方上完课的福克斯的罚款第三方上完课的福克斯的罚款第三方上完课的福克斯的罚款第三方上完课的福克斯的罚款第三方上完课的福克斯的罚款第三方上完课的福克斯的罚款第三方上完课的福克斯的罚款第三方上完课的福克斯的罚款第三方上完课的福克斯的罚款第三方上完课的福克斯的罚款第三方上完课的福克斯的罚款第三方上完课的福克斯的罚款第三方上完课的福克斯的罚款第三方上完课的福克斯的罚款第三方上完课的福克斯的罚款第三方上完课的福克斯的罚款第三方上完课的福克斯的罚款第三方上完课的福克斯的罚款第三方上完课的福克斯的罚款第三方上完课的福克斯的罚款第三方上完课的福克斯的罚款第三方上完课的福克斯的罚款第三方上完课的福克斯的罚款第三方上完课的福克斯的罚款第三方上完课的福克斯的罚款第三方上完课的福克斯的罚款第三方上完课的福克斯的罚款第三方上完课的福克斯的罚款第三方上完课的福克斯的罚款第三方上完课的福克斯的罚款第三方上完课的福克斯的罚款第三方上完课的福克斯的罚款第三方上完课的福克斯的罚款第三方上完课的福克斯的罚款第三方上完课的福克斯的罚款第三方上完课的福克斯的罚款第三方上完课的福克斯的罚款第三方上完课的福克斯的罚款第三方上完课的福克斯的罚款第三方上完课的福克斯的罚款第三方上完课的福克斯的罚款第三方上完课的福克斯的罚款第三方上完课的福克斯的罚款第三方上完课的福克斯的罚款第三方上完课的福克斯的罚款第三方上完课的福克斯的罚款第三方上完课的福克斯的罚款第三方上完课的福克斯的罚款第三方上完课的福克斯的罚款第三方上完课的福克斯的罚款第三方上完课的福克斯的罚款第三方上完课的福克斯的罚款第三方上完课的福克斯的罚款第三方上完课的福克斯的罚款第三方上完课的福克斯的罚款第三方上完课的福克斯的罚款第三方上完课的福克斯的罚款第三方上完课的福克斯的罚款第三方上完课的福克斯的罚款第三方上完课的福克斯的罚款第三方上完课的福克斯的罚款第三方上完课的福克斯的罚款第三方上完课的福克斯的罚款第三方"
    }
}
var buffer = [];
var express = (require("express"))();
express.get("/hello",function (req,res) {
    for(var i = 0;i<100000;i++){
        buffer.push(new BigData());
    }
    res.send("访问成功");
});

express.listen(3000);

MemoryLeakManager.autoWatchMemory(__dirname+"//leak//");