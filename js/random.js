function f1(n) {
    var arr_4 = []
    //开始取数
    function getRandom(min, max) {
        //随机数
        var random = Math.random() * (max - min) + min
        //向下取整
        random = Math.floor(random)
        //判断数组长度
        if (arr_4.length < n) {
            for (i = 0; i <= arr_4.length; i++)	{
                //遍历数组。
                //比较随机数
                if (random === arr_4[i]) {
                    break
                } else {
                    if (i === arr_4.length) {
                        arr_4.push(random)
                        break
                    }
                }
            }
            getRandom(0, 900)
        }
    }
    //随机取0-80
    getRandom(0, 900)
    return arr_4
}