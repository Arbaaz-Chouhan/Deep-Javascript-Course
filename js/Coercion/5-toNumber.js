// toNumber ==>
let a = Number("");
console.log(a);  // 0

let b = Number("0");
console.log(b);   // 0

let c = Number("-0");
console.log(c);  // -0

let d = Number("3.14159");
console.log(d);  // 3.14159

let e = Number("0.");
console.log(e);  // 0

let f = Number(".0");
console.log(f); // 0

let h = Number(".");
console.log(h);  // NaN

let i = Number("0xaf");
console.log(i);  // 175

let j = Number(false);
console.log((j));  // 0

let k = Number(true);
console.log(k);  // 1

let l = Number(null);
console.log(l);  // 0

let m = Number(undefined);
console.log(m);  // NaN;

let n = Number([""]);
console.log(n);  // 0

let o = Number(["0"]);
console.log(o);  // 0

let p = Number(["-0"]);
console.log(p);  // -0

let q = Number([null]);
console.log(q);  // 0

let r = Number([undefined]);
console.log(r);  // 0

let t = Number([1, 2, 3]);
console.log(t); // NaN

let u = Number([[[0]]]);
console.log(u);   // 0 