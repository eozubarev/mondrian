var canvas = document.getElementById ('myCanvas' );
var context = canvas.getContext ('2d' );

// ширина рамки
context.lineWidth = 20;

// левый верхний угол: первый белый прямоугольник
context.strokeRect(0, 0, 100, 150);
// левый верхний угол: второй белый прямоугольник
context.strokeRect(0, 150, 100, 150);

// синий квадрат
context.fillStyle = "#035D9D";
context.fillRect(0, 300, 100, 100);

// красный квадрат
context.fillStyle = "#E22C29";
context.fillRect(100, 0, 300, 300);

// правый нижний белый квадратик
context.strokeRect(350, 300, 50, 50);

// правый нижний желтый квадратик
context.fillStyle = "#EFD869";
context.fillRect(350, 350, 50, 50);
context.strokeRect(350, 350, 50, 50);

// нижний белый широкий прямоугольник
context.fillStyle = "#FFF";
context.strokeRect(100, 300, 250, 100);
context.fillRect(100, 300, 250, 100);

// внешняя рамка
context.strokeRect(0, 0, 400, 400);