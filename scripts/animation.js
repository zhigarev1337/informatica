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

// Массив для линий
const lines = [];
const lineColors = [0x444444, 0x888888, 0xaaaaaa];

// Функция для создания случайных линий, движущихся вперед
function createRandomLine() {
    const material = new THREE.LineBasicMaterial({ color: lineColors[Math.floor(Math.random() * lineColors.length)], transparent: true });
    const geometry = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(Math.random() * 20 - 10, Math.random() * 20 - 10, Math.random() * 20 - 30),
        new THREE.Vector3(Math.random() * 20 - 10, Math.random() * 20 - 10, Math.random() * 20 - 30)
    ]);
    const line = new THREE.Line(geometry, material);
    line.userData = { speed: Math.random() * 0.05 + 0.01, opacity: Math.random() };
    scene.add(line);
    lines.push(line);
}

// Создание случайных линий
for (let i = 0; i < 100; i++) {
    createRandomLine();
}

// Позиционирование камеры
camera.position.z = 5;

// Анимация
function animate() {
    requestAnimationFrame(animate);

    lines.forEach(line => {
        line.geometry.attributes.position.array[2] += line.userData.speed;
        line.geometry.attributes.position.array[5] += line.userData.speed;
        line.geometry.attributes.position.needsUpdate = true;
        line.userData.opacity -= 0.001;
        line.material.opacity = line.userData.opacity;

        if (line.geometry.attributes.position.array[2] > camera.position.z || line.userData.opacity <= 0) {
            line.geometry.attributes.position.array[0] = Math.random() * 20 - 10;
            line.geometry.attributes.position.array[1] = Math.random() * 20 - 10;
            line.geometry.attributes.position.array[2] = Math.random() * 20 - 30;
            line.geometry.attributes.position.array[3] = Math.random() * 20 - 10;
            line.geometry.attributes.position.array[4] = Math.random() * 20 - 10;
            line.geometry.attributes.position.array[5] = Math.random() * 20 - 30;
            line.userData.opacity = Math.random();
            line.material.opacity = line.userData.opacity;
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
