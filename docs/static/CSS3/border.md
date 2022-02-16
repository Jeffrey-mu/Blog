<!--
 * @Author: WangJiaFeng
 * @Date: 2022-02-16 17:49:03
 * @LastEditTime: 2022-02-16 17:53:58
 * @Description: file content
 * @FilePath: \Blog\docs\static\CSS3\border.md
-->

## CSS3 边框

### CSS3 边框

用 CSS3，你可以创建圆角边框，添加阴影框，并作为边界的形象而不使用设计程序，如 Photoshop。

在本章中，您将了解以下的边框属性：

-   border-radius
-   box-shadow
-   border-image

### CSS3 圆角

在 CSS2 中添加圆角棘手。我们不得不在每个角落使用不同的图像。

在 CSS3 中，很容易创建圆角。

在 CSS3 中 border-radius 属性被用于创建圆角：

这是圆角边框！

在 div 中添加圆角元素：

```css
div {
    border: 2px solid;
    border-radius: 25px;
}
```

### CSS3 盒阴影

CSS3 中的 box-shadow 属性被用来添加阴影:

在 div 中添加 box-shadow 属性

```css
div {
    box-shadow: 10px 10px 5px #888888;
}
```

### 新边框属性

| 属性          | 说明                                            | CSS |
| ------------- | ----------------------------------------------- | --- |
| border-image  | 设置所有边框图像的速记属性。                    | 3   |
| border-radius | 一个用于设置所有四个边框- \*-半径属性的速记属性 | 3   |
| box-shadow    | 附加一个或多个下拉框的阴影                      | 3   |
