<!--
 * @Author: WangJiaFeng
 * @Date: 2022-01-19 10:44:32
 * @LastEditTime: 2022-01-19 11:11:15
 * @Description: file content
 * @FilePath: \vuepress-starter\docs\static\web\JavaScript\Array\prototype.md
-->

### 数组原型方法

#### map

返回新数组
每个元素调用函数，返回新值

```js
let arr = [1, 2, 3];
console.log(arr.map(item => (item += 1))); // [2, 3, 4]
```

#### forEach

操作原数组，无返回（undefined）
每个元素调用函数

```js
let arr = [1, 2, 3];
console.log(arr.forEach(item => (item += 1))); // undefined
```

#### filter

返回新数组
筛选调用函数，返回 true 的值
每个元素调用函数，返回布尔值

```js
let arr = [1, 2, 3];
console.log(arr.filter(item => item > 1)); // [2, 3]
```

#### every

返回布尔值
所有元素通过测试，返回 true，否则 false
每个元素调用函数，返回布尔值
空数组返回 true

```js
let arr = [1, 2, 3];
console.log(arr.every(item => item > 1)); // false
console.log(arr.every(item => item > 0)); // true
```

#### some

返回布尔值
任一元素通过测试，返回 true，否则 false
每个元素调用函数，返回布尔值
空数组返回 false
任一元素调用函数返回 true 时，some 立即返回 true，不继续循环

```js
let arr = [1, 2, 3];
console.log(arr.some(item => item > 1)); // true
console.log(arr.some(item => item > 3)); // false
```

#### push

返回数组新长度
数组末尾添加元素(可多个)，改变原数组

```js
let arr = [1, 2, 3];
arr.push(4); // 4
arr; //[1, 2, 3, 4]
```

#### pop

返回删除的元素
删除最后一个元素，改变原数组

```js
let arr = [1, 2, 3];
arr.pop(); // 3
arr; //[1, 2]
```

#### shift

返回删除的元素
删除第一个元素，改变原数组

```js
let arr = [1, 2, 3];
arr.shift(); // 1
arr; //[2, 3]
```

#### unshift

返回数组新长度
数组开头添加元素(可多个)，改变原数组

```js
let arr = [1, 2, 3];
arr.unshift(0); // 4
arr; //[0, 1, 2, 3]
```

#### concat

返回新数组
合并两个或多个数组/值
不传参数，返回浅拷贝数组

```js
let arr = [1, 2, 3];
arr.concat([4]); //[1, 2, 3, 4]
arr; //[1, 2, 3]
```

#### join

返回字符串
连接数组元素，可指定分隔字符

```js
let arr = [1, 2, 3];
arr.join(','); //1,2,3
arr; //[1, 2, 3]
```

#### splice

返回删除元素数组
增删改元素，改变原数组

```js
let arr = [1, 2, 3];
// 参数说明 arr.splice(a, b, c) a: 开始下标 b：删除个数 c：替换元素

// 删除
arr.splice(0, 1); //[1]
arr; // [2, 3]
// 添加
arr.splice(0, 0, 0); //[]
arr; //[0, 1, 2, 3]
// 替换
arr.splice(0, 1, 0); //[0]
arr; //[0, 2, 3]
```

#### reverse

返回新数组
颠倒元素的位置，改变原数组

```js
let arr = [1, 2, 3];
arr.rervers(); // [3, 2, 1]
arr; // [3, 2, 1]
```

#### sort

数组原地排序 不会改变原数组
无 compareFunction，会按照转换为的字符串的诸个字符的 Unicode 位点进行排序。
有 compareFunction，按照调用该函数的返回值排序
如果 compareFunction(a, b) 小于 0 ，那么 a 会被排列到 b 之前

```js
let arr = [3, 2, 1];
arr.sort(); // [1, 2, 3]
arr; // [3, 2, 1]
arr.sort((a, b) => a - b); // [1, 2, 3] 正序
arr.sort((a, b) => a + b); // [3, 2, 1] 倒序
// 进阶
let arrObj = [
    {
        name: 'java',
        v: 3,
    },
    {
        name: 'javascript',
        v: 2,
    },
    {
        name: 'php',
        v: 1,
    },
];
arrObj.sort((a, b) => a.v + b.v) // 按照数组对象属性排序
```
