# DE Computational practicum

- [DE Computational practicum](#de-computational-practicum)
  - [1. Analytical soltuion](#1-analytical-soltuion)
    - [1.1 General solution**](#11-general-solution)
    - [1.2 Initial value problem](#12-initial-value-problem)
    - [1.3 Discontuinuity points](#13-discontuinuity-points)

## 1. Analytical soltuion

$
\begin{cases}
    y'=xy-xy^3 \\
    y(0)=\sqrt\frac{1}{2} \\
    x\in(0,3)
\end{cases}
$

### 1.1 General solution**

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

### 1.2 Initial value problem

$y(0)=\sqrt{\frac{1}{2}}$

substituting:

$\frac{1}{2}=\frac{e^0}{C+e^0}$

$C + 1 = 2$

$C = 1$

and we can obtain general formula for $C$:

$C = e^{x_0^2}(\frac{1}{y_0^2} - 1)$

since $y_0$ is positive, we pick $+$ sign and partucilar soltuion is:

$y=\sqrt{\frac{e^{x^2}}{1+e^{x^2}}}$

### 1.3 Discontuinuity points

The particular function does not have any discontinuity points.
