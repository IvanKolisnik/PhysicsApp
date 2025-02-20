function selectFormula() {
    const selectedFormula = document.getElementById('formulaSelect').value;
    console.log("Вибрана формула:", selectedFormula);

    const velocityForm = document.getElementById('velocityForm');
    const newtonForm = document.getElementById('newtonForm');
    const kineticEnergyForm = document.getElementById('kineticEnergyForm');
    const momentOfForceForm = document.getElementById('momentOfForceForm');
    const resultMessage = document.getElementById('resultMessage');


    if (velocityForm) velocityForm.style.display = 'none';
    if (newtonForm) newtonForm.style.display = 'none';
    if (kineticEnergyForm) kineticEnergyForm.style.display = 'none';
    if (momentOfForceForm) momentOfForceForm.style.display = 'none';
    if (resultMessage) resultMessage.style.display = 'none';

    // Вибір формули
    if (selectedFormula.includes("F = ma") && newtonForm) {
        newtonForm.style.display = 'block';
    } else if (selectedFormula.includes("v = Δx / Δt") && velocityForm) {
        velocityForm.style.display = 'block';
    } else if (selectedFormula.includes("E_k = 1/2 * m * v^2") && kineticEnergyForm) {
        kineticEnergyForm.style.display = 'block';
    } else if (selectedFormula === "M = F * d" && momentOfForceForm) {
        momentOfForceForm.style.display = 'block';
    }
}

// Функція для обчислення сили за формулою F = ma
function calculateForce() {
    const m = parseFloat(document.getElementById('m').value);
    const a = parseFloat(document.getElementById('a').value);

    if (isNaN(m) || isNaN(a) || m <= 0 || a <= 0) {
        alert('Будь ласка, введіть коректні значення для маси та прискорення!');
        return;
    }

    const force = m * a;

    document.getElementById('resultText').innerText = `Сила: ${force} Н`;
    document.getElementById('resultMessage').style.display = 'block';
}

function clearFields1() {
    document.getElementById('m').value = ''; // Очистка маси
    document.getElementById('a').value = ''; // Очистка прискорення
    document.getElementById('resultMessage').style.display = 'none'; // Приховати результат
}

// Функція для обчислення швидкості за формулою v = Δx / Δt
function calculateVelocity() {
    const deltaX = parseFloat(document.getElementById('deltaX').value);
    const deltaT = parseFloat(document.getElementById('deltaT').value);

    // Перевірка на валідність введених даних
    if (isNaN(deltaX) || isNaN(deltaT) || deltaX <= 0 || deltaT <= 0) {
        alert('Будь ласка, введіть коректні значення для зміщення та часу!');
        return;
    }

    // Обчислення швидкості
    const velocity = deltaX / deltaT;

    // Виведення результату
    document.getElementById('resultText').innerText = `Швидкість: ${velocity} м/с`;
    document.getElementById('resultMessage').style.display = 'block';
}

function clearFields2() {
    document.getElementById('deltaX').value = ''; 
    document.getElementById('deltaT').value = ''; 
    document.getElementById('resultMessage').style.display = 'none'; 
}

function calculateKineticEnergy() {
    const mass = parseFloat(document.getElementById('massKE').value);
    const velocity = parseFloat(document.getElementById('velocityKE').value);

    if (isNaN(mass) || isNaN(velocity) || mass <= 0 || velocity <= 0) {
        alert('Будь ласка, введіть коректні значення для маси та швидкості!');
        return;
    }

    const energy = 0.5 * mass * Math.pow(velocity, 2);

    document.getElementById('resultText').innerText = `Кінетична енергія: ${energy} Дж.`;
    document.getElementById('resultMessage').style.display = 'block';
}

function clearFields() {
    document.getElementById('massKE').value = ''; 
    document.getElementById('velocityKE').value = ''; 
    document.getElementById('resultMessage').style.display = 'none'; 
}

function toggleMenu(event, id, btn) {
    event.preventDefault(); // Запобігає переходу за посиланням

    const menu = document.getElementById(id);
    
    if (menu.style.display === "none" || menu.style.display === "") {
        menu.style.display = "block"; // Показує меню
        btn.innerHTML = "&#9650;"; // Стрілка вгору
    } else {
        menu.style.display = "none"; // Ховає меню
        btn.innerHTML = "&#9660;"; // Стрілка вниз
    }
}

// Функція для обчислення моменту сили за формулою M = F * d
function calculateMomentOfForce() {
    const force = parseFloat(document.getElementById('force').value);
    const distance = parseFloat(document.getElementById('distance').value);

    if (isNaN(force) || isNaN(distance) || force <= 0 || distance <= 0) {
        alert('Будь ласка, введіть коректні значення для сили та відстані!');
        return;
    }

    const momentOfForce = force * distance;
    document.getElementById('resultText').innerText = `Момент сили: ${momentOfForce} Н·м`;
    document.getElementById('resultMessage').style.display = 'block';
}

function clearFieldsMomentOfForce() {
    document.getElementById('force').value = '';
    document.getElementById('distance').value = '';
    document.getElementById('resultMessage').style.display = 'none';
}
