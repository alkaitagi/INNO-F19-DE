# DE Computational practicum

**Links:**

- [GitHub pages hosted web-app](https://alkaitagi.github.io/INNO-F19-DE/)
- [Repository with source code and this report](https://github.com/alkaitagi/INNO-F19-DE)

**Table of contents:**

- [DE Computational practicum](#de-computational-practicum)
  - [1. Analytical soltuion](#1-analytical-soltuion)
    - [1.1 Initial system](#11-initial-system)
    - [1.2 General solution](#12-general-solution)
    - [1.3 Initial value problem](#13-initial-value-problem)
    - [1.4 Discontuinuity points](#14-discontuinuity-points)
    - [1.5 Final system](#15-final-system)
  - [2. Function analysis](#2-function-analysis)
  - [3. Implementation](#3-implementation)
    - [3.1 Managers](#31-managers)
    - [3.2 Math classes](#32-math-classes)
    - [3.3 Graph classes](#33-graph-classes)
    - [3.4 UML diagram](#34-uml-diagram)

## 1. Analytical soltuion

### 1.1 Initial system

<img src="/tex/4e4822f474cf3fe19f2ee3cb8b8b4475.svg?invert_in_darkmode&sanitize=true" align=middle width=112.52273009999999pt height=126.77285610000003pt/>

### 1.2 General solution

<img src="/tex/f714a03d694c04f23dd2885f607aebe9.svg?invert_in_darkmode&sanitize=true" align=middle width=97.91083829999998pt height=26.76175259999998pt/>

using variable separation:

<img src="/tex/b867a803a47b20486fae9bc3039ccd75.svg?invert_in_darkmode&sanitize=true" align=middle width=102.12319754999997pt height=26.76175259999998pt/>

<img src="/tex/63186690f624fc7a372830698179e275.svg?invert_in_darkmode&sanitize=true" align=middle width=142.72109114999998pt height=30.648287999999997pt/>

<img src="/tex/773676ab9649a1f53a1b7643d3def622.svg?invert_in_darkmode&sanitize=true" align=middle width=128.28125475pt height=30.648287999999997pt/>

using partial fraction decomposition:

<img src="/tex/48628dfee2395ebcbacec12cf53aa7aa.svg?invert_in_darkmode&sanitize=true" align=middle width=244.10290079999996pt height=30.648287999999997pt/>

<img src="/tex/d9e0d8df495a46e18b5be613e707d161.svg?invert_in_darkmode&sanitize=true" align=middle width=146.28501029999998pt height=33.45973289999998pt/>

<img src="/tex/72848ff25abd71b76ac89d278b6a7b56.svg?invert_in_darkmode&sanitize=true" align=middle width=112.75834515pt height=37.99307159999998pt/>

squaring both side:

<img src="/tex/98577aa8a7fbeafa18f657cc462ec09d.svg?invert_in_darkmode&sanitize=true" align=middle width=102.61450485pt height=35.18167619999999pt/>

<img src="/tex/857572ff0532382f6f898f961c9b10d3.svg?invert_in_darkmode&sanitize=true" align=middle width=143.46333539999998pt height=32.44583099999998pt/>

<img src="/tex/9e2d1ca34242d74e8e1dd3281af7ec49.svg?invert_in_darkmode&sanitize=true" align=middle width=93.32616149999998pt height=40.09346879999999pt/>

substiute <img src="/tex/781ac8f3d13c12bf07b4ff9df61b1af9.svg?invert_in_darkmode&sanitize=true" align=middle width=64.41159449999999pt height=27.77565449999998pt/>:

<img src="/tex/2c8388805e146cb8893c6c1dde85d8c5.svg?invert_in_darkmode&sanitize=true" align=middle width=85.83077579999998pt height=40.09346879999999pt/>

<img src="/tex/bda7f6da25cd57be3e28f35aabf4e7fd.svg?invert_in_darkmode&sanitize=true" align=middle width=96.8672958pt height=39.020513400000006pt/>

### 1.3 Initial value problem

<img src="/tex/f49a722ca121c43d6a6ebd19a363e012.svg?invert_in_darkmode&sanitize=true" align=middle width=78.50759894999999pt height=39.2879487pt/>

substituting:

<img src="/tex/58bb8b578a0ced40d72d030d95809143.svg?invert_in_darkmode&sanitize=true" align=middle width=65.39374049999999pt height=33.45973289999998pt/>

<img src="/tex/6e7a527bb6054d5433c8f6a92a36e296.svg?invert_in_darkmode&sanitize=true" align=middle width=71.37187859999999pt height=22.465723500000017pt/>

<img src="/tex/36a2bb460655aa375194033d955dc30f.svg?invert_in_darkmode&sanitize=true" align=middle width=43.06147724999999pt height=22.465723500000017pt/>

and we can obtain general formula for <img src="/tex/9b325b9e31e85137d1de765f43c0f8bc.svg?invert_in_darkmode&sanitize=true" align=middle width=12.92464304999999pt height=22.465723500000017pt/>:

<img src="/tex/a6a03b17f35fa1816bb8a32eed41b77c.svg?invert_in_darkmode&sanitize=true" align=middle width=115.72451549999998pt height=32.44583099999998pt/>

since <img src="/tex/14adeddbb1889c9aba973ba30e7bce77.svg?invert_in_darkmode&sanitize=true" align=middle width=14.61197759999999pt height=14.15524440000002pt/> is positive, we pick <img src="/tex/df33724455416439909c33a7db76b2bc.svg?invert_in_darkmode&sanitize=true" align=middle width=12.785434199999989pt height=19.1781018pt/> sign and partucilar soltuion is:

<img src="/tex/6bc8dd904b3f43c61d7dae11a0ecd096.svg?invert_in_darkmode&sanitize=true" align=middle width=87.57564584999999pt height=39.2944695pt/>

### 1.4 Discontuinuity points

The particular function has no discontinuity points on the given interval. However on the global scale the function is not defined when <img src="/tex/54aa405bd509ba974b9912ef85f7f7c1.svg?invert_in_darkmode&sanitize=true" align=middle width=68.3299122pt height=32.44583099999998pt/>.

### 1.5 Final system

These equations were implemented in the code:

<img src="/tex/09d4932f7369d1deaee7ee2c317fea91.svg?invert_in_darkmode&sanitize=true" align=middle width=130.3364073pt height=136.4396616pt/>

## 2. Function analysis

With our initial condition <img src="/tex/50c771ad858feeeadea0a10db6617d47.svg?invert_in_darkmode&sanitize=true" align=middle width=78.50759894999999pt height=39.2879487pt/> exact solution yeidls value in the range of <img src="/tex/979e93d6904179d190cff3f7e316f743.svg?invert_in_darkmode&sanitize=true" align=middle width=70.31981219999999pt height=24.65753399999998pt/> (rounding results to 3 decimals). It can be observed how <img src="/tex/4530a6b20824de0f6fbe187fdbcfd23f.svg?invert_in_darkmode&sanitize=true" align=middle width=43.06147724999999pt height=22.465723500000017pt/> was correctly computed as well.

<img src="./images/functions.png" height="300" width="500">

If number of grid steps for approximations is decreased (N=5) behaviour of the methods can be seen more clearly. There at the point <img src="/tex/7a2f1341305d9cff71a0782f7321e1d0.svg?invert_in_darkmode&sanitize=true" align=middle width=52.317261149999986pt height=21.18721440000001pt/> all of the methods (that are *Runge-Kutta* 4th order, *Euler improved* and *Euler*) achieve particularly good approximation, before diverging right after.

<img src="./images/functionsSmallN.png" height="300" width="500">

Same result can be obtained on the dedicated *Local errors* chart:

<img src="./images/localErrors.png" height="300" width="500">

And appearance of *Global errors* chart renders to be correct as they diminish while we increase the steps number:

<img src="./images/globalErrors.png" height="300" width="500">

## 3. Implementation

The application was developed as a web page with JavaScript implemented logic. All the scripts can be divided into 3 cathergories:

- managers
  - conroller
  - initializer
- math classes
  - appromixations
  - equations
- graph classes
  - approximate
  - exact

Most importantly, an attempt was made to generalizing framework both *equations* and *approximations* so that adding any new variant of them would be easy and their number could scale without arising the need for modifying the framework itself.

### 3.1 Managers

**Initializer.js** module provides setup functoinality by assigning callbacks to UI input fields changes that will trigger mathematical computations. It also references objects needed for drawing and assigns common chart options.

**Controller.js** module accepts 5 input numbers (x0, y0, X, N0, N) and then passes them into exported exact solution and approxmaions. After all the computations are finished it draws graphs using resulting arrays of values. Also displays the constant value found by the initial condions.

### 3.2 Math classes

All of math classes divide into 2 cathegories.

**Approximations** provide singe method that accepts a point [x, y], grid step [h] and derivative function [y'(x,y)] and then utilizing its defined algorithm return approximated numerical value.

**Equations** can implement any particular variant from the practicum by providing 3 discting functions: *derivative(x,y)*, *constant(x0,y0)*, *function(x, x0 ,y0)*. These functions later utilized in *exact* graphs. The *derivate* function also passed into *approxmate* graphs.

### 3.3 Graph classes

These classes as well divide into 2 cathegories to wrap around the corresponding math classes.

Each graph contains *styling* object, *values* numerical array, and utility 3 functions:

- **round** rounds array of numbers
- **createDataset** that wraps styling around array of numbers to be plugged into chart object for drawing.
- **calculateInputs** returns array of x-values that later are used as inputs for *approximate* and *exact* graphs.

In addition to these, each graph type has its distinct features:

**Approximate** graph wraps around *approximation* math class. As such, it can store on instance of particular *approximation* that later will be used for updating its approximation *values*, *localErrors* and *globalErrors* in its corresponding methods.

**Exact** graph wraps around *exact* math class. Therefore it contains variable for storing such class instance. This instance's methods are later used for computing particular solution through finding constant by initial conditions, as well as the whole set of exact values of the function on the given set.

### 3.4 UML diagram

The systems described above can be inspected in the following UML diagram of high-level class overview (private members are hidden).

<img src="./images/umlDiagram.png" height="900" width="450">
