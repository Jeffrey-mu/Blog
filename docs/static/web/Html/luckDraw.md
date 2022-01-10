### 实现一个抽奖
- 点击开始逆时针
```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
    </head>
    <style>
        .box {
            width: 330px;
            height: 330px;
        }

        .box ul {
            width: 100%;
            height: 100%;
            display: flex;
            flex-wrap: wrap;
        }

        .box ul li {
            box-sizing: border-box;
            list-style: none;
            width: 100px;
            height: 100px;
            margin: 0 10px 10px 0;
            border: 1px solid #ccc;
            text-align: center;
            line-height: 100px;
        }

        .active {
            background-color: red;
        }
    </style>

    <body>
        <div class="box">
            <ul></ul>
        </div>
        <script>
            /**
             * @Author wangjiafeng
             * @Description
             * @Date 2022-01-05 00:28:07 Wednesday
             */
            class Handle {
                constructor(time = 1000) {
                    this.time = time;
                    this.array = ['0', '3', '6', '7', '8', '5', '2', '1'];
                }
                insertElement(number = 8) {
                    for (let i = 0; i <= number; i++) {
                        let li = document.createElement('li');
                        if (i === 4) {
                            li.innerText = '开始';
                        }
                        this.getParent().appendChild(li);
                    }
                    return this;
                }
                clickEvent(target = this.getElements()[4]) {
                    let els = this.getElements();
                    let time = null;
                    target.onclick = () => {
                        this.clearClassName();
                        let i = 0,
                            num = 0;
                        if (!!time) clearInterval(time);
                        time = setInterval(() => {
                            if (i) {
                                els[this.getArray()[i - 1]].className = ' ';
                            } else {
                                els[this.getArray()[7]].className = ' ';
                            }
                            els[this.getArray()[i++]].className = 'active';
                            if (i === 8) {
                                num++;
                                i = 0;
                            }
                            if (num === 2 && i == 5) {
                                clearInterval(time);
                            }
                        }, this.getTime());
                    };
                }
                clearClassName() {
                    [...this.getElements(this.getParent())].map(el => (el.className = ''));
                }
                getTime() {
                    return this.time;
                }
                getArray() {
                    return this.array;
                }
                getElements(parent = this.getParent(), el = 'li') {
                    return parent.getElementsByTagName(el);
                }
                getParent(el = 'ul') {
                    return document.getElementsByTagName(el)[0];
                }
            }
            let com = new Handle();
            com.insertElement().clickEvent();
        </script>
    </body>
</html>
```
