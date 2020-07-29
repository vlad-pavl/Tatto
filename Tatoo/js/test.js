function getRandomNumber(min, max) {
   return Math.floor(Math.random() * (max - min)) + min;
}
// Home work-1
// 1
function swapVariables() {
   let a = 1;
   let b = 3;

   a = a + b;
   b = a - b;
   a = a - b;

   console.log(a, b);
}

swapVariables();

// 2
function calcLength() {
   let a = prompt('Введите длину первого катета') * 1;
   let b = prompt('Введите длину второго катета') * 1;
   let c = (a * a) + (b * b);

   console.log(Math.sqrt(c));
}

calcLength();

// 3
function getEquation() {
   let x1 = prompt('Введите точку х1') * 1;
   let y1 = prompt('Введите точку y1') * 1;
   let x2 = prompt('Введите точку х2') * 1;
   let y2 = prompt('Введите точку y2') * 1;
   let k = (y1 - y2) / (x1 - x2);
   let b = y2 - k * x2;

   console.log('y = ', k, 'x + ', b);
}

getEquation();

// 4
function calcExpression() {
   let a = getRandomNumber(-10, 10);
   let b = getRandomNumber(-10, 10);
   let c = getRandomNumber(-10, 10);
   let e = (max(a * b * c, a + b + c) + 3);
   console.log(e);
}

// 5
function checkComparison() {
   let a = getRandomNumber(-100, 100);
   let b = getRandomNumber(-100, 100);
   let c = a / b;
   let e = a % b;

   if (a / b >= 0) {
      alert("a делится на b, " + "частное: " + (c) + ", остаток: " + (e));
   } else {
      alert("a не делится на b");
   }
}

checkComparison();

// 6
function determineQuarter() {
   let x = getRandomNumber(-10, 10);
   let y = getRandomNumber(-10, 10);

   if (x > 0 && y > 0) {
      alert("Точка принадлежит первой четверти");
   } else if (x < 0 && y > 0) {
      alert("Точка принадлежит второй четверти");
   } else if (x < 0 && y < 0 ) {
      alert("Точка принадлежит третьей четверти");
   } else if (x > 0 && y < 0) {
      alert("Точка принадлежит третьей четверти");
   } else {
      alert("Центр координат, или одна из осей");
   }
}

determineQuarter();

// 7
function determinePoint() {
   let x = getRandomNumber(-15, 15);
   let y = getRandomNumber(-15, 15);
   let r = getRandomNumber(-10, 10);
   let h = Math.sqrt(x * x + y * y);

   if (h > r) {
      console.log("Точка находится за пределами круга");
   } else {
      console.log("Точка находится в пределах круга");
   }
}

determinePoint();

// 8
function calcSquareRoots() {
   let a = getRandomNumber(-100, 100);
   let b = getRandomNumber(-100, 100);
   let c = 10;
   const d = b * b - 4 * a * c;

   if (a === 0) {
      return;
   }

   if (d < 0) {
      console.log("Корней нет");
   } else if (d === 0) {
      console.log(`Корень уравнения: ${-b / (2 * a)}`);
   } else {
      const sqrtD = Math.sqrt(d);
      console.log(`Первый корень уравнения: ${(-b - sqrtD) / (2 * a)}`);
      console.log(`Второй корень уравнения: ${(-b + sqrtD) / (2 * a)}`);
   }
}

calcSquareRoots();


// Home Work-2
// 1
function factorial() {
   let fact = Math.floor(Math.random() * 15);
   let result = 1;
   let i = 1;

   while (i <= fact) {
      result = result * i;
      i++;
   }
   console.log(result);
}

factorial();

// 2
function outputValues() {
   let x1 = prompt("Введите минимальное значение х") * 1;
   let x2 = prompt("Введите максимальное значение х") * 1;
   let up = prompt("Введите шаг") * 1;

   while (x1 <= x2) {
      y = - 0.23 * x1 * x1 + x1;
      console.log(x1, "->", y);
      x1 = x1 + up;
   }
}

outputValues();

// 3
function sumMultipliNumber() {
   let n = getRandomNumber(10000, 100000000);
   let sum = 0;
   let mult = 1;

   while (n > 0) {
      sum += n % 10;
      mult *= n % 10;
      n = n / 10;
      console.log("Сумма:", sum, "Произведение:", mult);
   }
}

sumMultipliNumber();

// 4
function proveFidelity() {
   let n = 10;
   let s = 0;

   for (let i = 1; i <= n; i++) {
      s += i;
      m = n * (n + 1) / 2;
   }
   console.log(s, m);
}

proveFidelity();

// 5

// 6

// 7
function arrayReverse() {
   let arr = ['a', 'b', 'c'];

   arr.reverse();
   console.log(arr);
}

arrayReverse();

// 8
function arrayChange() {
   let arr = [1, 2, 3, 4];

   [arr[0], arr[2]]  = [arr[2], arr[0]];
   [arr[1], arr[3]] = [arr[3], arr[1]];

   console.log(arr);
}

arrayChange();




