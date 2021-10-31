- [CSS Cascading Style Sheet](#css-cascading-style-sheet)
  - [分類](#分類)
    - [嵌入式](#嵌入式)
    - [內部樣式](#內部樣式)
    - [外部樣式](#外部樣式)
  - [選取器](#選取器)
    - [選取器命名](#選取器命名)
    - [標籤選取器](#標籤選取器)
    - [類別選取器 class](#類別選取器-class)
    - [id選取器](#id選取器)
    - [後代選取](#後代選取)
    - [群組選取](#群組選取)
  - [權重](#權重)
  - [文字相關樣式](#文字相關樣式)
    - [文字色彩-color](#文字色彩-color)
      - [16進位 #4a3d38](#16進位-4a3d38)
      - [rgb/rgba色碼](#rgbrgba色碼)
      - [hsl/hsla色碼](#hslhsla色碼)
    - [文字對齊 - text-align](#文字對齊---text-align)
    - [文字末行對齊 - text-align-last](#文字末行對齊---text-align-last)
    - [文字裝飾 - text-decoration](#文字裝飾---text-decoration)
    - [行高 - line-height](#行高---line-height)
    - [字元間距 - letter-spacing](#字元間距---letter-spacing)
    - [單字間距 - word-spacing](#單字間距---word-spacing)
    - [首行縮排 - text-indent](#首行縮排---text-indent)
    - [文字大小寫 - text-transform](#文字大小寫---text-transform)
    - [小型大寫字母 - font-variant](#小型大寫字母---font-variant)
    - [字體大小 - font-size](#字體大小---font-size)
      - [em 與 rem 的差別](#em-與-rem-的差別)
    - [字體種類 - font-family](#字體種類---font-family)
    - [字體粗細 - font-weight](#字體粗細---font-weight)
    - [斜體字 - font-style](#斜體字---font-style)
  - [背景](#背景)
    - [背景色 - background-color](#背景色---background-color)
    - [背景圖片 - background-image](#背景圖片---background-image)
    - [背景位置 - background-position](#背景位置---background-position)
    - [背景重複方式 - background-repeat](#背景重複方式---background-repeat)
    - [背景固定方式 - background-attachment](#背景固定方式---background-attachment)
    - [背景大小 - background-size](#背景大小---background-size)
    - [背景混和模式 - background-blend-mode](#背景混和模式---background-blend-mode)
    - [漸層色](#漸層色)
  - [清單](#清單)
  - [盒子模型 box-model](#盒子模型-box-model)
    - [邊框 - border](#邊框---border)
    - [內距 - padding](#內距---padding)
      - [縮寫](#縮寫)
      - [寬度與高度計算](#寬度與高度計算)
    - [box-sizing](#box-sizing)
    - [顯示 - display](#顯示---display)
    - [inline-block](#inline-block)
      - [inline-block優點](#inline-block優點)
      - [inline-block的缺點](#inline-block的缺點)
      - [inline-block解決方案](#inline-block解決方案)
    - [float](#float)
    - [float優點](#float優點)
    - [float缺點](#float缺點)
    - [float解決方案](#float解決方案)
  - [定位-position](#定位-position)
    - [靜態 - static](#靜態---static)
    - [相對 - relative](#相對---relative)
    - [絕對 - absolute](#絕對---absolute)
    - [固定 - fixed](#固定---fixed)
    - [黏性 - sticky](#黏性---sticky)
  - [flex](#flex)
# CSS Cascading Style Sheet

串接樣式表

## 分類

依照寫的位置做分類

- 嵌入式
- 內部樣式
- 外部樣式表

### 嵌入式

將style屬性寫在標籤內。

```html
<h1 style="color:chocolate;">嵌入式樣式</h1>
```

### 內部樣式

通常寫在head元素裡面，被style標籤包住

```html
<head>
    <!-- ...略 -->
    <style>
        h2 {
            color:crimson;
        }
    </style>
</head>
<body>
    <h2>內部樣式</h2>
</body>
```

### 外部樣式

獨立的CSS檔，可以透過link或是import引入

- link標籤寫在head元素內

```html
<head>
    <link rel="stylesheet" href="qqq.css">
</head>
```

- import是css的方法，所以要寫在style標籤內，並且一定要放在最上方，否則會失效

```html
<style>
    @import url("qqq.css");
    
    h2 {
        color:crimson;
    }
</style>
```

## 選取器

- 標籤選取器
- 類別選取器(class)
- id選取器
- 後代選取器
- 群組選取器

### 選取器命名

- 首字不可使用數字
- 首字不可使用特殊符號除了底線
- 可使用_與-

### 標籤選取器

```css
h1 {
    color:red;
}
/* 選取所有h1元素 */
p {
    color: blue;
}
/* 選取所有p元素 */
```

### 類別選取器 class

名稱為英文句點開頭

```html
<style>
    .abc {
        color: pink;
    }
</style>
<body>
    <div class="abc">類別選取</div>
</body>
```

### id選取器

名稱為#字號開頭

```html
<style>
    #xyz {
        color: pink;
    }
</style>
<body>
    <div id="xyz">id選取器</div>
</**body**>
```

id選取器只能在頁面使用一次

### 後代選取

將選取器用空格分隔

```html
<style>
    #xyz h2{
        color: pink;
    }
    /* 僅選取#xyz後的h2 */
</style>
<body>
    <div id="xyz">
        <h2>後代選取</h2>
    </div>
</body>
```

### 群組選取

將選取器用逗號分隔

```html
<style>
    h2, h3{
        color: pink;
    }
    /* h2與h3同時變粉色 */
</style>
<body>
    <h2>群組一</h2>
    <h3>群組二</h3>
</body>
```

## 權重

數量越少，權重越重，越優先套用。(物以稀為貴)

id > class > tag

如果權重相同時，以後面寫的樣式優先

## 文字相關樣式

### 文字色彩-color

#### 16進位 #4a3d38

由rgb色碼16進位而來。

16進位算法 rgb(30,0,200) 30 / 16 = 1...14 0 / 16 = 0...0 200 / 16 = 12...8 #商餘商餘商餘 如果遇到十位數就轉換為A，所以16進位的16個分別為 0,1,2,3,4,5,6,7,8,9,A,B,C,D,E,F rgb(30,0,200) => #1E00C8

#### rgb/rgba色碼

- r:red  
- g:green  
- b:blue  
- a:alpha

數值從0~255，因為是光，0最少，255最亮

#### hsl/hsla色碼

- h:hue-色相-角度
- s:saturate-飽和度-%
- l:lightness-明度-%
- a:alpha

```css
h1 {
    color: red;                /*色彩名稱*/
    color: rgb(255,0,0);       /*RGB色碼*/
    color: rgba(255,0,0,.5);   /*RGBA色碼*/
    color: #ff0000;            /*16進位*/
    color: #f00;               /*16進位縮寫*/
    color: hsl(112, 80%, 36%)  /*色相飽和度明度*/
}
```

### 文字對齊 - text-align

- left
- center
- right
- justify

### 文字末行對齊 - text-align-last

- left
- center
- right
- justify

### 文字裝飾 - text-decoration

```css
p {
    text-decoration: line-through;
    /* 
        文字裝飾
        none,underline,overline,line-through 
    */


    text-decoration-color: crimson;
    /* 文字裝飾色彩 */
    
    text-decoration-style: wavy;
    /* 
        文字裝飾樣式
        solid,dashed,dotted,double,wavy 
    */
    
    text-decoration-line: underline;
    /* 文字裝飾位置 */

    text-decoration-thickness: 10px;
    /* 文字裝飾粗細 */

    text-decoration:underline wavy 2px crimson;
    /* 縮寫 */
}
```

### 行高 - line-height

每一行的高度。行高不管設定為多少，文字一定都會行的正中間。

### 字元間距 - letter-spacing

字母之間的距離

### 單字間距 - word-spacing

單字與單字之間的距離，中文不影響。

### 首行縮排 - text-indent

每段文章首行的縮排距離

### 文字大小寫 - text-transform

```css
p {
    text-transform: lowercase;
    /* 小寫 */
    text-transform: uppercase;
    /* 大寫 */
    text-transform: capitalize;
    /* 首字大寫 */
}
```

### 小型大寫字母 - font-variant

```css
p {
    font-variant: small-caps
}
```

### 字體大小 - font-size

單位:px,em,rem,vw

#### em 與 rem 的差別

- em 的比例是依循最靠近的父元素；rem 的比例是依循根的比例。假設父元素是 24px，子元素是 1.6em，最後的大小就是 24 x 1.6；若子元素是1.6rem，則是 16 x 1.6。
- 根可以透過 :root,html 修改。

### 字體種類 - font-family

```css
p {
      font-family: 'arial','tahoma';
}
```

通常會在後方設定兩個以上的字體，如果某一個瀏覽器抓不到第一個字體，則會抓第二個字體；若第二個也抓不到則會使用瀏覽器預設字體。

### 字體粗細 - font-weight

- bold
- bolder
- light
- lighter
- 100-900
- normal

### 斜體字 - font-style

- italic
- normal

## 背景

### 背景色 - background-color

色碼

### 背景圖片 - background-image

圖片路徑

```css
body {
    background-image: url("圖片路徑");
}
```

### 背景位置 - background-position

- 水平距離與垂直距離
- top
- buttom
- left
- right

### 背景重複方式 - background-repeat

- repeat
- no-repeat
- repeat-x
- repeat-y

### 背景固定方式 - background-attachment

- scroll
- fixed

### 背景大小 - background-size

- 寬度 高度
- cover
- contain

### 背景混和模式 - background-blend-mode

- screen      濾色(去黑留白)
- multiply    色彩增值(去白留黑)
- overlay     覆蓋
- darken      變暗
- lighten     變亮
- color       顏色
- luminosity  明度
- hue         色相
- soft-light  柔光
- hard-light  實光
- color-burn  加深顏色
- color-dodge 加亮顏色
- exclusion   排除
- difference  差異化

### 漸層色

```css
body {
    background-image: linear-gradient(to left top,#ff0000,#fffb0a);
}
```

## 清單

- list-style
- none
- disc, circle, square
- decimal, lower-alpha, upper-alpha, lower-roman, upper-roman
- cjk-ideographic,hiragana,katakana
- hebrew, armenian, georgian,lower-greek

## 盒子模型 box-model

### 邊框 - border

- border-style
- border-width
- border-color
- border-left-style
- border-left-width
- border-left-color
- border-right-style
- border-right-width
- border-right-color
- border-top-style
- border-top-width
- border-top-color
- border-bottom-style
- border-bottom-width
- border-bottom-color
- border
- border-left
- border-right
- border-top
- border-bottom

### 內距 - padding

- padding
- padding-left
- padding-right
- padding-top
- padding-bottom

#### 縮寫

```css
    .box {
        padding: 30px;
        /* 上下左右 30px */

        padding: 100px 40px;
        /* 上下100px 左右40px */

        padding: 0 100px 50px;
        /* 上0 左右100px 下50px */

        padding: 0px 100px 50px 200px;
        /* 上0 右100 下50 左200 */
    }
```

#### 寬度與高度計算

預設狀態下
總寬度 = width + border-left + border-right + padding-left + padding-right
總高度 = height + border-top + border-bottom + padding-top + padding-bottom

### box-sizing

讓width包含border與padding

- border-box
- content-box

### 顯示 - display

- block
- inline
- inline-block
- table
- table-cell
- flex
- grid
- none

### inline-block

#### inline-block優點

- 可併排
- 有width跟height

#### inline-block的缺點

- 元素之間有4px不等的空隙
- 無法使用margin:auto置中

#### inline-block解決方案

- 父元素的font-size設定為0
- 子元素的font-size還原
- 設定垂直對齊(vertical-align)

### float

### float優點

- 可併排
- 元素之間無空隙

### float缺點

- 後方元素會被浮動影響
- 父元素崩蹋

### float解決方案

- height
- overflow
- clearfix
- flowroot

## 定位-position

### 靜態 - static

靜態定位是所有元素的預設值。

### 相對 - relative

以預設位置為基準的指定位置

### 絕對 - absolute

以最相近父元素為基準的定位。若所有父元素都沒有設定定位（static等同沒有設定），則會以視窗為基準，並隨著頁面滾動而移動。

### 固定 - fixed

相對於視窗的定位，且不會隨著視窗移動。

### 黏性 - sticky

依據使用者滾動卷軸的位置定位

## flex

- display
- flex-direction 排列方向
- flex-wrap 換行
- flex-flow 換行/排列方向 縮寫
- jutify-content 水平對其
- align-items 垂直對其
- align-self 子項目垂直對其
- align-content 整體垂直對其
- order 排序
