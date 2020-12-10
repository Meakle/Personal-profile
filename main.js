const style = document.querySelector('#style');
const html = document.querySelector('#html');

let string = `
/*
    hi~
    我是方阿森
    一名学生, 想要成为一名前端攻城狮
**/

/*
    现在背景太亮了,
    上帝说要暗一点
**/

body {
    background-color: #dfe1e5; 
}

/*
    现在这个有点难看
    我来美化一下
**/

#html {
    color: #999;
    background-color: #000;
    border-radius: 0% 0% 2% 2%;
}

#bar {
    position: relative;
    min-width: 600px;
    height: 30px;
    background-color: #0000d3;
    border-radius: 10px 10px 0px 0px;
}
#bar::after{
    content: 'X';
    color: floralwhite;
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
}


/*
    其实我把自我介绍隐藏了
    来, 有请下一位练习生
**/

@keyframes show{
    form{
        opacity: 0;
    }
    to {
        opacity: 1;
    }
};

/*
    完事啦! 👏
**/

`

let n = 0;
let string2 = '';

let step = () => {
    setTimeout(() => {

        // 判定何时停止定时器
        if (n < string.length - 1) {
            console.log(string.length);
            step();
        }

        // 调整格式, 替换空格和换行在html中的形式
        if (string[n] === ' ') {
            string2 += '&nbsp';
        } else if (string[n] === '\n') {
            string2 += '<br>'
        }

        // 当代码过长的时候,自动移动滚动条
        html.scrollTo(0, 99999);

        // 读取string, 并将其放入style
        style.innerHTML = string.substring(0, n);
        // 将string2一点一点拼接到后面去
        string2 += string[n];
        html.innerHTML = string2;
        n++;
    }, 35);
}

step();