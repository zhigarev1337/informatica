// Карусель новостей
document.addEventListener('DOMContentLoaded', function() {
    let currentIndex = 0;
    const items = document.querySelectorAll('.carousel-item');
    const indicators = document.querySelectorAll('.carousel-indicator');
    const totalItems = items.length;
    let interval = null; // Инициализируем переменную интервала как null

    function updateCarousel() {
        items.forEach((item, index) => {
            item.classList.remove('active');
            indicators[index] && indicators[index].classList.remove('active');
        });
        items[currentIndex].classList.add('active');
        indicators[currentIndex] && indicators[currentIndex].classList.add('active');
    }

    function startInterval() {
        clearInterval(interval); // Очищаем существующий интервал перед созданием нового
        interval = setInterval(nextSlide, 5000); // Устанавливаем новый интервал
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalItems;
        updateCarousel();
    }

    // Назначаем обработчики событий для индикаторов
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            currentIndex = index;
            updateCarousel();
            startInterval(); // Перезапускаем интервал после ручного переключения
        });
    });

    // Опционально: Пауза и возобновление интервала при уходе/возвращении пользователя на вкладку
    document.addEventListener('visibilitychange', function() {
        if (document.visibilityState === 'visible') {
            startInterval(); // Возобновляем интервал
        } else {
            clearInterval(interval); // Останавливаем интервал
        }
    });

    startInterval(); // Начинаем автоматическое переключение при загрузке страницы
});


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

// Массив для сфер
const spheres = [];
const sphereColors = [0xFFC0CB, 0xFFB6C1, 0xFF69B4]; // Разные оттенки розового

// Функция для создания случайных сфер, движущихся вперед
function createRandomSphere() {
    const geometry = new THREE.SphereGeometry(0.2, 32, 32);
    const material = new THREE.MeshBasicMaterial({ color: sphereColors[Math.floor(Math.random() * sphereColors.length)], transparent: true });
    const sphere = new THREE.Mesh(geometry, material);
    sphere.position.set(Math.random() * 20 - 10, Math.random() * 20 - 10, Math.random() * 20 - 30);
    sphere.userData = { speed: Math.random() * 0.05 + 0.01, opacity: Math.random() };
    scene.add(sphere);
    spheres.push(sphere);
}

// Создание случайных сфер
for (let i = 0; i < 100; i++) {
    createRandomSphere();
}

// Позиционирование камеры
camera.position.z = 5;

// Анимация
function animate() {
    requestAnimationFrame(animate);

    spheres.forEach(sphere => {
        sphere.position.z += sphere.userData.speed;
        sphere.userData.opacity -= 0.001;
        sphere.material.opacity = sphere.userData.opacity;

        if (sphere.position.z > camera.position.z || sphere.userData.opacity <= 0) {
            sphere.position.set(Math.random() * 20 - 10, Math.random() * 20 - 10, Math.random() * 20 - 30);
            sphere.userData.opacity = Math.random();
            sphere.material.opacity = sphere.userData.opacity;
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
