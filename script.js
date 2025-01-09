// Parallax effect on the entry page elements (tree, mountain, cloud)
document.addEventListener('mousemove', (event) => {
  const elements = document.querySelectorAll('.element');
  elements.forEach((el) => {
    const speed = parseInt(el.getAttribute('data-speed') || 2);
    const x = (window.innerWidth - event.pageX * speed) / 100;
    const y = (window.innerHeight - event.pageY * speed) / 100;
    el.style.transform = `translate(${x}px, ${y}px)`;
  });
});

// Fade from Entry => Universe
document.getElementById('entryButton').addEventListener('click', function () {
  const entryLayer = document.getElementById('entryLayer');
  const universeLayer = document.getElementById('universeLayer');

  universeLayer.style.opacity = '1';

  entryLayer.style.opacity = '0';

  setTimeout(function () {
    entryLayer.style.display = 'none';
  }, 1000);
});


document.getElementById('scrollArrow').addEventListener('click', function () {
  const universeLayer = document.getElementById('universeLayer');
  const forestLayer = document.getElementById('forestLayer');

  universeLayer.style.transform = 'translateY(-100%)';
  universeLayer.style.opacity = '0';

  forestLayer.style.display = 'block';
  forestLayer.offsetHeight; // Force reflow
  forestLayer.style.transform = 'translateY(0)';
  forestLayer.style.opacity = '1';

  setTimeout(() => {
    universeLayer.style.display = 'none';
  }, 2000);
});


document.getElementById('forestScrollArrow').addEventListener('click', function () {
  const forestLayer = document.getElementById('forestLayer');
  const oceanLayer = document.getElementById('ocean');

  forestLayer.style.transform = 'rotateX(90deg)';
  forestLayer.style.opacity = '0';

  oceanLayer.style.display = 'block';
  oceanLayer.offsetHeight; 
  oceanLayer.style.transform = 'perspective(1000px) rotateX(0deg)';
  oceanLayer.style.opacity = '1';

  setTimeout(function () {
    forestLayer.style.display = 'none';
  }, 2000);
});

//   DRAG-AND-DROP EAGLE
const eagle = document.getElementById('eagleImage');
let isDragging = false;
let offsetX, offsetY;

eagle.addEventListener('mousedown', (e) => {
  isDragging = true;
  offsetX = e.clientX - eagle.getBoundingClientRect().left;
  offsetY = e.clientY - eagle.getBoundingClientRect().top;
  eagle.style.cursor = 'grabbing'; 
});

document.addEventListener('mousemove', (e) => {
  if (isDragging) {
    const newX = e.clientX - offsetX;
    const newY = e.clientY - offsetY;
    eagle.style.left = `${newX}px`;
    eagle.style.top = `${newY}px`;
  }
});

document.addEventListener('mouseup', () => {
  if (isDragging) {
    isDragging = false;
    eagle.style.cursor = 'grab';
  }
});

//   FOREST ANIMALS (Bear, Snake, Monkey)
// Bear: Stop animation on hover
const bear = document.getElementById('bearImage');
bear.addEventListener('mouseenter', () => {
  bear.style.animationPlayState = 'paused';
});
bear.addEventListener('mouseleave', () => {
  bear.style.animationPlayState = 'running';
});

// Snake: Jump up and down on click
const snake = document.getElementById('snakeImage');
snake.addEventListener('click', () => {
  snake.style.transition = 'transform 0.5s ease';
  snake.style.transform = 'translateY(-50vh)'; // jumps to half screen
  setTimeout(() => {
    snake.style.transform = 'translateY(0)';
  }, 500);
});

// Monkey: Jumps to random position on click
const monkey = document.getElementById('monkeyImage');
monkey.addEventListener('click', () => {
  const randomX = Math.random() * (window.innerWidth - monkey.offsetWidth);
  const randomY = Math.random() * (window.innerHeight - monkey.offsetHeight);
  monkey.style.transition = 'transform 0.5s ease';
  monkey.style.transform = `translate(${randomX}px, ${randomY}px)`;
});
