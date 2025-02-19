function selectFormula() {
    const selectedFormula = document.getElementById('formulaSelect').value;
    const inputFields = document.getElementById('inputFields');
    const resultMessage = document.getElementById('resultMessage');
    const newtonForm = document.getElementById('newtonForm');
    const velocityForm = document.getElementById('velocityForm');
    const kineticEnergyForm = document.getElementById('kineticEnergyForm');


    // Сховати всі форми вводу
    newtonForm.style.display = 'none';
    velocityForm.style.display = 'none';
    kineticEnergyForm.style.display = 'none';

    // Вибір формули
    if (selectedFormula === 'F = ma') {
        newtonForm.style.display = 'block';
        resultMessage.style.display = 'none';
    } else if (selectedFormula === 'v = Δx / Δt') {
        velocityForm.style.display = 'block';
        resultMessage.style.display = 'none';
    } else if (selectedFormula === 'E_k = 1/2 * m * v^2') {
        kineticEnergyForm.style.display = 'block';
        resultMessage.style.display = 'none';
    } else {
        resultMessage.style.display = 'none';
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


function toggleDescription(event, id, btn) {
    event.preventDefault(); // Запобігає переходу за посиланням, якщо це необхідно
    
    const desc = document.getElementById(id);
    
    // Перевірка, чи відображається опис
    if (desc.style.display === "none") {
        desc.style.display = "block"; // Показує опис
        btn.innerHTML = "&#9650;"; // Змінює стрілку на вгору
    } else {
        desc.style.display = "none"; // Сховує опис
        btn.innerHTML = "&#9660;"; // Змінює стрілку на вниз
    }
} 
