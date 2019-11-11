# DE Computational practicum

## General solution

$y'=xy-xy^3$

using variable separation:

$y'=x(y-y^3)$

$\int\frac{dy}{dx}=\int xy(1-y^2)$

$\int\frac{dy}{y(1-y^2)}=\int xdx$

using partial fraction decomposition:

$\int\frac{dy}{y}-\frac{1}{2}\int\frac{dy}{1+y}+\frac{1}{2}\int\frac{dy}{1-y}=\int xdx$

$\ln|\frac{y}{\sqrt{1-y^2}}|=\frac{x^2}{2}+\hat{C}$

$\frac{y}{\sqrt{1-y^2}}=e^{\frac{x^2}{2}+\hat{C}}$

squaring both side:

$\frac{y^2}{1-y^2}=e^{x^2+C}$

$y^2=(1-y^2)e^{x^2+C}$

$y^2=\frac{e^{x^2+C}}{1+e^{x^2+C}}$

$y=\plusmn\sqrt{\frac{e^{x^2+C}}{1+e^{x^2+C}}}$

## Initial value problem

$y(0)=\sqrt{\frac{1}{2}}$

substituting:

$\frac{1}{2}=\frac{e^C}{1+e^C}$

$1+e^C=2e^C$

$C = 0$

## Particular solution

since $y_0$ is positive, we pick $+$ sign:

$y=\sqrt{\frac{e^{x^2}}{1+e^{x^2}}}$

## Discontuinuity points

There are no discontinuity points. However, if $y_0 = 0, -1, 1$ there are 
