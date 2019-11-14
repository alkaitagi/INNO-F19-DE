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

$
\begin{cases}
    y'=xy-xy^3 \\\\
    y(0)=\sqrt\frac{1}{2} \\\\
    x\in(0,3)
\end{cases}
$

### 1.2 General solution

$y'=xy-xy^3$

using variable separation:

$y'=x(y-y^3)$

$\int\frac{dy}{dx}=\int xy(1-y^2)$

$\int\frac{dy}{y(1-y^2)}=\int xdx$

using partial fraction decomposition:

$\int\frac{dy}{y}-\frac{1}{2}\int\frac{dy}{1+y}+\frac{1}{2}\int\frac{dy}{1-y}=\int xdx$

$\ln|\frac{y}{\sqrt{1-y^2}}|=\frac{x^2}{2}+C$

$\frac{y}{\sqrt{1-y^2}}=e^{\frac{x^2}{2}+C}$

squaring both side:

$\frac{y^2}{1-y^2}=e^{x^2+2C}$

$y^2=(1-y^2)e^{x^2+2C}$

$y^2=\frac{2Ce^{x^2}}{1+2Ce^{x^2}}$

substiute $C_1=\frac{1}{e^{2C}}$:

$y^2=\frac{e^{x^2}}{C_1+e^{x^2}}$

$y=\plusmn\sqrt{\frac{e^{x^2}}{C_1+e^{x^2}}}$

### 1.3 Initial value problem

$y(0)=\sqrt{\frac{1}{2}}$

substituting:

$\frac{1}{2}=\frac{e^0}{C+e^0}$

$C + 1 = 2$

$C = 1$

and we can obtain general formula for $C$:

$C = e^{x_0^2}(\frac{1}{y_0^2} - 1)$

since $y_0$ is positive, we pick $+$ sign and partucilar soltuion is:

$y=\sqrt{\frac{e^{x^2}}{1+e^{x^2}}}$

### 1.4 Discontuinuity points

The particular function has no discontinuity points on the given interval. However on the global scale the function is not defined when $C\leq-e^{x^2}$.

### 1.5 Final system

These equations were implemented in the code:

$
\begin{cases}
    y'=xy-xy^3 \\\\
    C = e^{x_0^2}(\frac{1}{y_0^2} - 1) \\\\
    y=\sqrt{\frac{e^{x^2}}{C+e^{x^2}}}
\end{cases}
$

## 2. Function analysis

With our initial condition $y(0)=\sqrt\frac{1}{2}$ exact solution yeidls value in the range of $[0.7071, 3]$ (rounding results to 3 decimals). It can be observed how $C=1$ was correctly computed as well.

<img src="./images/functions.png" height="300" width="500">

If number of grid steps for approximations is decreased (N=5) behaviour of the methods can be seen more clearly. There at the point $x \approx 1.5$ all of the methods (that are *Runge-Kutta* 4th order, *Euler improved* and *Euler*) achieve particularly good approximation, before diverging right after.

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
