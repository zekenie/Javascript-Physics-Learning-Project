pi=Math.PI;
e=Math.E;
abs=Math.abs;
pow=Math.pow;
exp=Math.exp;
sqrt=Math.sqrt;
ln=Math.log;
sin=Math.sin;
cos=Math.cos;
tan=Math.tan;
arsin=Math.asin;
arccos=Math.acos;
arctan=Math.atan;
floor=Math.floor;
ceil=Math.ceil;
function sq(x) {return pow(x,2)}
function csc(x) {return 1/sin(x)}
function sec(x) {return 1/cos(x)}
function cot(x) {return 1/tan(x)}
function arccsc(x) {return arcsin(1/x)}
function arcsec(x) {return arccos(1/x)}
function arccot(x) {return arctan(1/x)}
function sinh(x) {return (exp(x)-exp(-x))/2}
function cosh(x) {return (exp(x)+exp(-x))/2}
function tanh(x) {return sinh(x)/cosh(x)}
function csch(x) {return 1/sinh(x)}
function sech(x) {return 1/cosh(x)}
function coth(x) {return 1/tanh(x)}
function arcsinh(x) {return ln(x+sqrt(x*x+1))}
function arccosh(x) {if(x>=1) return ln(x+sqrt(x*x-1))}
function arctanh(x) {if(x>1) return ln((1+x)/(1-x))/2}
function arccsch(x) {return arcsinh(1/x)}
function arcsech(x) {return arccosh(1/x)}
function arccoth(x) {return arctanh(1/x)}

function toRad(deg) {	return deg * Math.PI/180;	}