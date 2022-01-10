### 冻结对象 Object.freeze()

-   可以冻结一个对象。一个被冻结的对象再也不能被修改；冻结了一个对象则不能向这个对象添加新的属性，不能删除已有属性，不能修改该对象已有属性的可枚举性、可配置性、可写性，以及不能修改已有属性的值。此外，冻结一个对象后该对象的原型也不能被修改

#### 冻结对象示例

```js
const object = Object.freeze({
    name: '123',
});
console.log(object); //{name: '123'}
object.name = 'tom'; //无法改变
console.log(object); //{name: '123'}
```

#### 冻结数组示例

-   Array 原型最终指向 Object 所以 Object.freeze()方法也适用于数组

````js
 const array = Object.freeze([1, 2])
        console.log(array)
        array[0] = 'tom'
        // array.push(3)// 报错
        console.log(array)
        ```
````

#### 浅冻结

```js
const objectFreeze = Object.freeze({
    person: {
        name: 'tom',
    },
});
console.log(objectFreeze);
objectFreeze.person.name = 'jack';
console.log(objectFreeze); //{person: {name: 'jack'}}
```

#### 深度冻结

-   为了使对象不可变，请递归冻结每个对象类型的属性（深度冻结）。当您知道对象在参考图中不包含循环时，请根据您的设计逐个使用该模式，否则将触发无限循环。对的增强 deepFreeze()是拥有一个接收路径（例如 Array）参数的内部函数，因此您可以 deepFreeze()在对象变为不可变的过程中抑制递归调用。您仍然有冻结不应该冻结的对象的风险，例如[window]

```js
function deepFreeze(object) {
    // Retrieve the property names defined on object
    const propNames = Object.getOwnPropertyNames(object);

    // Freeze properties before freezing self

    for (const name of propNames) {
        const value = object[name];

        if (value && typeof value === 'object') {
            deepFreeze(value);
        }
    }

    return Object.freeze(object);
}

const obj2 = {
    internal: {
        a: null,
    },
};

deepFreeze(obj2);

obj2.internal.a = 'anotherValue'; // fails silently in non-strict mode
obj2.internal.a; // null
```
#### 使用场景
- vue开发技巧——object.freeze使用
众所周知vue是以object.defineProperty来进行数据绑定的，通过监听对象枚举值来响应数据的变化，当然给我们带来便利。

- 可我们总会有一个场景，我们只是用来存储某个对象或者数组，并不要求它响应对应的视图，但在这个过程中vue还是会用object.defineProperty来监听这个数组，这样就是一种浪费。

- 那就用到object.freeze方法了，它可以防止vue对它的监听。从而避免这种资源的浪费，不要看它小，而忽略，不积跬步无以至千里。
- 如果你有一个巨大的Array或Object，并且确信数据不会修改，使用object.freeze可以让性能大幅提升。
#### 关于
<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze>
