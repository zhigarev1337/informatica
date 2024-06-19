// Инициализация сцены
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('background-animation').appendChild(renderer.domElement);

// Добавление источника света
const ambientLight = new THREE.AmbientLight(0x404040);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
scene.add(directionalLight);

// Массив для фигур
const figures = [];
const figureColors = [0x444444, 0x888888, 0xaaaaaa];

// Функция для создания случайных фигур, движущихся вперед
function createRandomFigure() {
    const geometry = new THREE.BoxGeometry(Math.random() * 0.5, Math.random() * 0.5, Math.random() * 0.5);
    const material = new THREE.MeshPhongMaterial({ color: figureColors[Math.floor(Math.random() * figureColors.length)], transparent: true });
    const figure = new THREE.Mesh(geometry, material);
    figure.position.set(Math.random() * 20 - 10, Math.random() * 20 - 10, Math.random() * -20 - 5);
    figure.userData = { speed: Math.random() * 0.05 + 0.01, opacity: Math.random() };
    scene.add(figure);
    figures.push(figure);
}

// Создание случайных фигур
for (let i = 0; i < 100; i++) {
    createRandomFigure();
}

// Позиционирование камеры
camera.position.z = 5;

// Анимация
function animate() {
    requestAnimationFrame(animate);

    figures.forEach(figure => {
        figure.position.z += figure.userData.speed;
        figure.material.opacity = figure.userData.opacity;
        figure.userData.opacity -= 0.001;

        if (figure.position.z > camera.position.z || figure.userData.opacity <= 0) {
            figure.position.set(Math.random() * 20 - 10, Math.random() * 20 - 10, Math.random() * -20 - 5);
            figure.userData.opacity = Math.random();
            figure.material.opacity = figure.userData.opacity;
        }
    });

    renderer.render(scene, camera);
}

animate();

// Обработка изменения размера окна
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});
