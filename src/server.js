//1.引入express
const { json, response } = require('express');
const express = require('express');
//2.创建应用对象
const app = express();
//3.创建路由规则
// request是对请求报文的封装
// response是对响应报文的封装
app.get('/ie', (request, response) => {
    //设置响应头 设置允许跨域
    response.setHeader("Access-Control-Allow-Origin", "*");

    //设置响应体
    response.send("Hello IE - 3");
});

app.all('/json-server', (request, response) => {
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    // 响应头
    response.setHeader('Access-Control-Allow-Headers', '*');
    //响应一个数据
    const data = {
        name: 'Pycro'
    }
    //对对象进行字符串转换
    let str = JSON.stringify(data);
    //设置响应体 
    response.send(str);
});

// 延时响应
app.all('/delay', (request, response) => {
    //设置响应头 设置允许跨域
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Access-Control-Allow-Headers", "*");
    setTimeout(() => {
        //设置响应体
        response.send("延时响应");
    }, 3000);
});

//jQuery服务
app.all('/jquery-server', (request, response) => {
    //设置响应头 设置允许跨域
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Access-Control-Allow-Headers", "*");
    //设置响应体
    // response.send("Hello jQuery AJAX");
    const data = { name: "Pycro", age: 23, gender: "男" }
    const str = JSON.stringify(data);
    response.send(str);

});

//axios服务
app.all('/axios-server', (request, response) => {
    //设置响应头 设置允许跨域
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Access-Control-Allow-Headers", "*");
    //设置响应体
    // response.send("Hello jQuery AJAX");
    const data = { name: "Pycro", age: 23, gender: "男" }
    const str = JSON.stringify(data);
    response.send(str);

});

//fetch服务
app.all('/fetch-server', (request, response) => {
    //设置响应头 设置允许跨域
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Access-Control-Allow-Headers", "*");
    //设置响应体
    // response.send("Hello jQuery AJAX");
    const data = { name: "Pycro", age: 23, gender: "男" }
    const str = JSON.stringify(data);
    response.send(str);

});

// jsonp服务
app.all('/jsonp-server', (request, response) => {
    // response.send('console.log("hello jsonp-server")');
    const data = {
        name: "Pycro2333"
    }
    let str = JSON.stringify(data);
    response.end(`handle(${str})`);
})

// 用户名检测是否存在
app.all('/check-username', (request, response) => {
    // response.send('console.log("hello jsonp-server")');
    const data = {
        exist: 1,
        msg: '用户名已存在'
    }
    let str = JSON.stringify(data);
    response.end(`handle(${str})`);
})

app.all('/jquery-jsonp-server', (request, response) => {
    const data = {
        name: 'Pycro',
        city: ['北京', '上海', '深圳']
    }
    let str = JSON.stringify(data);
    // 接收callback参数
    let cb = request.query.callback;
    // 返回结果
    response.end(`${cb}(${str})`);
})

app.all('/cors-server', (request, response) => {
    // 设置响应头
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    response.setHeader('Access-Control-Allow-Method', '*');
    response.send("hello CORS");
})

//4.监听端口启动服务
app.listen(8000, () => {
    console.log("服务已经启动,8000.端口监听中....");
})