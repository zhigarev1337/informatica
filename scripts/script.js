document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            const isOpen = answer.classList.contains('active');

            // Сначала закрываем все ответы
            document.querySelectorAll('.faq-answer').forEach(el => {
                el.style.height = '0px'; // Сбрасываем высоту, чтобы анимировать закрытие
                el.classList.remove('active');
            });
            document.querySelectorAll('.faq-question').forEach(el => {
                el.classList.remove('active');
            });

            // Если выбранный ответ был закрыт, открываем его
            if (!isOpen) {
                answer.classList.add('active');
                this.classList.add('active');

                // Расчет и установка высоты для анимации
                const answerHeight = answer.scrollHeight + "px";
                answer.style.height = answerHeight;
            } else {
                // Необязательно, если вы хотите закрыть ответ при повторном клике
                answer.style.height = "0px";
            }
        });
    });

    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();
        
        var formData = new FormData(this);

        fetch('submit_form.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.status === 'success') {
                document.getElementById('successMessage').classList.remove('hidden');
            } else {
                console.error('Ошибка отправки сообщения: ' + data.message);
                alert('Ошибка отправки сообщения: ' + data.message);
            }
        })
        .catch(error => console.error('Ошибка:', error));
    });

    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Предотвращаем отправку формы

        // Очищаем форму
        document.getElementById('contactForm').reset();

        // Показываем сообщение
        var successMessage = document.getElementById('successMessage');
        successMessage.classList.remove('hidden');

        // Скрываем сообщение через 3 секунды
        setTimeout(function() {
            successMessage.classList.add('hidden');
        }, 3000);
    });

    // Инициализация сцены
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('background-canvas').appendChild(renderer.domElement);

    // Добавление источника света
    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    scene.add(directionalLight);

    // Массивы для элементов
    const elements = [];
    const lines = [];
    const colors = [0x444444, 0x888888, 0xaaaaaa];

    // Функция для создания кубов
    function createCube() {
        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshBasicMaterial({
            color: colors[Math.floor(Math.random() * colors.length)],
            wireframe: true,
            transparent: true,
            opacity: Math.random()
        });
        const cube = new THREE.Mesh(geometry, material);
        cube.position.x = Math.random() * 20 - 10;
        cube.position.y = Math.random() * 20 - 10;
        cube.position.z = Math.random() * 20 - 30;
        cube.userData = { speed: Math.random() * 0.05 + 0.01, opacity: Math.random() };
        scene.add(cube);
        elements.push(cube);
    }

    // Функция для создания менее детализированных сфер
    function createSphere() {
        const geometry = new THREE.SphereGeometry(0.5, 8, 8); // Уменьшение сегментов сферы
        const material = new THREE.MeshBasicMaterial({
            color: colors[Math.floor(Math.random() * colors.length)],
            wireframe: true,
            transparent: true,
            opacity: Math.random()
        });
        const sphere = new THREE.Mesh(geometry, material);
        sphere.position.x = Math.random() * 20 - 10;
        sphere.position.y = Math.random() * 20 - 10;
        sphere.position.z = Math.random() * 20 - 30;
        sphere.userData = { speed: Math.random() * 0.05 + 0.01, opacity: Math.random() };
        scene.add(sphere);
        elements.push(sphere);
    }

    // Функция для создания объемных треугольников (тетраэдров)
    function createTetrahedron() {
        const geometry = new THREE.TetrahedronGeometry(0.5);
        const material = new THREE.MeshBasicMaterial({
            color: colors[Math.floor(Math.random() * colors.length)],
            wireframe: true,
            transparent: true,
            opacity: Math.random()
        });
        const tetrahedron = new THREE.Mesh(geometry, material);
        tetrahedron.position.x = Math.random() * 20 - 10;
        tetrahedron.position.y = Math.random() * 20 - 10;
        tetrahedron.position.z = Math.random() * 20 - 30;
        tetrahedron.userData = { speed: Math.random() * 0.05 + 0.01, opacity: Math.random() };
        scene.add(tetrahedron);
        elements.push(tetrahedron);
    }

    // Функция для создания линий между случайными элементами
    function createLine(element1, element2) {
        const material = new THREE.LineBasicMaterial({ color: 0x444444, transparent: true });
        const geometry = new THREE.BufferGeometry().setFromPoints([element1.position, element2.position]);
        const line = new THREE.Line(geometry, material);
        line.userData = { element1, element2 };
        scene.add(line);
        lines.push(line);
    }

    // Функция для создания случайных линий, движущихся вперед
    function createRandomLine() {
        const material = new THREE.LineBasicMaterial({ color: 0x888888, transparent: true });
        const geometry = new THREE.BufferGeometry().setFromPoints([
            new THREE.Vector3(Math.random() * 20 - 10, Math.random() * 20 - 10, Math.random() * 20 - 30),
            new THREE.Vector3(Math.random() * 20 - 10, Math.random() * 20 - 10, Math.random() * 20 - 30)
        ]);
        const line = new THREE.Line(geometry, material);
        line.userData = { speed: Math.random() * 0.05 + 0.01, opacity: Math.random() };
        scene.add(line);
        lines.push(line);
    }

    // Инициализация элементов
    for (let i = 0; i < 50; i++) {
        createCube();
        createSphere();
        createTetrahedron();
    }

    // Создание линий между случайными элементами
    for (let i = 0; i < 50; i++) {
        const element1 = elements[Math.floor(Math.random() * elements.length)];
        const element2 = elements[Math.floor(Math.random() * elements.length)];
        createLine(element1, element2);
    }

    // Создание случайных линий, движущихся вперед
    for (let i = 0; i < 50; i++) {
        createRandomLine();
    }

    // Позиционирование камеры
    camera.position.z = 5;

    // Анимация
    function animate() {
        requestAnimationFrame(animate);

        elements.forEach(element => {
            if (element.isMesh) {
                element.position.z += element.userData.speed;
                element.userData.opacity -= 0.001;
                element.material.opacity = element.userData.opacity;

                if (element.position.z > camera.position.z || element.userData.opacity <= 0) {
                    element.position.x = Math.random() * 20 - 10;
                    element.position.y = Math.random() * 20 - 10;
                    element.position.z = Math.random() * 20 - 30;
                    element.userData.opacity = Math.random();
                    element.material.opacity = element.userData.opacity;
                }
            }
        });

        lines.forEach(line => {
            if (line.userData.element1 && line.userData.element2) {
                const { element1, element2 } = line.userData;
                line.geometry.setFromPoints([element1.position, element2.position]);
                line.material.opacity = (element1.userData.opacity + element2.userData.opacity) / 2;
            } else {
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
});
