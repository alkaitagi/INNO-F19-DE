# DE Computational practicum

- [DE Computational practicum](#de-computational-practicum)
  - [1. Analytical soltuion](#1-analytical-soltuion)
    - [1.1 Initial system](#11-initial-system)
    - [1.2 General solution](#12-general-solution)
    - [1.3 Initial value problem](#13-initial-value-problem)
    - [1.4 Discontuinuity points](#14-discontuinuity-points)
    - [1.5 Final system](#15-final-system)
  - [2. Function analysis](#2-function-analysis)

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

With our initial condition $y(0)=\sqrt\frac{1}{2}$ exact solution yeidls value in the range of $[0.7071, 3]$ (rounding to 4 decimals). It can be observed how $C=1$ was correctly computed as well.

<img src="./images/functions.png" height="250" width="400">

If number of grid steps for approximations is decreased (N=5) behaviour of the methods can be seen more clearly. There at the point $x \approx 1.5$ all of the methods (that are *Runge-Kutta* 4th order, *Euler improved* and *Euler*) achieve particularly good approximation.

<img src="./images/functionsSmallN.png" height="250" width="400">
