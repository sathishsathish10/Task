const data = [
    { id: 1, name: 'sathishkumar',email:'sathishkumar@gmail.com', age: 21 },
    { id: 2, name: 'vicky',email:'vicky@gmail.com', age: 23 },
    { id: 3, name: 'vinith',email:'vinith@gmail.com', age: 23 },
    { id: 4, name: 'sarath',email:'sarath@gmail.com', age: 22 },
    { id: 5, name: 'vinoth',email:'vinksfjflsjfjslfoth@gmail.com', age: 24 },
    { id: 6, name: 'vinoth',email:'vinskjflsjfoth@gmail.com', age: 24 },
    { id: 7, name: 'vinoth',email:'vinoth@gmail.com', age: 24 },
    { id: 8, name: 'vinolskdjflsjth',email:'vinoth@gmail.com', age: 24 },
    { id: 9, name: 'vinoth',email:'vinotslfjlskdfjh@gmail.com', age: 24 },
    
];

const itemsPerPage = 3;
let currentPage = 1;

function renderTable(data) {
    const tableBody = document.querySelector('#myTable tbody');
    tableBody.innerHTML = '';

    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;

    for (let i = start; i < end && i < data.length; i++) {
        const row = tableBody.insertRow();
        row.insertCell(0).textContent = data[i].id;
        row.insertCell(1).textContent = data[i].name;
        row.insertCell(2).textContent = data[i].email;
        row.insertCell(3).textContent = data[i].age;
    }
}

function renderPagination(data) {
    const totalPages = Math.ceil(data.length / itemsPerPage);
    const pagination = document.getElementById('pagination');
    pagination.innerHTML = '';

    for (let i = 1; i <= totalPages; i++) {
        const li = document.createElement('li');
        li.textContent = i;
        li.onclick = function () {
            currentPage = i;
            renderTable(data);
            renderPagination(data);
        };
        pagination.appendChild(li);
    }
}

function sortTable(columnIndex) {
    data.sort((a, b) => {
        const valueA = a[Object.keys(a)[columnIndex]];
        const valueB = b[Object.keys(b)[columnIndex]];
        return typeof valueA === 'string'
            ? valueA.localeCompare(valueB)
            : valueA - valueB;
    });

    renderTable(data);
    renderPagination(data);
}


renderTable(data);
renderPagination(data);