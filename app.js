const rect = require('./rectangle')

function solveReact(l, w) {
    console.log(`Solving for reactangle with dimensions: ${l}, ${w}`);

    if (l <= 0 || w <= 0) {
      console.log(
        `Rectangle dimensions must be greater than zero. Received: ${l}, ${w}`
      );
    } else {
      console.log(`Area of rectangle: ${rect.area(l, w)}`);
      console.log(`Perimeter of rectangle: ${rect.perimeter(l, w)}`);
    }
};


solveReact(2, 4);
solveReact(3, 5);
solveReact(0, 5);
solveReact(5, -3);