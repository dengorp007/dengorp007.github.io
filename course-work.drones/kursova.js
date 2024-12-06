let components = [];
let drones = [];

function addComponent() {
    const name = document.getElementById('component-name').value;
    const price = parseFloat(document.getElementById('component-price').value);
    const quantity = parseInt(document.getElementById('component-quantity').value);

    if (name && !isNaN(price) && !isNaN(quantity)) {
        components.push({ name, price, quantity });
        displayComponents();
    } else {
        alert("Заповніть всі поля коректно!");
    }
}

function displayComponents() {
    const tableBody = document.querySelector('#components-table tbody');
    tableBody.innerHTML = '';

    components.forEach((component, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${component.name}</td>
            <td>${component.price} грн</td>
            <td>${component.quantity}</td>
            <td><button onclick="deleteComponent(${index})">Видалити</button></td>
        `;
        tableBody.appendChild(row);
    });
}

function deleteComponent(index) {
    components.splice(index, 1);
    displayComponents();
}

function createDrone() {
    const droneName = document.getElementById('drone-name').value;

    if (droneName && components.length > 0) {
        const droneComponents = components.map(component => component.name);
        const droneCost = components.reduce((total, component) => total + component.price * component.quantity, 0);

        drones.push({ name: droneName, components: droneComponents, cost: droneCost });
        displayDrones();
    } else {
        alert("Необхідно додати компоненти для створення дрону!");
    }
}

function displayDrones() {
    const tableBody = document.querySelector('#drones-table tbody');
    tableBody.innerHTML = '';

    drones.forEach(drone => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${drone.name}</td>
            <td>${drone.components.join(', ')}</td>
            <td>${drone.cost} грн</td>
        `;
        tableBody.appendChild(row);
    });
}
